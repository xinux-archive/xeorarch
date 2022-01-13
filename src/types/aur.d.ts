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
    Depends: string[]
    License: string[]
    Keywords: string[]
}

export interface AURInfo {
    version: number
    type: 'multiinfo' | 'error'
    resultcount: number
    results: AURInfoResult[]
}
