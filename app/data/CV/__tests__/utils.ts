import { loadData } from '../utils'
import { CVSchema } from '../schema'

const data = loadData()

test('can loadData', () => {
  expect(data).toBeDefined()
})

test('parse', () => {
    const data = loadData()
    const result = CVSchema.safeParse(data)
    expect(result.error).toEqual(undefined)
    expect(result.success).toEqual(true)
    expect(result.data).toBeDefined()
})
