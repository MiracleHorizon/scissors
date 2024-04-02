// vitest-environment jsdom

import type { NegateOptions } from '@scissors/sharp'

import { createNegateStore, defaultState } from '@stores/negate'

describe('@stores/negate', () => {
  const store = createNegateStore()

  afterEach(() => {
    store.setState(defaultState)
  })

  it('should correctly set / reset state', () => {
    const testState: NegateOptions = {
      value: true,
      alpha: true
    }

    expect(store.getState().value).toBe(defaultState.value)
    expect(store.getState().getNegateOptions()).toBe(null)
    store.getState().set(testState)
    expect(store.getState().value).toBe(true)
    expect(store.getState().alpha).toBe(true)
    expect(store.getState().getNegateOptions()).toStrictEqual(testState)

    store.getState().reset()
    expect(store.getState().value).toBe(defaultState.value)
    expect(store.getState().alpha).toBe(defaultState.alpha)

    store.getState().set({
      value: true,
      alpha: true
    })
    store.getState().set(null)
    expect(store.getState().value).toBe(defaultState.value)
    expect(store.getState().alpha).toBe(defaultState.alpha)
  })

  it('should correctly toggle value', () => {
    expect(store.getState().value).toBe(defaultState.value)
    store.getState().toggleValue()
    expect(store.getState().value).toBe(!defaultState.value)

    store.setState({
      alpha: true
    })

    store.getState().toggleValue()
    expect(store.getState().value).toBe(defaultState.alpha)
    expect(store.getState().alpha).toBe(defaultState.alpha)
  })

  it('should correctly toggle alpha', () => {
    expect(store.getState().value).toBe(defaultState.value)
    expect(store.getState().alpha).toBe(defaultState.alpha)

    store.getState().toggleAlpha()
    expect(store.getState().alpha).toBe(defaultState.alpha)

    store.setState({
      value: true
    })

    store.getState().toggleAlpha()
    expect(store.getState().alpha).toBe(!defaultState.alpha)
  })
})
