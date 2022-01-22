import { default as fetcher } from './fetcher'

export interface PackageInfo {
    pkgname: string
    pkgbase: string
    repo:
        | 'core'
        | 'extra'
        | 'community'
        | 'testing'
        | 'multilib'
        | 'multilib-testing'
    arch: 'x86_64' | 'any' | 'x86'
    pkgver: string
    pkgrel: string | number
    epoch: number
    pkgdesc: string
    url: string
    filename: string
    compressed_size: number
    installed_size: number
    build_date: string | Date
    last_update: string | Date
    flag_date: string | Date | null
    maintainers: string[]
    packager: string[]
    groups: string[]
    licenses: string[]
    conflicts: string[]
    provides: string[]
    replaces: string[]
    depends: string[]
    optdepends: string[]
    makedepends: string[]
    checkdepends: string[]
}

type infoQuery = { arch: string; name: string }

export interface PackageSearch {
    version: number
    limit: number
    valid: boolean
    results: PackageInfo[]
}

/**
 * Search for packages on STD
 * @param name The query to search for
 * @exports
 */
export const search = async (name: string): Promise<PackageSearch> => {
    // Base AUR API URL
    const url = `https://archlinux.org/packages/search/json/?q=${name}`
    return await fetcher(url)
}

/**
 * Get info about one package
 * @param query Packages to get info for
 * @exports
 */
export const info = async (
    query: infoQuery | infoQuery[]
): Promise<PackageInfo[]> => {
    const response: PackageInfo[] = []

    if (!Array.isArray(query)) {
        query = [query]
    }

    for (const option of query) {
        const url = `https://archlinux.org/packages/${option.arch}/x86_64/${option.name}/json`
        try {
            await fetcher(url).then((data) => {
                response.push(data)
            })
        } catch {
            // tslint:disable-next-line:no-empty
        }
    }
    return response
}

export default { search, info }
