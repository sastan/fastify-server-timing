# fastify-server-timing

> Server-Timing API for fastify.

[![License](https://badgen.net/npm/license/fastify-server-timing)](https://github.com/sastan/fastify-server-timing/blob/main/LICENSE)
[![Latest Release](https://badgen.net/npm/v/fastify-server-timing)](https://www.npmjs.com/package/fastify-server-timing)
![Node Version](https://badgen.net/npm/node/fastify-server-timing)
[![Fastify Version](https://badgen.net/badge/fastify/3.x/blue)](https://fastify.io)
[![Publish Size](https://badgen.net/packagephobia/publish/fastify-server-timing)](https://packagephobia.com/result?p=fastify-server-timing)
![Typescript](https://badgen.net/npm/types/fastify-server-timing)
[![Sponsor](https://badgen.net/badge/sponsored%20by/Kenoxa/2980b9)](https://www.kenoxa.com)

Expose [Server-Timing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing) to communicate one or more metrics and descriptions for a given request-response cycle. It is used to surface any backend server timing metrics (e.g. database read/write, CPU time, file system access, etc.) in the developer tools in the user's browser or in the [PerformanceServerTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceServerTiming) interface.

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

- [Options](https://github.com/sastan/fastify-server-timing/blob/main/docs/interfaces/options.md)
- [reply.addServerTiming](https://github.com/sastan/fastify-server-timing/blob/main/docs/interfaces/addservertiming.md)(`name`: string, `duration?`: undefined \| number, `description?`: undefined \| string): void

## Sponsors

[![Kenoxa GmbH](https://images.opencollective.com/kenoxa/9c25796/logo/68.png)](https://www.kenoxa.com) [Kenoxa GmbH](https://www.kenoxa.com)

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

## NPM Statistics

[![NPM](https://nodei.co/npm/fastify-server-timing.png)](https://nodei.co/npm/fastify-server-timing/)

## License

`fastify-server-timing` is open source software [licensed as MIT](https://github.com/sastan/fastify-server-timing/blob/main/LICENSE).
