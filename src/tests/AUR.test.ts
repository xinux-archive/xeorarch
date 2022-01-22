import * as AUR from '../aur'

test('AUR Query Search', async () => {
    const request = await AUR.search('hello')

    // Check for options
    const options = Object.keys(request)
    const requiredOptions = ['version', 'type', 'resultcount', 'results']

    for (const req of requiredOptions) {
        expect(options).toContain(req)
    }

    // Check for packages to have required keys
    const packages = request.results
    const requiredPacks = [
        'ID',
        'Name',
        'PackageBaseID',
        'PackageBase',
        'Version',
        'Description',
        'URL',
        'NumVotes',
        'Popularity',
        'OutOfDate',
        'Maintainer',
        'FirstSubmitted',
        'LastModified',
        'URLPath'
    ]

    for (const packer of packages) {
        const keys = Object.keys(packer)
        for (const req of requiredPacks) {
            expect(keys).toContain(req)
        }
    }
})

test('AUR Query Info', async () => {
    const request = await AUR.info('hello')

    const keys = Object.keys(request[0])
    const requirement = [
        'ID',
        'Name',
        'PackageBaseID',
        'PackageBase',
        'Version',
        'Description',
        'URL',
        'NumVotes',
        'Popularity',
        'OutOfDate',
        'Maintainer',
        'FirstSubmitted',
        'LastModified',
        'URLPath',
        'License',
        'Keywords'
    ]

    for (const req of requirement) {
        expect(keys).toContain(req)
    }
})
