import { default as fetcher } from './fetcher'

export interface AURSearchResult {
    ID: number
    Name: string
    PackageBaseID: number
    PackageBase: string
    Version: string
    Description: string
    URL: string
    NumVotes: number
    Popularity: number
    OutOfDate: boolean | null
    Maintainer: string
    FirstSubmitted: number
    LastModified: number
    URLPath: string
}

export interface AURSearch {
    version: number
    type: 'search' | 'error'
    resultcount: string
    results: AURSearchResult[]
}

export interface AURInfoResult {
    ID: number
    Name: string
    PackageBaseID: number
    PackageBase: string
    Version: string
    Description: string
    URL: string
    NumVotes: number
    Popularity: number
    OutOfDate: boolean | null
    Maintainer: string
    FirstSubmitted: number
    LastModified: number
    URLPath: string
    Depends?: string[]
    License: string[]
    Keywords: string[]
}

export interface AURInfo {
    version: number
    type: 'multiinfo' | 'error'
    resultcount: number
    results: AURInfoResult[]
}

export type searchBy =
    | 'name'
    | 'name-desc'
    | 'maintainer'
    | 'depends'
    | 'makedepends'
    | 'optdepends'
    | 'checkdepends'

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
