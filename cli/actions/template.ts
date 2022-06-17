import { Package as Both } from "../../src/search.ts";
import { PackageInfo as STD } from "../../src/std.ts";
import { AURInfoResult as AUR } from "../../src/aur.ts";
import { createOutput, responses, shortcuts } from "./helper.ts";

export const std = (pack: STD) =>
    createOutput({
        "Daraja": pack.repo,
        "Ismi": pack.pkgname,
        "Versiya": pack.pkgver,
        "Ma'lumot": pack.pkgdesc,
        "Arxitektura": pack.arch,
        "URL": pack.url,
        "Litsenziya": pack.licenses.join(shortcuts.divider),
        "Guruh": pack.groups.join(shortcuts.divider),
        "Ichida keladi": pack.provides.join(shortcuts.divider),
        "Bog'liq paketlar": pack.depends.join(shortcuts.divider),
        "Qo'shimcha keraklar": pack.optdepends.join(
            shortcuts.newLineDivider(pack),
        ),
        "Conflicts With": pack.conflicts.join(shortcuts.divider),
        "Almashtiradi": pack.replaces.join(shortcuts.divider),
        "Ko'chirish hajmi": pack.compressed_size.toString(),
        "O'rnatish hajmi": pack.installed_size.toString(),
        "Yig'uvchi": pack.packager.join(shortcuts.divider),
        "Yig'ish sanasi": pack.build_date.toString(),
    });

export const aur = (pack: AUR) =>
    createOutput({
        "Daraja": "aur",
        "Ismi": pack.Name,
        "Versiya": pack.Version,
        "Ma'lumot": pack.Description,
        "URL": pack.URL,
        "AUR URL": pack.URLPath,
        "Litsenziya": pack.License.join(shortcuts.divider),
        "Bog'liq paketlar": pack.Depends
            ? pack.Depends?.join(shortcuts.divider)
            : responses.notFound,
        "Boshqaruvchi": pack.Maintainer,
        "Votes": pack.NumVotes.toString(),
        "Taniqlik Indeksi": pack.Popularity.toString(),
        "Birinchi versiya": new Date(pack.FirstSubmitted).toString(),
        "Oxirgi o'zgarish": new Date(pack.LastModified).toString(),
        "Eskirgan": pack.OutOfDate ? responses.yes : responses.no,
    });

export const both = (pack: Both) =>
    createOutput({
        "Ismi": pack.name,
        "": pack.base,
        "Ma'lumot": pack.desc,
        "Arxitektura": pack.arch,
        "Daraja": pack.repo ? pack.repo : responses.notFound,
        "Turi": pack.type,
        "Versiya": pack.version.toString(),
        "URL": pack.url,
        "Muallif": typeof pack.author === "string"
            ? pack.author
            : pack.author.join(shortcuts.divider),
        "Oxirgi o'zgarish": new Date(pack.updated).toString(),
        "O'rnatish uchun": pack.install,
    });
