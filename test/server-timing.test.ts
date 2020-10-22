/**
 * @jest-environment node
 */

import fastify from 'fastify'

function build(options?: import('../src').ServerTimingOptions) {
  const app = fastify({
    logger: {
      level: 'warn',
      prettyPrint: true,
    },
  })

  app.register(import('../src'), options)

  app.post<{
    Body: undefined | { name?: string; duration?: number; description?: string }[]
  }>('/', async function(request, reply) {
    ;(request.body || []).forEach(({ name = 'hello', duration, description } = {}) => {
      reply.addServerTiming(name, duration, description)
    })

    return { hello: 'world' }
  })

  return app
}

test('add one timing', async () => {
  const app = build()

  const response = await app.inject({
    method: 'POST',
    url: '/',
    payload: [{ name: 'hello', duration: 0.12345, description: 'world' }],
  })

  expect(response.headers).toHaveProperty('server-timing', 'hello;dur=0.12;desc=world')
  expect(response.headers).toHaveProperty('timing-allow-origin', '*')
})

test('skip timings', async () => {
  const app = build({
    skip: request => (request.query as any).skipTimings,
  })

  const response = await app.inject({
    method: 'POST',
    url: '/',
    query: { skipTimings: '1' },
    payload: [{ name: 'hello', duration: 0.12345, description: 'world' }],
  })

  expect(response.headers).not.toHaveProperty('server-timing')
  expect(response.headers).not.toHaveProperty('timing-allow-origin')
})

test('add no timing', async () => {
  const app = build()

  const response = await app.inject({
    method: 'POST',
    url: '/',
    payload: [],
  })

  expect(response.headers).not.toHaveProperty('server-timing')
  expect(response.headers).not.toHaveProperty('timing-allow-origin', '*')
})

test('add several timings', async () => {
  const app = build()

  const response = await app.inject({
    method: 'POST',
    url: '/',
    payload: [
      { name: 'cache', duration: 0.012, description: 'miss' },
      { name: 'db', duration: 0.345 },
    ],
  })

  expect(response.headers).toHaveProperty('server-timing', 'cache;dur=0.01;desc=miss,db;dur=0.34')
})

test('invalid duration', async () => {
  const app = build()

  const response = await app.inject({
    method: 'post',
    url: '/',
    payload: [{ name: 'db', duration: null }],
  })

  expect(response.headers).toHaveProperty('server-timing', 'db')
})

test('description with space', async () => {
  const app = build()

  const response = await app.inject({
    method: 'post',
    url: '/',
    payload: [{ name: 'hello', duration: 1.2345, description: 'some value' }],
  })

  expect(response.headers).toHaveProperty('server-timing', 'hello;dur=1.23;desc="some value"')
})
