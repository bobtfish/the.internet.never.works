import { loadData } from '../Data'
import { CVSchema } from '../Schema'

test('can loadData', () => {
  expect(loadData()).toBeDefined()
})

test('parse', () => {
    const data = loadData()
    const result = CVSchema.safeParse(data)
    expect(result.error).toEqual(undefined)
    expect(result.success).toEqual(true)
    expect(result.data).toBeDefined()
})
