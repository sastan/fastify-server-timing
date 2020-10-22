import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

const fp = require('fastify-plugin')

const { never } = require('@carv/stdlib')

const kServerTimings = Symbol('fastify-server-timing')

declare module 'fastify' {
  interface FastifyReply {
    /**
     * @param name to use
     * @param duration in seconds
     * @param description to use
     */
    addServerTiming: (name: string, duration?: number, description?: string) => void

    /**
     * @private
     */
    [kServerTimings]: string[] | null
  }
}

export interface ServerTimingOptions {
  /**
   * The http header (default: `"server-timing"`)
   */
  header?: string

  /**
   * Number of digits after the decimal point of a duration (default: `2`).
   *
   * Must be in the range 0 - 20, inclusive.
   */
  digits?: number

  /**
   * The Timing-Allow-Origin response header specifies origins that are allowed to see values
   * of attributes retrieved via features of the Resource Timing API, which would
   * otherwise be reported as zero due to cross-origin restrictions (default: `"timing-allow-origin"`).
   */
  allowOriginHeader?: string

  /**
   * The value for the Timing-Allow-Origin response header (default: `"*"`).
   *
   * - `*`: The server may specify "*" as a wildcard, thereby allowing any origin to see timing resources.
   * - `<origin>`: Specifies a URI that may see the timing resources. You can specify multiple origins, separated by commas.
   */
  allowOrigin?: string

  /**
   * Determines if the Timing-Allow-Origin response header should **not** be added to the reply (default: never).
   */
  skip?: (request: FastifyRequest, reply: FastifyReply) => boolean
}

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing
export default fp(serverTimingPlugin, { name: 'server-timing', fastify: '3.x' })

function serverTimingPlugin(
  fastify: FastifyInstance,
  {
    header = 'server-timing',
    digits = 2,
    allowOriginHeader = 'timing-allow-origin',
    allowOrigin = '*',
    skip = never,
  }: ServerTimingOptions,
  done: () => void,
) {
  fastify.decorateReply(kServerTimings, null)

  fastify.decorateReply('addServerTiming', function addServerTiming(
    this: FastifyReply,
    name: string,
    duration?: number,
    description?: string,
  ) {
    let value = name

    if (Number.isFinite(duration)) {
      value += `;dur=${(duration as number).toFixed(digits)}`
    }

    // Parse the description. If empty, do not add it. If string with space, double quote value
    if (typeof description === 'string') {
      value += `;desc=${/[\s=;,"]/.test(description) ? JSON.stringify(description) : description}`
    }

    const serverTimings = this[kServerTimings] || (this[kServerTimings] = [])

    serverTimings.push(value)
  })

  if (header) {
    fastify.addHook('onSend', (request, reply, _payload, next) => {
      const serverTimings = reply[kServerTimings]

      if (serverTimings && !skip(request, reply)) {
        if (allowOriginHeader && allowOrigin) {
          reply.header(allowOriginHeader, allowOrigin)
        }

        if (serverTimings.length > 0) {
          reply.header(header, serverTimings.join(','))
        }
      }

      next()
    })
  }

  done()
}
