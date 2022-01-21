import { default as fetcher } from './fetcher'
import { AURInfo, AURSearch, searchBy } from './types/aur'

/**
 * Base AUR API URL
 */
const baseUrl = 'https://aur.archlinux.org/rpc/?v=5'

/**
 * Search for packages on AUR
 * @param query The query to search for
 * @param by The field to search by
 */
export const search = async (
    query: string,
    by?: searchBy
): Promise<AURSearch> => {
    const url = `${baseUrl}&type=search${by ? '&by=' + by : ''}&arg=${query}`
    return await fetcher(url)
}

/**
 * Get info about one or multiple packages
 * @param query Packages to get info for
 */
export const info = async (query: string | string[]): Promise<AURInfo[]> => {
    if (typeof query === 'string') {
        query = [query]
    }

    const url = `${baseUrl}&type=info${query
        .map((pkg) => `&arg[]=${pkg}`)
        .join('')}`
    const response = await fetcher(url)
    return response.results
}
