import parse from "./parse.ts";
import help from "./actions/help.ts";
import { colors } from "./deps.ts";
import { search as Both } from "../src/search.ts";
import { both } from "./actions/template.ts";

export const wrapper = async () => {
    const parsed = await parse(Deno.args);

    switch (parsed.mode) {
        case "help":
            help();
            break;
        case "search":
            help();
            break;
        case "info":
            parsed.keys
                ? parsed.keys.map(async (pack): Promise<void> => {
                    const search = await Both(pack);
                    search.map((p) => {
                        console.log(both(p));
                    });
                })
                : console.log(colors.red("Ka'lit so'zlari kiritilmadi!"));
            break;
        default:
            console.error(colors.red("Invalid command"));
    }
};
