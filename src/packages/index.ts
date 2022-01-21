import { default as fetcher } from '../fetcher'
import { PackageInfo, PackageSearch } from '../types/packages'

const info = async (name: string): Promise<PackageInfo> => {
    const url = `https://archlinux.org/packages/community/x86_64/${name}/json`
    return await fetcher(url)
}

const search = async (name: string): Promise<PackageSearch> => {
    const url = `https://archlinux.org/packages/search/json/?q=${name}`
    const request = await fetcher(url)
    return request.results
}

export default { info, search }
