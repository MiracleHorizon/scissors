// vitest-environment jsdom

import {
  MAX_HUE,
  MAX_LIGHTNESS,
  MAX_SATURATION,
  MIN_BRIGHTNESS,
  type ModulateOptions
} from '@scissors/sharp'

import { createModulateStore, defaultState } from '@stores/modulate'

describe('@stores/modulate', () => {
  it('should correctly add / remove modulate', () => {
    const store = createModulateStore()

    expect(store.getState().isAdded).toBe(false)

    store.getState().add()
    expect(store.getState().isAdded).toBe(true)

    store.setState({
      lightness: MAX_LIGHTNESS
    })
    expect(store.getState().lightness).toBe(MAX_LIGHTNESS)
    store.getState().remove()
    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().lightness).toBe(defaultState.lightness)
  })

  it('should correctly set / reset state', () => {
    const store = createModulateStore()
    const testState: ModulateOptions = {
      lightness: MAX_LIGHTNESS,
      brightness: MIN_BRIGHTNESS,
      saturation: MAX_SATURATION,
      hue: MAX_HUE
    }

    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().getModulateOptions()).toBe(null)

    store.getState().set(testState)
    expect(store.getState().isAdded).toBe(true)
    expect(store.getState().getModulateOptions()).toStrictEqual(testState)

    store.getState().reset()
    expect(store.getState().isAdded).toBe(true)
    expect(store.getState().getModulateOptions()).toBe(null)

    store.getState().set({
      lightness: null,
      brightness: null,
      saturation: null,
      hue: null
    })
    expect(store.getState().isAdded).toBe(true)
    expect(store.getState().getModulateOptions()).toBe(null)

    store.getState().set(null)
    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().getModulateOptions()).toBe(null)

    store.getState().reset()
    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().getModulateOptions()).toBe(null)
  })

  it('should correctly set options values', () => {
    const store = createModulateStore()

    expect(store.getState().lightness).toBe(defaultState.lightness)
    store.getState().setLightness(MAX_LIGHTNESS)
    expect(store.getState().lightness).toBe(MAX_LIGHTNESS)

    expect(store.getState().brightness).toBe(defaultState.brightness)
    store.getState().setBrightness(MIN_BRIGHTNESS)
    expect(store.getState().brightness).toBe(MIN_BRIGHTNESS)

    expect(store.getState().saturation).toBe(defaultState.saturation)
    store.getState().setSaturation(MAX_SATURATION)
    expect(store.getState().saturation).toBe(MAX_SATURATION)

    expect(store.getState().hue).toBe(defaultState.hue)
    store.getState().setHue(MAX_HUE)
    expect(store.getState().hue).toBe(MAX_HUE)
  })
})
