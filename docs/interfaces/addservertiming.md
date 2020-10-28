**[fastify-server-timing - v1.0.2](../README.md)**

> [Globals](../README.md) / AddServerTiming

# Interface: AddServerTiming

This is available on the [FastifyReply](https://www.fastify.io/docs/latest/Reply/) as `addServerTiming`.

## Hierarchy

* **AddServerTiming**

## Callable

▸ (`name`: string, `duration?`: undefined \| number, `description?`: undefined \| string): void

*Defined in [index.ts:23](https://github.com/sastan/fastify-server-timing/blob/main/src/index.ts#L23)*

Adds a server timing entry to the response.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | to use |
`duration?` | undefined \| number | in seconds |
`description?` | undefined \| string | to use  |

**Returns:** void
