import * as Groups from '../groups'

test('Groups Query', async () => {
    const request = await Groups.groups()

    const keys = Object.keys(request[0])
    const requirement = ['arch', 'name', 'packs', 'update']

    for (const req of requirement) {
        expect(keys).toContain(req)
    }
})

test('Group Query', async () => {
    const request = await Groups.group('alsa')

    // Check for options
    const main = Object.keys(request)
    const requiredOptions = ['arch', 'name', 'packs']

    for (const req of requiredOptions) {
        expect(main).toContain(req)
    }

    // Check for packages to have required keys
    const packages = request.packs
    const requiredPacks = [
        'arch',
        'repo',
        'name',
        'version',
        'desc',
        'updated',
        'flag'
    ]

    for (const packer of packages) {
        const keys = Object.keys(packer)
        for (const req of requiredPacks) {
            expect(keys).toContain(req)
        }
    }
})
