// deno-lint-ignore-file no-explicit-any
export default async (link: string | undefined): Promise<any> => {
    if (!link) {
        throw new Error("No link provided");
    }

    try {
        const response = await fetch(link);
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching data: ${error}`);
    }
};
