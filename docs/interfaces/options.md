**[fastify-server-timing - v1.0.2](../README.md)**

> [Globals](../README.md) / Options

# Interface: Options

Options for the fastify plugin.

## Hierarchy

* **Options**

## Index

### Properties

* [allowOrigin](options.md#alloworigin)
* [allowOriginHeader](options.md#alloworiginheader)
* [digits](options.md#digits)
* [header](options.md#header)
* [skip](options.md#skip)

## Properties

### allowOrigin

• `Optional` **allowOrigin**: undefined \| string

*Defined in [index.ts:75](https://github.com/sastan/fastify-server-timing/blob/1e49fbb/src/index.ts#L75)*

The value for the Timing-Allow-Origin response header (default: `"*"`).

- `*`: The server may specify "*" as a wildcard, thereby allowing any origin to see timing resources.
- `<origin>`: Specifies a URI that may see the timing resources. You can specify multiple origins, separated by commas.

___

### allowOriginHeader

• `Optional` **allowOriginHeader**: undefined \| string

*Defined in [index.ts:67](https://github.com/sastan/fastify-server-timing/blob/1e49fbb/src/index.ts#L67)*

The Timing-Allow-Origin response header specifies origins that are allowed to see values
of attributes retrieved via features of the Resource Timing API, which would
otherwise be reported as zero due to cross-origin restrictions (default: `"timing-allow-origin"`).

___

### digits

• `Optional` **digits**: undefined \| number

*Defined in [index.ts:60](https://github.com/sastan/fastify-server-timing/blob/1e49fbb/src/index.ts#L60)*

Number of digits after the decimal point of a duration (default: `2`).

Must be in the range 0 - 20, inclusive.

___

### header

• `Optional` **header**: undefined \| string

*Defined in [index.ts:53](https://github.com/sastan/fastify-server-timing/blob/1e49fbb/src/index.ts#L53)*

The http header (default: `"server-timing"`)

___

### skip

• `Optional` **skip**: [Skip](skip.md)

*Defined in [index.ts:80](https://github.com/sastan/fastify-server-timing/blob/1e49fbb/src/index.ts#L80)*

Determines if the Timing-Allow-Origin response header should **not** be added to the reply (default: never).
