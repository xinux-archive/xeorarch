import { default as fetcher } from '../fetcher'
import { AURInfo, AURSearch } from '../types/aur'

/**
 * Base AUR API URL
 */
const baseUrl = 'https://aur.archlinux.org/rpc/?v=5'

/**
 * Search for packages on AUR
 * @param query The query to search for
 * @param by The field to search by
 */
const search = async (
    query: string,
    by?:
        | 'name'
        | 'name-desc'
        | 'maintainer'
        | 'depends'
        | 'makedepends'
        | 'optdepends'
        | 'checkdepends'
): Promise<AURSearch> => {
    const url = `${baseUrl}&type=search${by ? '&by=' + by : ''}&arg=${query}`
    const response = await fetcher(url)
    return response.results
}

/**
 * Get info about one or multiple packages
 * @param query Packages to get info for
 */
const info = async (query: string | string[]): Promise<AURInfo[]> => {
    if (typeof query === 'string') {
        query = [query]
    }

    const url = `${baseUrl}&type=info${query
        .map((pkg) => `&arg[]=${pkg}`)
        .join('')}`
    const response = await fetcher(url)
    return response.results
}

export default { search, info }
