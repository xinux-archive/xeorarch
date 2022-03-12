import * as STD from "../src/std.ts";

Deno.test("STD Query Search", async () => {
    const request = await STD.search("linux");

    // Check for options
    const keys = Object.keys(request);
    const options = [
        "version",
        "limit",
        "valid",
        "results",
        "num_pages",
        "page",
    ];

    for (const key of keys) {
        if (!options.includes(key)) {
            throw new Error("Doesn't include required object");
        }
    }

    // Check for packages to have required keys
    const packages = request.results;
    const options2 = [
        "pkgname",
        "pkgbase",
        "repo",
        "arch",
        "pkgver",
        "pkgrel",
        "epoch",
        "pkgdesc",
        "url",
        "filename",
        "compressed_size",
        "installed_size",
        "build_date",
        "last_update",
        "flag_date",
        "maintainers",
        "packager",
        "groups",
        "licenses",
        "conflicts",
        "provides",
        "replaces",
        "depends",
        "optdepends",
        "makedepends",
        "checkdepends",
    ];

    for (const packer of packages) {
        const keys = Object.keys(packer);
        for (const key of keys) {
            if (!options2.includes(key)) {
                throw new Error("Doesn't include required object");
            }
        }
    }
});

Deno.test("STD Query Info", async () => {
    const request = await STD.info([{ arch: "core", name: "linux" }]);
    const keys = Object.keys(request[0]);

    const options = [
        "pkgname",
        "pkgbase",
        "repo",
        "arch",
        "pkgver",
        "pkgrel",
        "epoch",
        "pkgdesc",
        "url",
        "filename",
        "compressed_size",
        "installed_size",
        "build_date",
        "last_update",
        "flag_date",
        "maintainers",
        "packager",
        "groups",
        "licenses",
        "conflicts",
        "provides",
        "replaces",
        "depends",
        "optdepends",
        "makedepends",
        "checkdepends",
    ];

    for (const key of keys) {
        if (!options.includes(key)) {
            throw new Error("Given objects don't exist on json");
        }
    }
});
