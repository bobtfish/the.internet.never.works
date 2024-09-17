const regexMdLinks = /\[([^[]+)\]\(([^)]*)\)/gm

import type { MarkdownLink } from './types'

const flatten = function (array: any[]) {
  let newArray: any[] = []

  for (const item of array) {
    if (item === undefined) continue
    if (Array.isArray(item)) {
      newArray = newArray.concat(item)
    } else {
      newArray.push(item)
    }
  }

  return newArray
}

export function parseLinks (source: string | any[]): MarkdownLink[] {
  if (!Array.isArray(source)) source = [source]
  return flatten(
    source.map((md: any) => {
      if (typeof md !== 'string') return undefined
      const matches = md.matchAll(regexMdLinks)
      return Array.from(matches).map((value: unknown, _index: number) => {
        const [match, text, url] = value as string[]
        return { match, text, url }
      })
    })
  )
}

export function splitParagraphs(source: string | any[]): any[] {
    if (!Array.isArray(source)) source = [source]
    return flatten(
        source.map((md: any) => {
          if (typeof md !== 'string') return md
          return md.split(/(?<=\S)\s*\n\s*\n/).map((value: string) => value.trim()).filter((value: string) => value !== '')
        })
    )
}
