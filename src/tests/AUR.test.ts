import AUR from '../aur'

test('Querying Info', async () => {
    const request = await AUR.info(['hello', 'world'])
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
