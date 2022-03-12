// deno-lint-ignore-file no-explicit-any
import { cheerio } from "./platform.deno.ts";

export interface Groups {
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
        const page = cheerio.load(await r.text());
        const table = page("#content > div.box > table > tbody");

        const groupsData = table.children("tr").map((_: number, el: any) => {
            const select = cheerio.load(el);
            return {
                arch: select("td:nth-child(1)").text(),
                name: select("td:nth-child(2) > a").text(),
                packs: select("td:nth-child(3)").text(),
                update: select("td:nth-child(4)").text(),
            };
        });

        return groupsData.get<ListGroup>().slice(
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
export const group = async (name: string, arch = "x86_64"): Promise<Groups> => {
    return await fetch(`https://archlinux.org/groups/${arch}/${name}/`)
        .then(async (r) => {
            const page = cheerio.load(await r.text());
            const table = page("#content > div.box > table > tbody");

            const groupsData: Package[] = table
                .children("tr")
                .map((_: number, el: any) => {
                    const select = cheerio.load(el);
                    return {
                        arch: select("td:nth-child(1)").text(),
                        repo: select("td:nth-child(2)").text(),
                        name: select("td:nth-child(3)").text(),
                        version: select("td:nth-child(4)").text(),
                        desc: select("td:nth-child(5)").text(),
                        updated: select("td:nth-child(6)").text(),
                        flag: select("td:nth-child(7)").text(),
                    };
                })
                .get();

            return {
                arch,
                name,
                packs: groupsData,
            };
        });
};
