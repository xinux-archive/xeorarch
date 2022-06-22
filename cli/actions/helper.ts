// deno-lint-ignore-file no-explicit-any
export const responses = {
    yes: "Ha",
    no: "Yo'q",
    notFound: "Mavjud emas",
};

export const shortcuts = {
    space: " ",
    divider: ", ",
    list: ",\n ",
    newLineDivider: (data: any) =>
        `,\n${shortcuts.space.repeat(findLength(Object.keys(data)))}`,
};

export const findLength = (
    data: string[],
): number => Math.max(...data.map((i) => i.length));

export const spacer = (length: number, input: string): string => {
    return shortcuts.space.repeat(length - input.length);
};

export const delimiter = (key: string, value: string, length: number) => {
    return `${key}${spacer(length, key)}: ${value}\n`;
};

export const createOutput = (data: Record<string, string>) => {
    let output = "";
    for (const key of Object.keys(data)) {
        output += delimiter(key, data[key], findLength(Object.keys(data)));
    }
    return output;
};
