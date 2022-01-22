# Namespace: AUR

## Table of contents

### Interfaces

- [AURInfo](../wiki/AUR.AURInfo)
- [AURInfoResult](../wiki/AUR.AURInfoResult)
- [AURSearch](../wiki/AUR.AURSearch)
- [AURSearchResult](../wiki/AUR.AURSearchResult)

### Type aliases

- [searchBy](../wiki/AUR#searchby)

### Functions

- [info](../wiki/AUR#info)
- [search](../wiki/AUR#search)

## Type aliases

### searchBy

Ƭ **searchBy**: ``"name"`` \| ``"name-desc"`` \| ``"maintainer"`` \| ``"depends"`` \| ``"makedepends"`` \| ``"optdepends"`` \| ``"checkdepends"``

#### Defined in

[aur.ts:54](https://github.com/xinuxuz/xeorarch/blob/e534786/src/aur.ts#L54)

## Functions

### info

▸ `Const` **info**(`query`): `Promise`<[`AURInfo`](../wiki/AUR.AURInfo)[]\>

Get info about one or multiple packages

**`exports`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` \| `string`[] | Packages to get info for |

#### Returns

`Promise`<[`AURInfo`](../wiki/AUR.AURInfo)[]\>

#### Defined in

[aur.ts:87](https://github.com/xinuxuz/xeorarch/blob/e534786/src/aur.ts#L87)

___

### search

▸ `Const` **search**(`query`, `by?`): `Promise`<[`AURSearch`](../wiki/AUR.AURSearch)\>

Search for packages on AUR

**`exports`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The query to search for |
| `by?` | [`searchBy`](../wiki/AUR#searchby) | The field to search by |

#### Returns

`Promise`<[`AURSearch`](../wiki/AUR.AURSearch)\>

#### Defined in

[aur.ts:74](https://github.com/xinuxuz/xeorarch/blob/e534786/src/aur.ts#L74)
