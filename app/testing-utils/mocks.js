import { jest, beforeAll } from '@jest/globals'

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })

  Object.defineProperty(window, 'getComputedStyle', {
    value: jest.fn().mockImplementation(() => {
      return {
        getPropertyValue: jest.fn()
      }
    })
  })

  Object.defineProperty(global, 'structuredClone', {
    value: data => {
      return JSON.parse(JSON.stringify(data))
    }
  })
})
