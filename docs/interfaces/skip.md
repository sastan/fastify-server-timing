**[fastify-server-timing - v1.0.2](../README.md)**

> [Globals](../README.md) / Skip

# Interface: Skip

Determines if the Timing-Allow-Origin response header should **not** be added to the reply (default: never).

## Hierarchy

* **Skip**

## Callable

▸ (`request`: FastifyRequest, `reply`: FastifyReply): unknown

*Defined in [index.ts:37](https://github.com/sastan/fastify-server-timing/blob/1e49fbb/src/index.ts#L37)*

Determines if the Timing-Allow-Origin response header should **not** be added to the reply (default: never).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`request` | FastifyRequest | the [FastifyRequest](https://www.fastify.io/docs/latest/Request/) |
`reply` | FastifyReply | the [FastifyReply](https://www.fastify.io/docs/latest/Reply/) |

**Returns:** unknown

a truthy value to prevent adding the server-timing header
