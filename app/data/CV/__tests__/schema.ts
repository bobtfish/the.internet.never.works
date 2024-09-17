import {
  CVSchema,
  educationSchema,
  accomplishmentSchema,
  openSourceProjectSchema,
  positionSchema,
  employementSchema
} from '../schema'

const anAccomplishment = Object.freeze({
  description: 'I learned to tie my shoelaces properly at the age of 44'
})

describe('accomplishmentSchema', () => {
  test('parse', () => {
    const data = structuredClone(anAccomplishment)
    const result = accomplishmentSchema.safeParse(data)
    expect(result.success).toEqual(true)
    expect(result.data).toBeDefined()
    expect(result.error).toBeUndefined()
  })
})

const aPosition = Object.freeze({
  title: 'chief coffee fetcher',
  startDate: '2008-01-03',
  endDate: '2019-02-13'
})

describe('positionSchema', () => {
  test('parse', () => {
    const data = structuredClone(aPosition)
    const result = positionSchema.safeParse(data)
    expect(result.success).toEqual(true)
    expect(result.data).toBeDefined()
    expect(result.error).toBeUndefined()
  })
})

const anEmployment = Object.freeze({
  companyName: 'Bobs bolts',
  url: 'http://www.bobsbolts.com',
  positions: [aPosition],
  accomplishments: [anAccomplishment]
})

describe('employmentSchema', () => {
  test('parse', () => {
    const data = structuredClone(anEmployment)
    const result = employementSchema.safeParse(data)
    expect(result.success).toEqual(true)
    expect(result.data).toBeDefined()
    expect(result.error).toBeUndefined()
  })
})

const anOpenSourceProject = Object.freeze({
  name: 'WonderLib',
  url: 'https://github.com/lol/lol',
  description: 'A library that will make you wonder',
  languages: 'Nonsense'
})

describe('employmentSchema', () => {
  test('parse', () => {
    const data = structuredClone(anOpenSourceProject)
    const result = openSourceProjectSchema.safeParse(data)
    expect(result.success).toEqual(true)
    expect(result.data).toBeDefined()
    expect(result.error).toBeUndefined()
  })
})

const anEducation = Object.freeze({
  institution: 'Primary skool',
  description: '25 meter swimming certificate (sewn in my trunks by Mum)',
  startDate: '1986',
  endDate: '1987'
})

describe('educationSchema', () => {
  test('parse', () => {
    const data = structuredClone(anEducation)
    const result = educationSchema.safeParse(data)
    expect(result.success).toEqual(true)
    expect(result.data).toBeDefined()
    expect(result.error).toBeUndefined()
  })
})

const myCV = Object.freeze({
  name: 'Tom',
  synopsis: 'Chief Coffee Fetcher',
  profile: 'A lot of words about how I kick ass',
  education: [anEducation],
  employmentHistory: [anEmployment],
  openSourceProjects: [anOpenSourceProject],
  programmingLanguages: ['BASIC']
})

describe('CVSchema', () => {
  test('parse', () => {
    const data = structuredClone(myCV)
    const result = CVSchema.safeParse(data)
    expect(result.error).toEqual(undefined)
    expect(result.success).toEqual(true)
    expect(result.data).toBeDefined()
  })
})