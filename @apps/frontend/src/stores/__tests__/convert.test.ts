// @vitest-environment jsdom

import { createConvertStore, defaultState } from '@stores/convert'

describe('@stores/convert', () => {
  const store = createConvertStore()

  afterEach(() => {
    store.setState(defaultState)
  })

  it('should correctly set options values', () => {
    expect(store.getState().flip).toBe(defaultState.flip)
    store.getState().setFlip(!defaultState.flip)
    expect(store.getState().flip).toBe(!defaultState.flip)

    expect(store.getState().flop).toBe(defaultState.flop)
    store.getState().setFlop(!defaultState.flop)
    expect(store.getState().flop).toBe(!defaultState.flop)
    store.getState().setFlop(defaultState.flop)
    expect(store.getState().flop).toBe(defaultState.flop)

    expect(store.getState().grayscale).toBe(defaultState.grayscale)
    store.getState().setGrayscale(!defaultState.grayscale)
    expect(store.getState().grayscale).toBe(!defaultState.grayscale)
  })

  it('should correctly toggle options values', () => {
    expect(store.getState().flip).toBe(defaultState.flip)
    store.getState().toggleFlip()
    expect(store.getState().flip).toBe(!defaultState.flip)

    expect(store.getState().flop).toBe(defaultState.flop)
    store.getState().toggleFlop()
    expect(store.getState().flop).toBe(!defaultState.flop)

    expect(store.getState().grayscale).toBe(defaultState.grayscale)
    store.getState().toggleGrayscale()
    expect(store.getState().grayscale).toBe(!defaultState.grayscale)
  })

  it('should correctly reset state', () => {
    store.getState().setFlip(true)
    store.getState().setFlop(false)
    store.getState().setGrayscale(true)

    expect(store.getState().getConvertSettings()).toStrictEqual({
      flip: true,
      flop: false,
      grayscale: true
    })

    store.getState().reset()
    expect(store.getState().getConvertSettings()).toStrictEqual(defaultState)
  })
})
