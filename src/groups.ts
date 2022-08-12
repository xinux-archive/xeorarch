import { DOMParser } from "./deps.ts";

export interface OldGroups {
    arch: string;
    name: string;
    packs: Package[];
}

export interface Package {
    arch: string;
    repo: string;
    name: string;
    version: string;
    desc: string;
    updated: string;
    flag: string;
}

export interface ListGroup {
    arch: string;
    name: string;
    packs: string;
    update: string;
}

/**
 * Get all groups
 * @param cursor page number for pagination
 * @param limit count of items per page
 * @exports
 */
export const groups = async (cursor = 1, limit = 10): Promise<ListGroup[]> => {
    return await fetch("https://archlinux.org/groups/").then(async (r) => {
        const page = new DOMParser().parseFromString(
            await r.text(),
            "text/html",
        );

        const table = page!.querySelectorAll(
            "#content > div.box > table > tbody > tr",
        );
        const groupsData: ListGroup[] = [];

        table!.forEach((tr) => {
            groupsData.push({
                arch: tr.childNodes[1].textContent,
                name: tr.childNodes[3].textContent,
                packs: tr.childNodes[5].textContent,
                update: tr.childNodes[7].textContent,
            });
        });

        return groupsData.slice(
            (cursor - 1) * limit,
            cursor * limit,
        );
    });
};

/**
 * Get information about a group of packages
 * @param name name of group
 * @param arch aarch of group
 */
export const group = async (
    name: string,
    arch = "x86_64",
): Promise<OldGroups> => {
    return await fetch(`https://archlinux.org/groups/${arch}/${name}/`)
        .then(async (r) => {
            const page = new DOMParser().parseFromString(
                await r.text(),
                "text/html",
            );
            const table = page!.querySelectorAll(
                "#content > div.box > table > tbody > tr",
            );
            const groupsData: Package[] = [];

            table!.forEach((tr) => {
                groupsData.push({
                    arch: tr.childNodes[1].textContent,
                    repo: tr.childNodes[3].textContent,
                    name: tr.childNodes[5].textContent,
                    version: tr.childNodes[7].textContent,
                    desc: tr.childNodes[9].textContent,
                    updated: tr.childNodes[11].textContent,
                    flag: tr.childNodes[13].textContent,
                });
            });

            return {
                arch,
                name,
                packs: groupsData,
            };
        });
};
