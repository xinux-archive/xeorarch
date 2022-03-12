<header>
<img src="https://raw.githubusercontent.com/xinuxuz/website/main/src/images/logo.svg" alt="logo" height="100" align="left">
<h1 style="display: inline">Xeorarch</h1>

Archlinux Paketlar SDK menejeri

[![Version](https://img.shields.io/badge/API-v1.6.1-f36caf.svg?style=flat-square)](https://core.telegram.org/bots/api)
[![install size](https://flat.badgen.net/packagephobia/install/xeorarch)](https://packagephobia.com/result?p=xeorarch)
[![GitHub top language](https://img.shields.io/github/languages/top/xinuxuz/xeorarch?style=flat-square&logo=github)](https://github.com/xinuxuz/xeorarch)
[![Chat](https://img.shields.io/badge/Chat-grey?style=flat-square&logo=telegram)](https://t.me/xinuxuz)
[![Test CI](https://github.com/xinuxuz/xeorarch/actions/workflows/test.yml/badge.svg)](https://github.com/xinuxuz/xeorarch/actions/workflows/test.yml)

</header>

## Haqida

Archlinux o'zining 'pacman' nomli shaxsiy paketlar menejeriga ega. Undan narsalar qidirish esa ikki usulda bajariladi. Birinichisi o'rnatilgan
pacman paketlar menejerini kerakli argumentlar bilan chaqirish yordamida bo'lsa, ikkinchisi esa https://archlinux.org/packages/ yoki
https://aur.archlinux.org/ tashrif buyurgan holda kalit so'zlarini kiritib izlash yordamidadir va bu ba'zi jihatdan noqulaydir. Shu jumladan,
qolgan yangiliklar, o'zgarishlar va boshqa shunday informatsiyalar olish noqulay bo'lgani sababli, biz, Xinux jamiyati, Archlinux turkumini
yoqtiruvchi community sifatida ushbu distributiv uchun TypeScript/JavaScript da SDK yozishga qaror qildik va ushbu paketni ishlab chiqdik.
Ushbu paket yordamida siz biz yozgan qisqartmalar yordamida informatsiyalar tezda qo'lga kiritib, ularni o'zingizning mahsulotingiz ishlab
chiqarishda ishlatishingiz mumkin.

## Qulayliklar

- Standard birinchi darajali paketlarni izlash va qidirilgan paketlar haqida ma'lumot olish
- AUR paketlarini izlash va istalgan paket haqida ma'lumot olish
- (Keyinchalik yana ko'p narsalar qo'shish niyat qilingan)

> Bu proyekt hozir sinov bosqichidan o'tmoqda. Agarda bironta xatolikka duchor
> bo'lsangiz, xatolik haqida [e'lon](https://github.com/xinuxuz/xeorarch/issues/new)
> qoldirishni unutmang.

## O'rnatish

Istalgan node.js paket menejerini ishlatishingiz mumkin. Masalan, npm, yarn, pnpm... Misol:

### Node

```shell
npm install xeorarch
```

### Deno (deps.ts ichida)

```typescript
export * as xeorarch from "https://x.nest.land/xeorarch@2.0.0/src/mod.ts";
```

## Ishlatish (Misol tariqasida)

## Node

```javascript
(async () => {
    const xeorarch = require("xeorarch");
    console.log((await xeorarch.Search.search("linux")).slice(0, 50));
})();
```

## Deno

```typescript
import { xeorarch } from "./deps.ts";

const search = await xeorarch.Search.search("linux");
console.log(search);
```
