// vitest-environment jsdom

import { DEFAULT_NORMALISE, type NormaliseOptions } from '@scissors/sharp'

import { createNormaliseStore, defaultState } from '@stores/normalise'

describe('@stores/normalise', () => {
  const store = createNormaliseStore()

  afterEach(() => {
    store.setState(defaultState)
  })

  it('should correctly add / remove state', () => {
    expect(store.getState().isAdded).toBe(false)
    store.getState().add()
    expect(store.getState().isAdded).toBe(true)

    store.getState().remove()
    expect(store.getState().isAdded).toBe(false)

    store.getState().add()
    store.setState({
      lower: 0,
      upper: 255
    })
    store.getState().remove()
    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().getNormaliseOptions()).toBe(null)
  })

  it('should correctly set / reset state', () => {
    const testState: NormaliseOptions = {
      lower: 0,
      upper: 255
    }

    expect(store.getState().isAdded).toBe(false)
    store.getState().set(testState)
    expect(store.getState().isAdded).toBe(true)
    expect(store.getState().getNormaliseOptions()).toStrictEqual(testState)

    store.getState().reset()
    expect(store.getState().getNormaliseOptions()).toStrictEqual(DEFAULT_NORMALISE)

    store.getState().set(null)
    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().getNormaliseOptions()).toBe(null)

    store.getState().reset()
    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().getNormaliseOptions()).toBe(null)
  })

  it('should correctly set values', () => {
    store.setState({ isAdded: true })

    expect(store.getState().lower).toBe(defaultState.lower)
    store.getState().setLower(3)
    expect(store.getState().lower).toBe(3)

    expect(store.getState().upper).toBe(defaultState.upper)
    store.getState().setUpper(6)
    expect(store.getState().upper).toBe(6)

    expect(store.getState().getNormaliseOptions()).toStrictEqual({
      lower: 3,
      upper: 6
    })
    store.setState(defaultState)

    store.getState().setLower(3)
    expect(store.getState().lower).toBe(defaultState.lower)

    store.getState().setUpper(6)
    expect(store.getState().upper).toBe(defaultState.upper)
  })
})
