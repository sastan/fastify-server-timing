**[fastify-server-timing - v1.0.2](../README.md)**

> [Globals](../README.md) / AddServerTiming

# Interface: AddServerTiming

Adds a server timing entry to the response.

This is available on the [FastifyReply](https://www.fastify.io/docs/latest/Reply/) as `addServerTiming`.

## Hierarchy

* **AddServerTiming**

## Callable

▸ (`name`: string, `duration?`: undefined \| number, `description?`: undefined \| string): void

*Defined in [index.ts:25](https://github.com/sastan/fastify-server-timing/blob/1e49fbb/src/index.ts#L25)*

Adds a server timing entry to the response.

This is available on the [FastifyReply](https://www.fastify.io/docs/latest/Reply/) as `addServerTiming`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | to use |
`duration?` | undefined \| number | in seconds |
`description?` | undefined \| string | to use  |

**Returns:** void
