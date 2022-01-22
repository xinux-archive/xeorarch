# Interface: PackageInfo

[STD](../wiki/STD).PackageInfo

## Table of contents

### Properties

- [arch](../wiki/STD.PackageInfo#arch)
- [build\_date](../wiki/STD.PackageInfo#build_date)
- [checkdepends](../wiki/STD.PackageInfo#checkdepends)
- [compressed\_size](../wiki/STD.PackageInfo#compressed_size)
- [conflicts](../wiki/STD.PackageInfo#conflicts)
- [depends](../wiki/STD.PackageInfo#depends)
- [epoch](../wiki/STD.PackageInfo#epoch)
- [filename](../wiki/STD.PackageInfo#filename)
- [flag\_date](../wiki/STD.PackageInfo#flag_date)
- [groups](../wiki/STD.PackageInfo#groups)
- [installed\_size](../wiki/STD.PackageInfo#installed_size)
- [last\_update](../wiki/STD.PackageInfo#last_update)
- [licenses](../wiki/STD.PackageInfo#licenses)
- [maintainers](../wiki/STD.PackageInfo#maintainers)
- [makedepends](../wiki/STD.PackageInfo#makedepends)
- [optdepends](../wiki/STD.PackageInfo#optdepends)
- [packager](../wiki/STD.PackageInfo#packager)
- [pkgbase](../wiki/STD.PackageInfo#pkgbase)
- [pkgdesc](../wiki/STD.PackageInfo#pkgdesc)
- [pkgname](../wiki/STD.PackageInfo#pkgname)
- [pkgrel](../wiki/STD.PackageInfo#pkgrel)
- [pkgver](../wiki/STD.PackageInfo#pkgver)
- [provides](../wiki/STD.PackageInfo#provides)
- [replaces](../wiki/STD.PackageInfo#replaces)
- [repo](../wiki/STD.PackageInfo#repo)
- [url](../wiki/STD.PackageInfo#url)

## Properties

### arch

• **arch**: ``"x86_64"`` \| ``"any"`` \| ``"x86"``

#### Defined in

[std.ts:13](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L13)

___

### build\_date

• **build\_date**: `string` \| `Date`

#### Defined in

[std.ts:22](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L22)

___

### checkdepends

• **checkdepends**: `string`[]

#### Defined in

[std.ts:35](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L35)

___

### compressed\_size

• **compressed\_size**: `number`

#### Defined in

[std.ts:20](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L20)

___

### conflicts

• **conflicts**: `string`[]

#### Defined in

[std.ts:29](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L29)

___

### depends

• **depends**: `string`[]

#### Defined in

[std.ts:32](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L32)

___

### epoch

• **epoch**: `number`

#### Defined in

[std.ts:16](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L16)

___

### filename

• **filename**: `string`

#### Defined in

[std.ts:19](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L19)

___

### flag\_date

• **flag\_date**: ``null`` \| `string` \| `Date`

#### Defined in

[std.ts:24](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L24)

___

### groups

• **groups**: `string`[]

#### Defined in

[std.ts:27](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L27)

___

### installed\_size

• **installed\_size**: `number`

#### Defined in

[std.ts:21](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L21)

___

### last\_update

• **last\_update**: `string` \| `Date`

#### Defined in

[std.ts:23](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L23)

___

### licenses

• **licenses**: `string`[]

#### Defined in

[std.ts:28](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L28)

___

### maintainers

• **maintainers**: `string`[]

#### Defined in

[std.ts:25](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L25)

___

### makedepends

• **makedepends**: `string`[]

#### Defined in

[std.ts:34](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L34)

___

### optdepends

• **optdepends**: `string`[]

#### Defined in

[std.ts:33](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L33)

___

### packager

• **packager**: `string`[]

#### Defined in

[std.ts:26](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L26)

___

### pkgbase

• **pkgbase**: `string`

#### Defined in

[std.ts:5](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L5)

___

### pkgdesc

• **pkgdesc**: `string`

#### Defined in

[std.ts:17](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L17)

___

### pkgname

• **pkgname**: `string`

#### Defined in

[std.ts:4](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L4)

___

### pkgrel

• **pkgrel**: `string` \| `number`

#### Defined in

[std.ts:15](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L15)

___

### pkgver

• **pkgver**: `string`

#### Defined in

[std.ts:14](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L14)

___

### provides

• **provides**: `string`[]

#### Defined in

[std.ts:30](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L30)

___

### replaces

• **replaces**: `string`[]

#### Defined in

[std.ts:31](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L31)

___

### repo

• **repo**: ``"core"`` \| ``"extra"`` \| ``"community"`` \| ``"testing"`` \| ``"multilib"`` \| ``"multilib-testing"``

#### Defined in

[std.ts:6](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L6)

___

### url

• **url**: `string`

#### Defined in

[std.ts:18](https://github.com/xinuxuz/xeorarch/blob/e534786/src/std.ts#L18)
