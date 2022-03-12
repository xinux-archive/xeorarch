import * as AUR from "../src/aur.ts";

Deno.test("AUR Query Search", async () => {
    const request = await AUR.search("hello");

    // Check for options
    const keys = Object.keys(request);
    const options = ["version", "type", "resultcount", "results"];

    for (const key of keys) {
        if (!options.includes(key)) {
            throw new Error("Given objects don't exist on json");
        }
    }

    // Check for packages to have required keys
    const packages = request.results;
    const options2 = [
        "ID",
        "Name",
        "PackageBaseID",
        "PackageBase",
        "Version",
        "Description",
        "URL",
        "NumVotes",
        "Popularity",
        "OutOfDate",
        "Maintainer",
        "FirstSubmitted",
        "LastModified",
        "URLPath",
    ];

    for (const packer of packages) {
        const keys = Object.keys(packer);
        for (const key of keys) {
            if (!options2.includes(key)) {
                throw new Error("Error with types");
            }
        }
    }
});

Deno.test("AUR Query Info", async () => {
    const request = await AUR.info("hello");

    const keys = Object.keys(request[0]);
    const options = [
        "ID",
        "Name",
        "PackageBaseID",
        "PackageBase",
        "Version",
        "Description",
        "URL",
        "NumVotes",
        "Popularity",
        "OutOfDate",
        "Maintainer",
        "FirstSubmitted",
        "LastModified",
        "URLPath",
        "License",
        "Keywords",
    ];

    for (const key of keys) {
        if (!options.includes(key)) {
            throw new Error("Error with types");
        }
    }
});
