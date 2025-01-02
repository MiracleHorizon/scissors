// vitest-environment jsdom

import pick from 'lodash.pick'

import {
  DEFAULT_RESIZE_POSITION,
  RESIZE_FIT,
  RESIZE_GRAVITY,
  RESIZE_KERNEL,
  RESIZE_POSITION,
  type ResizeOptions
} from '@scissors/sharp'

import { createResizeStore, defaultState, type Store } from '@stores/resize'

const pickState = (store: Store) =>
  pick(store, [
    'width',
    'height',
    'fit',
    'position',
    'kernel',
    'withoutEnlargement',
    'withoutReduction',
    'fastShrinkOnLoad',
    'withDominantBackground',
    'background'
  ])

describe('@stores/resize', () => {
  const store = createResizeStore()

  afterEach(() => {
    store.setState(defaultState)
  })

  it('should correctly set / reset state', () => {
    const testState: ResizeOptions = {
      width: 1920,
      height: 1080,
      fit: RESIZE_FIT.FILL,
      position: RESIZE_GRAVITY.NORTH_WEST,
      kernel: RESIZE_KERNEL.NEAREST,
      withoutEnlargement: true,
      withoutReduction: true,
      fastShrinkOnLoad: true,
      withDominantBackground: true,
      background: '#000000'
    }

    expect(pickState(store.getState())).toStrictEqual(defaultState)

    store.getState().set(testState)
    expect(store.getState().getResizeOptions()).toStrictEqual(testState)

    store.getState().reset()
    expect(store.getState().getResizeOptions()).toBe(null)

    store.getState().set(testState)
    store.getState().set(null)
    expect(pickState(store.getState())).toStrictEqual(defaultState)
  })

  it('should correctly set sizes', () => {
    expect(store.getState().width).toBe(defaultState.width)
    store.getState().setWidth(1920)
    expect(store.getState().width).toBe(1920)

    expect(store.getState().height).toBe(defaultState.height)
    store.getState().setHeight(1080)
    expect(store.getState().height).toBe(1080)

    expect(pick(store.getState().getResizeOptions(), ['width', 'height'])).toStrictEqual({
      width: 1920,
      height: 1080
    })

    store.getState().setWidth(null)
    expect(store.getState().width).toBe(null)

    store.getState().setHeight(null)
    expect(store.getState().height).toBe(null)

    expect(store.getState().getResizeOptions()).toBe(null)
  })

  it('should correctly set fit value', () => {
    expect(store.getState().fit).toBe(defaultState.fit)
    expect(store.getState().position).toBe(defaultState.position)

    store.getState().setFit(RESIZE_FIT.FILL)
    expect(store.getState().fit).toBe(RESIZE_FIT.FILL)

    store.setState({ position: RESIZE_GRAVITY.NORTH_WEST })
    store.getState().setFit(RESIZE_FIT.CONTAIN)
    expect(store.getState().position).toBe(DEFAULT_RESIZE_POSITION)
  })

  it('should correctly set background', () => {
    expect(store.getState().background).toBe(defaultState.background)
    store.getState().setBackground('#f8f6f2')
    expect(store.getState().background).toBe('#f8f6f2')
  })

  it('should correctly set position', () => {
    expect(store.getState().position).toBe(defaultState.position)
    store.getState().setPosition(RESIZE_POSITION.RIGHT_BOTTOM)
    expect(store.getState().position).toBe(RESIZE_POSITION.RIGHT_BOTTOM)
  })

  it('should correctly set kernel', () => {
    expect(store.getState().kernel).toBe(defaultState.kernel)
    store.getState().setKernel(RESIZE_KERNEL.MITCHELL)
    expect(store.getState().kernel).toBe(RESIZE_KERNEL.MITCHELL)
  })

  it('should correctly toggle enlargement value', () => {
    expect(store.getState().withoutEnlargement).toBe(defaultState.withoutEnlargement)
    store.getState().toggleEnlargement()
    expect(store.getState().withoutEnlargement).toBe(!defaultState.withoutEnlargement)
  })

  it('should correctly toggle reduction value', () => {
    expect(store.getState().withoutReduction).toBe(defaultState.withoutReduction)
    store.getState().toggleReduction()
    expect(store.getState().withoutReduction).toBe(!defaultState.withoutReduction)
  })

  it('should correctly toggle fast shrink value', () => {
    expect(store.getState().fastShrinkOnLoad).toBe(defaultState.fastShrinkOnLoad)
    store.getState().toggleFastShrink()
    expect(store.getState().fastShrinkOnLoad).toBe(!defaultState.fastShrinkOnLoad)
  })

  it('should correctly toggle dominant background value', () => {
    expect(store.getState().withDominantBackground).toBe(defaultState.withDominantBackground)
    store.getState().toggleDominantBackground()
    expect(store.getState().withDominantBackground).toBe(!defaultState.withDominantBackground)
  })
})
