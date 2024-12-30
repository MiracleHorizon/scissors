// vitest-environment jsdom

import type { TrimOptions } from '@scissors/sharp'

import { createTrimStore, defaultState } from '@stores/trim'

describe('@stores/trim', () => {
  const store = createTrimStore()

  afterEach(() => {
    store.setState(defaultState)
  })

  it('should correctly set / reset trim options', () => {
    const testState: TrimOptions = {
      background: '#f7f62f',
      threshold: 0.5,
      lineArt: true
    }

    expect(store.getState().getTrimOptions()).toStrictEqual(defaultState)

    store.getState().set(testState)
    expect(store.getState().getTrimOptions()).toStrictEqual(testState)

    store.getState().set(null)
    expect(store.getState().getTrimOptions()).toStrictEqual(defaultState)

    store.getState().reset()
    expect(store.getState().getTrimOptions()).toStrictEqual(defaultState)
  })

  it('should correctly toggle line art', () => {
    expect(store.getState().lineArt).toBe(defaultState.lineArt)
    store.getState().toggleLineArt()
    expect(store.getState().lineArt).toBe(!defaultState.lineArt)
    store.getState().toggleLineArt()
    expect(store.getState().lineArt).toBe(defaultState.lineArt)
  })

  it('should correctly set background', () => {
    store.getState().setBackground('#99ff2f')
    expect(store.getState().background).toBe('#99ff2f')

    store.getState().setBackground(null)
    expect(store.getState().background).toBe(null)
  })

  it('should correctly set threshold', () => {
    store.getState().setThreshold(0.5)
    expect(store.getState().threshold).toBe(0.5)

    store.getState().setThreshold(null)
    expect(store.getState().threshold).toBe(null)
  })
})
