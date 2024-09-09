import { parseLinks } from '../Parser'

const mdContents = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit..

[hello link](/admin/table_edit/table_edit.cfm?action=edit&table_name=organizationsXcategories)

Lorem ipsum dolor sit amet, consectetur adipiscing elit..

[otherLink](https://google.com)

Lorem ipsum dolor sit amet, consectetur adipiscing elit..

[third link](https://google.com)
`

const expLinks = [
    {
        match: '[hello link](/admin/table_edit/table_edit.cfm?action=edit&table_name=organizationsXcategories)',
        url: '/admin/table_edit/table_edit.cfm?action=edit&table_name=organizationsXcategories',
        text: 'hello link'
    },
    {
        match: '[otherLink](https://google.com)',
        url: 'https://google.com',
        text: 'otherLink'
    },
    {
        match: '[third link](https://google.com)',
        url: 'https://google.com',
        text: 'third link'
    }
]

test('parse', () => {
    const links = parseLinks(mdContents)
    expect(links).toEqual(expLinks)
})

test('parse array', () => {
    const links = parseLinks([<br key={"0"} />, mdContents])
    expect(links).toEqual(expLinks)
})