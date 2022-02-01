import { FastifyInstance, FastifyPluginCallback, FastifyRequest, FastifyReply } from 'fastify'

import fastifyPlugin from 'fastify-plugin'

const { never } = require('@carv/stdlib')

const kServerTimings = Symbol('fastify-server-timing')

declare module 'fastify' {
  interface FastifyReply {
    addServerTiming: AddServerTiming

    /**
     * @private
     */
    [kServerTimings]: string[] | null
  }
}

/**
 * This is available on the [FastifyReply](https://www.fastify.io/docs/latest/Reply/) as `addServerTiming`.
 */
export interface AddServerTiming {
  /**
   * Adds a server timing entry to the response.
   *
   * @param name to use
   * @param duration in milliseconds
   * @param description to use
   */
  (name: string, duration?: number, description?: string): void
}

export interface Skip {
  /**
   * @param request the [FastifyRequest](https://www.fastify.io/docs/latest/Request/)
   * @param reply the [FastifyReply](https://www.fastify.io/docs/latest/Reply/)
   * @return a truthy value to prevent adding the server-timing header
   */
  (request: FastifyRequest, reply: FastifyReply): unknown
}

/**
 * Options for the fastify plugin.
 */
export interface Options {
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
   * Determines if the server timings should **not** be added to the reply (default: never).
   */
  skip?: Skip
}

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing
export default fastifyPlugin(serverTimingPlugin, { name: 'server-timing', fastify: '3.x' });

function serverTimingPlugin(
  fastify: FastifyInstance,
  {
    header = 'server-timing',
    digits = 2,
    allowOriginHeader = 'timing-allow-origin',
    allowOrigin = '*',
    skip = never,
  }: Options,
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
