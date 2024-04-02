// vitest-environment jsdom

import type { RotateOptions } from '@scissors/sharp'

import { createRotateStore, defaultRotation, defaultState } from '@stores/rotate'

describe('@stores/rotate', () => {
  const store = createRotateStore()

  afterEach(() => {
    store.setState(defaultState)
  })

  it('should correctly add / remove rotate', () => {
    expect(store.getState().isAdded).toBe(false)
    store.getState().add()
    expect(store.getState().isAdded).toBe(true)

    store.setState({
      angle: 90,
      background: '#f0f73f'
    })
    store.getState().remove()
    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().angle).not.toBe(90)
    expect(store.getState().isAdded).not.toBe('#f0f73f')
  })

  it('should correctly set / reset state', () => {
    const testState: RotateOptions = {
      angle: 90,
      background: '#8f8913',
      withDominantBackground: true
    }

    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().getRotateOptions()).toBe(null)

    store.getState().set(testState)

    expect(store.getState().isAdded).toBe(true)
    expect(store.getState().getRotateOptions()).toStrictEqual(testState)

    store.getState().set(null)

    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().getRotateOptions()).toBe(null)

    store.getState().reset()

    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().getRotateOptions()).toBe(null)

    store.getState().set(testState)
    store.getState().reset()

    expect(store.getState().isAdded).toBe(true)
    expect(store.getState().getRotateOptions()).toStrictEqual(null)

    store.setState({ angle: 1 })
    expect(store.getState().getRotateOptions()).toStrictEqual({
      ...defaultRotation,
      angle: 1
    })
  })

  it('should correctly set angle', () => {
    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().angle).toBe(defaultRotation.angle)

    store.getState().setAngle(184)
    expect(store.getState().angle).not.toBe(184)

    store.setState({ isAdded: true })

    expect(store.getState().isAdded).toBe(true)
    store.getState().setAngle(37)
    expect(store.getState().angle).toBe(37)
  })

  it('should correctly set background', () => {
    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().background).toBe(defaultRotation.background)

    store.getState().setBackground('#f8f6f2')
    expect(store.getState().background).not.toBe('#f8f6f2')

    store.setState({ isAdded: true })

    expect(store.getState().isAdded).toBe(true)
    store.getState().setBackground('#9f72ff')
    expect(store.getState().background).toBe('#9f72ff')
  })

  it('should correctly toggle dominant background value', () => {
    expect(store.getState().isAdded).toBe(false)
    expect(store.getState().withDominantBackground).toBe(defaultRotation.withDominantBackground)

    store.getState().toggleDominantBackground()
    expect(store.getState().withDominantBackground).toBe(defaultRotation.withDominantBackground)

    store.setState({ isAdded: true })

    store.getState().toggleDominantBackground()
    expect(store.getState().withDominantBackground).toBe(!defaultRotation.withDominantBackground)
  })
})
