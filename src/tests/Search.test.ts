import * as Search from '../search'

test('Query Search', async () => {
    jest.setTimeout(10000)
    const request = await Search.search('linux')

    // Check for packages to have required keys
    const requiredPacks = [
        'name',
        'base',
        'desc',
        'arch',
        'type',
        'version',
        'url',
        'author',
        'updated',
        'install'
    ]

    for (const packer of request) {
        const keys = Object.keys(packer)
        for (const req of requiredPacks) {
            expect(keys).toContain(req)
        }
    }
})
