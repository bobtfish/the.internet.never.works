import { parseLinks, splitParagraphs } from '../Parser'

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
    match:
      '[hello link](/admin/table_edit/table_edit.cfm?action=edit&table_name=organizationsXcategories)',
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

describe('parseLinks', () => {
  test('parse', () => {
    const links = parseLinks(mdContents)
    expect(links).toEqual(expLinks)
  })

  test('parse array', () => {
    const links = parseLinks([<br key={'0'} />, mdContents])
    expect(links).toEqual(expLinks)
  })
})

const expParas = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
  '[hello link](/admin/table_edit/table_edit.cfm?action=edit&table_name=organizationsXcategories)',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
  '[otherLink](https://google.com)',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
  '[third link](https://google.com)'
]

describe('splitParagraphs', () => {
  test('split', () => {
    const splits = splitParagraphs(mdContents)
    expect(splits).toEqual(expParas)
  })

  test('para trailing space', () => {
    const splits = splitParagraphs("foo    \n\nbar")
    expect(splits).toEqual(['foo', 'bar'])
  })

  test('blank line space', () => {
    const splits = splitParagraphs("foo\n  \nbar")
    expect(splits).toEqual(['foo', 'bar'])
  })

  test('para trailing space and blank line space', () => {
    const splits = splitParagraphs("foo   \n  \nbar")
    expect(splits).toEqual(['foo', 'bar'])
  })

  test('leading space', () => {
    const splits = splitParagraphs("      foo\n\nbar")
    expect(splits).toEqual(['foo', 'bar'])
  })

  test('leading empties', () => {
    const splits = splitParagraphs("\n\n\n\n\n\nfoo\n\nbar")
    expect(splits).toEqual(['foo', 'bar'])
  })

  test('3 linebreaks', () => {
    const splits = splitParagraphs("foo\n\n\nbar")
    expect(splits).toEqual(['foo', 'bar'])
  })

  test('trailing empties', () => {
    const splits = splitParagraphs("foo\n\nbar\n\n   \n\n")
    expect(splits).toEqual(['foo', 'bar'])
  })
})
