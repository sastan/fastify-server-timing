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

*Defined in [index.ts:72](https://github.com/sastan/fastify-server-timing/blob/main/src/index.ts#L72)*

The value for the Timing-Allow-Origin response header (default: `"*"`).

- `*`: The server may specify "*" as a wildcard, thereby allowing any origin to see timing resources.
- `<origin>`: Specifies a URI that may see the timing resources. You can specify multiple origins, separated by commas.

___

### allowOriginHeader

• `Optional` **allowOriginHeader**: undefined \| string

*Defined in [index.ts:64](https://github.com/sastan/fastify-server-timing/blob/main/src/index.ts#L64)*

The Timing-Allow-Origin response header specifies origins that are allowed to see values
of attributes retrieved via features of the Resource Timing API, which would
otherwise be reported as zero due to cross-origin restrictions (default: `"timing-allow-origin"`).

___

### digits

• `Optional` **digits**: undefined \| number

*Defined in [index.ts:57](https://github.com/sastan/fastify-server-timing/blob/main/src/index.ts#L57)*

Number of digits after the decimal point of a duration (default: `2`).

Must be in the range 0 - 20, inclusive.

___

### header

• `Optional` **header**: undefined \| string

*Defined in [index.ts:50](https://github.com/sastan/fastify-server-timing/blob/main/src/index.ts#L50)*

The http header (default: `"server-timing"`)

___

### skip

• `Optional` **skip**: [Skip](skip.md)

*Defined in [index.ts:77](https://github.com/sastan/fastify-server-timing/blob/main/src/index.ts#L77)*

Determines if the server timings should **not** be added to the reply (default: never).
