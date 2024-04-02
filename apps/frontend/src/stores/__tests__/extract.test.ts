// @vitest-environment jsdom

import pick from 'lodash.pick'

import type { ExtractRegion } from '@scissors/sharp'

import { createExtractStore, defaultRegion, defaultState } from '@stores/extract'

describe('@stores/extract', () => {
  it('should correctly set extract region', () => {
    const store = createExtractStore()
    const testRegion: ExtractRegion = {
      left: 1,
      top: 1,
      width: 1,
      height: 1
    }

    expect(store.getState().getExtractRegion()).toStrictEqual(defaultRegion)
    store.getState().setRegion(testRegion)
    expect(store.getState().getExtractRegion()).toStrictEqual(testRegion)
  })

  it('should correctly set preview file', () => {
    const store = createExtractStore()
    const testFile = new File([], 'foo.png', {
      type: 'image/png'
    })

    expect(store.getState().previewFile).toBe(null)
    store.getState().setPreviewFile(testFile)
    expect(store.getState().previewFile).toStrictEqual(testFile)
  })

  it('should correctly set preview aspect ratio', () => {
    const store = createExtractStore()

    expect(store.getState().previewAspectRatio).toBe(defaultState.previewAspectRatio)
    store.getState().setPreviewAspectRatio(4 / 3)
    expect(store.getState().previewAspectRatio).toBe(4 / 3)
  })

  it('should correctly set cropper aspect ratio', () => {
    const store = createExtractStore()

    expect(store.getState().cropperAspectRatio).toBe(defaultState.cropperAspectRatio)
    store.getState().setCropperAspectRatio(16 / 9)
    expect(store.getState().cropperAspectRatio).toBe(16 / 9)
  })

  it('should correctly reset state', () => {
    const store = createExtractStore()

    store.setState({
      left: 1,
      top: 1,
      width: 1,
      height: 1,
      previewFile: new File([], 'foo.png', {
        type: 'image/png'
      }),
      previewAspectRatio: 4 / 3,
      cropperAspectRatio: 16 / 9
    })

    store.getState().reset()

    expect(
      pick(store.getState(), [
        'left',
        'top',
        'width',
        'height',
        'previewFile',
        'previewAspectRatio',
        'cropperAspectRatio'
      ])
    ).toStrictEqual(defaultState)
  })
})
