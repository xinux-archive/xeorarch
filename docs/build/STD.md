# Namespace: STD

## Table of contents

### Interfaces

- [PackageInfo](../wiki/STD.PackageInfo)
- [PackageSearch](../wiki/STD.PackageSearch)

### Functions

- [info](../wiki/STD#info)
- [search](../wiki/STD#search)

## Functions

### info

▸ `Const` **info**(`query`): `Promise`<[`PackageInfo`](../wiki/STD.PackageInfo)[]\>

Get info about one package

**`exports`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `infoQuery` \| `infoQuery`[] | Packages to get info for |

#### Returns

`Promise`<[`PackageInfo`](../wiki/STD.PackageInfo)[]\>

#### Defined in

[std.ts:63](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L63)

___

### search

▸ `Const` **search**(`name`): `Promise`<[`PackageSearch`](../wiki/STD.PackageSearch)\>

Search for packages on STD

**`exports`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The query to search for |

#### Returns

`Promise`<[`PackageSearch`](../wiki/STD.PackageSearch)\>

#### Defined in

[std.ts:52](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L52)
