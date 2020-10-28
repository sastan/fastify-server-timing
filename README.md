# fastify-server-timing

[Server-Timing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing) for [fastify](https://fastify.io) to communicate one or more metrics and descriptions for a given request-response cycle. It is used to surface any backend server timing metrics (e.g. database read/write, CPU time, file system access, etc.) in the developer tools in the user's browser or in the [PerformanceServerTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming) interface.

[![License](https://flat.badgen.net/npm/license/fastify-server-timing)](https://github.com/sastan/fastify-server-timing/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/fastify-server-timing?label=release)](https://www.npmjs.com/package/fastify-server-timing)
[![Node Version](https://flat.badgen.net/npm/node/fastify-server-timing?color=blue)](https://nodejs.org/)
[![Fastify Version](https://flat.badgen.net/badge/fastify/3.x/blue)](https://fastify.io)
[![Typescript](https://flat.badgen.net/badge/icon/included?icon=typescript&label)](https://unpkg.com/browse/fastify-server-timing/dist/index.d.ts)
[![Sponsor](https://flat.badgen.net/badge/sponsored%20by/Kenoxa/2980b9)](https://www.kenoxa.com)

## Installation

```sh
npm install fastify-server-timing
```

## Usage

Register the plugin and if needed pass to it some custom options.

```js
const fastify = require('fastify')()

// using the defaults
fastify.register(require('fastify-server-timing'))

// with custom options
fastify.register(require('fastify-server-timing'), { /* ... Options ... */ })

// use reply.addServerTiming to report a metric
fastify.get('/', (request, reply) => {
  reply.addServerTiming('cache', 23.2, 'Cache Read')
  return {}
})
```

## API

- [Options](https://github.com/sastan/fastify-server-timing/blob/main/docs/interfaces/options.md#interface-options)
- [reply.addServerTiming](https://github.com/sastan/fastify-server-timing/blob/main/docs/interfaces/addservertiming.md#interface-addservertiming)(`name`: string, `duration?`: undefined \| number, `description?`: undefined \| string): void

## Support

This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/sastan/fastify-server-timing). Feel free to [open an issue](https://github.com/sastan/fastify-server-timing/issues) if you have any idea, question, or you've found a bug.

## Contribute

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

We are following the [Conventional Commits](https://www.conventionalcommits.org) convention.

### Develop

- `npm test`: Run test suite
- `npm run build`: Generate bundles
- `npm run lint`: Lints code

## Sponsors

[![Kenoxa GmbH](https://images.opencollective.com/kenoxa/9c25796/logo/68.png)](https://www.kenoxa.com) [Kenoxa GmbH](https://www.kenoxa.com)

## License

[MIT](https://github.com/sastan/fastify-server-timing/blob/main/LICENSE) © [Sascha Tandel](https://github.com/sastan)
