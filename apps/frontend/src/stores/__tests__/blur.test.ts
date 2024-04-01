// @vitest-environment jsdom
import pick from 'lodash.pick'

import { type BlurOptions, MIN_BLUR_SIGMA } from '@scissors/sharp'

import { createBlurStore, defaultState } from '@stores/blur'

describe('@stores/blur', () => {
  it('should correctly set / reset state', () => {
    const store = createBlurStore()
    const testState: BlurOptions = {
      value: true,
      sigma: 10
    }

    expect(pick(store.getState(), ['value', 'sigma', 'isSigmaAdded'])).toStrictEqual(defaultState)
    store.getState().set(testState)
    expect(pick(store.getState(), ['value', 'sigma'])).toStrictEqual(testState)
    expect(store.getState().isSigmaAdded).toBe(true)

    store.getState().set({
      ...testState,
      value: false
    })

    expect(store.getState().value).toBe(false)
    expect(store.getState().sigma).toBe(null)
    expect(store.getState().isSigmaAdded).toBe(false)

    store.getState().reset()
    expect(pick(store.getState(), ['value', 'sigma', 'isSigmaAdded'])).toStrictEqual(defaultState)

    /*
     * If the value is set to null, state will be reset.
     */
    store.getState().set(testState)
    store.getState().set(null)
    expect(pick(store.getState(), ['value', 'sigma', 'isSigmaAdded'])).toStrictEqual(defaultState)
  })

  it('should correctly toggle value', () => {
    const store = createBlurStore()

    expect(store.getState().value).toBe(defaultState.value)
    expect(store.getState().toggle())
    expect(store.getState().value).toBe(!defaultState.value)
  })

  it('should correctly add / remove sigma', () => {
    const store = createBlurStore()

    expect(store.getState().value).toBe(false)
    expect(store.getState().isSigmaAdded).toBe(false)
    expect(store.getState().addSigma())
    expect(store.getState().isSigmaAdded).toBe(false)

    store.setState({ value: true })

    expect(store.getState().addSigma())
    expect(store.getState().isSigmaAdded).toBe(true)
    expect(store.getState().sigma).toBe(MIN_BLUR_SIGMA)
    expect(store.getState().removeSigma())
    expect(store.getState().isSigmaAdded).toBe(false)
    expect(store.getState().sigma).toBe(defaultState.sigma)
  })

  it('should correctly set / reset sigma', () => {
    const store = createBlurStore()
    const testSigmaValue = 5.3

    expect(store.getState().value).toBe(false)
    expect(store.getState().sigma).toBe(null)
    store.getState().setSigma(testSigmaValue)
    expect(store.getState().sigma).toBe(null)

    store.setState({ value: true, isSigmaAdded: true })

    store.getState().setSigma(testSigmaValue)
    expect(store.getState().sigma).toBe(testSigmaValue)

    store.getState().resetSigma()
    expect(store.getState().sigma).toBe(MIN_BLUR_SIGMA)
    expect(store.getState().isSigmaAdded).toBe(true)
  })

  it('should correctly return blur options or null', () => {
    const store = createBlurStore()

    expect(store.getState().value).toBe(false)
    expect(store.getState().getBlurOptions()).toBe(null)

    store.setState({ value: true })
    expect(store.getState().getBlurOptions()).toStrictEqual({
      value: true,
      sigma: null
    })

    store.setState({
      value: true,
      sigma: 5.3,
      isSigmaAdded: true
    })
    expect(store.getState().getBlurOptions()).toStrictEqual({
      value: true,
      sigma: 5.3
    })

    store.setState({
      value: true,
      sigma: null,
      isSigmaAdded: true
    })
    expect(store.getState().getBlurOptions()).toStrictEqual({
      value: true,
      sigma: MIN_BLUR_SIGMA
    })
  })
})
