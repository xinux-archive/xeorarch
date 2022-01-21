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
    url: string | URL
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

export interface PackageSearch {
    version: number
    limit: number
    valid: boolean
    results: PackageInfo[]
}
