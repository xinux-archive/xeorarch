(async () => {
    const xeorarch = require("./lib/mod.js");
    console.log(await xeorarch.AUR.search("hello"));
})();
