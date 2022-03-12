import * as Search from "../src/search.ts";

Deno.test("Query Search", async () => {
    const request = await Search.search("linux");

    // Check for packages to have required keys
    const options = [
        "name",
        "base",
        "desc",
        "arch",
        "repo",
        "type",
        "version",
        "url",
        "author",
        "updated",
        "install",
    ];

    for (const packer of request) {
        const keys = Object.keys(packer);
        for (const key of keys) {
            if (!options.includes(key)) {
                throw new Error("Doesn't include required object");
            }
        }
    }
});
