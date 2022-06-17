interface Arguments {
    mode: string | null;
    keys: string[] | null;
}

/**
 * Command Parser
 *
 * Structure:
 * cmd [mode] [key]
 *
 * Example:
 * xea search linux
 * xea help
 * xeo info linux
 */
export default (args: string[]) => {
    return {
        mode: args[0] ? args[0] : null,
        keys: (args.length > 1) ? args.slice(1) : null,
    } as Arguments;
};
