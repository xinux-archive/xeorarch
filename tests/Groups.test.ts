import * as Groups from "../src/groups.ts";

Deno.test("Groups Query", async () => {
    const request = await Groups.groups();

    const keys = Object.keys(request[0]);
    const options = ["arch", "name", "packs", "update"];

    for (const key of keys) {
        if (!options.includes(key)) {
            throw new Error("Doesn't include required object");
        }
    }
});

Deno.test("Group Query", async () => {
    const request = await Groups.group("alsa");

    // Check for options
    const keys = Object.keys(request);
    const options = ["arch", "name", "packs"];

    for (const key of keys) {
        if (!options.includes(key)) {
            throw new Error("Doesn't include required object");
        }
    }

    // Check for packages to have required keys
    const packages = request.packs;
    const options2 = [
        "arch",
        "repo",
        "name",
        "version",
        "desc",
        "updated",
        "flag",
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
