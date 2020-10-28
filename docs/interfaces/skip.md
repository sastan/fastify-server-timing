**[fastify-server-timing - v1.0.2](../README.md)**

> [Globals](../README.md) / Skip

# Interface: Skip

## Hierarchy

* **Skip**

## Callable

▸ (`request`: FastifyRequest, `reply`: FastifyReply): unknown

*Defined in [index.ts:34](https://github.com/sastan/fastify-server-timing/blob/main/src/index.ts#L34)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`request` | FastifyRequest | the [FastifyRequest](https://www.fastify.io/docs/latest/Request/) |
`reply` | FastifyReply | the [FastifyReply](https://www.fastify.io/docs/latest/Reply/) |

**Returns:** unknown

a truthy value to prevent adding the server-timing header
