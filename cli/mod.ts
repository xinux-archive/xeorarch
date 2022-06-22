import parse from "./parse.ts";
import help from "./actions/help.ts";
import { colors } from "./deps.ts";
import { search as Both } from "../src/search.ts";
import { both } from "./actions/template.ts";
import { shortcuts } from "./actions/helper.ts";

export const wrapper = async () => {
    const parsed = await parse(Deno.args);

    switch (parsed.mode) {
        case "help":
            help();
            break;
        case "search":
            parsed.keys
                ? parsed.keys.map(async (pack): Promise<void> => {
                    const search = await Both(pack);
                    console.log(
                        "Topilgan yaqin natijalar:\n",
                        search.map(p => p.name).slice(0, 20).join(shortcuts.list),
                    );
                })
                : console.log(colors.red("Ka'lit so'zlari kiritilmadi!"));
            break;
        case "info":
            parsed.keys
                ? parsed.keys.map(async (pack): Promise<void> => {
                    const search = (await Both(pack));

                    if (search[0]) {
                        console.log(both(search[0]));
                    } else {
                        console.log("Ushbu kalit so'zi bo'yicha paket topilmadi!")
                    }
                })
                : console.log(colors.red("Ka'lit so'zlari kiritilmadi!"));
            break;
        default:
            console.error(colors.red("Noto'g'ri komanda! \"xea help\" ishga tushuring ko'proq ma'lumotlar uchun"));
    }
};
