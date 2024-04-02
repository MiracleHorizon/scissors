// vitest-environment jsdom

import { DEFAULT_TINT_COLOR } from '@scissors/sharp'

import { createTintStore, defaultState } from '@stores/tint'

describe('@stores/tint', () => {
  const store = createTintStore()

  afterEach(() => {
    store.setState(defaultState)
  })

  it('should correctly add / remove tint', () => {
    expect(store.getState().isAdded).toBe(false)
    store.getState().add()
    expect(store.getState().isAdded).toBe(true)
    store.getState().remove()
    expect(store.getState().isAdded).toBe(false)
  })

  it('should correctly set / reset state', () => {
    expect(store.getState().isAdded).toBe(false)

    store.getState().set('#0f883f')
    expect(store.getState().color).toBe('#0f883f')
    expect(store.getState().isAdded).toBe(true)

    store.getState().reset()
    expect(store.getState().color).toBe(DEFAULT_TINT_COLOR)
    expect(store.getState().isAdded).toBe(true)

    store.getState().set(null)
    expect(store.getState().color).toBe(null)
    expect(store.getState().isAdded).toBe(false)

    store.getState().reset()
    expect(store.getState().color).toBe(null)
  })

  it('should correctly set color value', () => {
    store.getState().setColor('#f77333')
    expect(store.getState().color).toBe('#f77333')

    store.getState().setColor('#000000')
    expect(store.getState().color).toBe('#000000')
  })
})
