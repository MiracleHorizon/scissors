// @vitest-environment jsdom

import { DEFAULT_GAMMA, MIN_GAMMA } from '@scissors/sharp'

import { createGammaStore, defaultState } from '@stores/gamma'

describe('@stores/gamma', () => {
  const store = createGammaStore()

  afterEach(() => {
    store.setState(defaultState)
  })

  it('should correctly add / remove gamma', () => {
    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().gamma).toBe(null)

    store.getState().add()

    expect(store.getState().isAdded).toBe(true)
    expect(store.getState().gamma).toBe(DEFAULT_GAMMA)

    store.getState().remove()

    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().gamma).toBe(null)
  })

  it('should correctly set / reset state', () => {
    const testValue = 1.59

    expect(store.getState().gamma).toBe(null)
    expect(store.getState().isAdded).toBe(false)

    store.getState().set(testValue)
    expect(store.getState().gamma).toBe(testValue)
    expect(store.getState().isAdded).toBe(true)

    store.getState().reset()
    expect(store.getState().gamma).toBe(DEFAULT_GAMMA)
    expect(store.getState().isAdded).toBe(true)

    store.getState().set(null)
    expect(store.getState().gamma).toBe(null)
    expect(store.getState().isAdded).toBe(false)

    store.getState().reset()
    expect(store.getState().gamma).toBe(null)
    expect(store.getState().isAdded).toBe(false)
  })

  it('should correctly set value', () => {
    const testValue = 2.24

    expect(store.getState().gamma).toBe(null)
    store.getState().setValue(testValue)
    expect(store.getState().gamma).toBe(null)

    store.setState({ isAdded: true })

    store.getState().setValue(testValue)
    expect(store.getState().gamma).toBe(testValue)

    store.getState().setValue(null)
    expect(store.getState().gamma).toBe(null)
  })

  it('should correctly return gamma value or null', () => {
    expect(store.getState().gamma).toBe(null)
    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().getGammaValue()).toBe(null)

    store.setState({ isAdded: true, gamma: 5.3 })
    expect(store.getState().getGammaValue()).toBe(5.3)

    store.setState({ gamma: null })
    expect(store.getState().getGammaValue()).toBe(MIN_GAMMA)
  })
})
