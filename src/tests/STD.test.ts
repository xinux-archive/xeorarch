import * as STD from '../std'

test('Query Search', async () => {
    const request = await STD.search('linux')

    // Check for options
    const options = Object.keys(request)
    const requiredOptions = ['version', 'limit', 'valid', 'results']

    for (const req of requiredOptions) {
        expect(options).toContain(req)
    }

    // Check for packages to have required keys
    const packages = request.results
    const requiredPacks = [
        'pkgname',         'pkgbase',
        'repo',            'arch',
        'pkgver',          'pkgrel',
        'epoch',           'pkgdesc',
        'url',             'filename',
        'compressed_size', 'installed_size',
        'build_date',      'last_update',
        'flag_date',       'maintainers',
        'packager',        'groups',
        'licenses',        'conflicts',
        'provides',        'replaces',
        'depends',         'optdepends',
        'makedepends',     'checkdepends'
    ]

    for (const packer of packages) {
        const keys = Object.keys(packer)
        for (const req of requiredPacks) {
            expect(keys).toContain(req)
        }
    }
})

// test('Query Info', async () => {
//     const request = await AUR.info(['hello', 'world'])
//     const keys = Object.keys(request[0])
//     const requirement = [
//         'ID',
//         'Name',
//         'PackageBaseID',
//         'PackageBase',
//         'Version',
//         'Description',
//         'URL',
//         'NumVotes',
//         'Popularity',
//         'OutOfDate',
//         'Maintainer',
//         'FirstSubmitted',
//         'LastModified',
//         'URLPath',
//         'License',
//         'Keywords'
//     ]
//
//     for (const req of requirement) {
//         expect(keys).toContain(req)
//     }
// })
