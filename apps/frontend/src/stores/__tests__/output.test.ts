// vitest-environment jsdom

import { IMAGE_FILE_FORMAT } from '@scissors/sharp'

import { createOutputStore, defaultState, type DownloadPayload } from '@stores/output'

describe('@stores/output', () => {
  it('should correctly set / remove file', () => {
    const store = createOutputStore()
    const file = new File([], 'foo.png', {
      type: 'image/png'
    })

    expect(store.getState().file).toBe(null)
    expect(store.getState().isFileUploaded()).toBeFalsy()
    store.getState().setFile(file)
    expect(store.getState().file).toStrictEqual(file)
    expect(store.getState().isFileUploaded()).toBeTruthy()

    store.getState().removeFile()
    expect(store.getState().file).toBe(null)

    store.setState({ outputFormat: IMAGE_FILE_FORMAT.PNG })
    expect(store.getState().outputFormat).toBe(IMAGE_FILE_FORMAT.PNG)
    store.getState().setFile(null)
    expect(store.getState().file).toBe(null)
    expect(store.getState().outputFormat).toBe(null)
  })

  it('should correctly set / reset output file name', () => {
    const store = createOutputStore()

    expect(store.getState().outputFileName).toBe(defaultState.outputFileName)

    store.getState().setOutputFileName('foo-bar-baz')
    expect(store.getState().outputFileName).toBe('foo-bar-baz')

    store.getState().resetOutputFileName()
    expect(store.getState().outputFileName).toBe(defaultState.outputFileName)
  })

  it('should correctly set download payload', () => {
    const store = createOutputStore()
    const testValue: DownloadPayload = {
      blob: new Blob(),
      fileName: 'foo-bar-baz',
      link: 'blob:foo-bar-baz'
    }

    expect(store.getState().downloadPayload).toBe(defaultState.downloadPayload)

    store.getState().setDownloadPayload(testValue)
    expect(store.getState().downloadPayload).toStrictEqual(testValue)
  })

  suite('should correctly set output file format', () => {
    const store = createOutputStore()

    expect(store.getState().outputFormat).toBe(defaultState.outputFormat)

    it.each(Object.values(IMAGE_FILE_FORMAT))(
      'should correctly set output format to %s',
      format => {
        store.getState().setOutputFormat(format)
        expect(store.getState().outputFormat).toBe(format)
      }
    )
  })

  it('should return correct full file name', () => {
    const store = createOutputStore()
    const file = new File([], 'foo.webp', {
      type: 'image/webp'
    })

    store.getState().setOutputFileName('foo-bar-baz')
    store.getState().setOutputFormat(IMAGE_FILE_FORMAT.PNG)

    expect(store.getState().getFullFileName().length).toBe(0)
    store.getState().setFile(file)
    expect(store.getState().getFullFileName()).toBe('foo-bar-baz' + '.' + 'webp')

    store.getState().setOutputFormat(IMAGE_FILE_FORMAT.PNG)
    expect(store.getState().getFullFileName()).toBe('foo-bar-baz' + '.' + IMAGE_FILE_FORMAT.PNG)

    store.getState().setOutputFileName('')
    expect(store.getState().getFullFileName()).toBe('foo' + '.' + IMAGE_FILE_FORMAT.PNG)
  })

  it('should return correct output file format', () => {
    const store = createOutputStore()
    const file = new File([], `foo.${IMAGE_FILE_FORMAT.WEBP}`, {
      type: `image/${IMAGE_FILE_FORMAT.WEBP}`
    })

    expect(store.getState().outputFormat).toBe(defaultState.outputFormat)
    store.setState({ outputFormat: IMAGE_FILE_FORMAT.PNG })
    expect(store.getState().outputFormat).toBe(IMAGE_FILE_FORMAT.PNG)

    expect(store.getState().file).toBe(null)
    expect(store.getState().getOutputFormat()).toBe(null)

    store.setState({ file })
    expect(store.getState().getOutputFormat()).toBe(IMAGE_FILE_FORMAT.PNG)

    store.setState({ outputFormat: null })
    expect(store.getState().getOutputFormat()).toBe(null)

    store.setState({ outputFormat: IMAGE_FILE_FORMAT.WEBP })
    expect(store.getState().getOutputFormat()).toBe(null)
  })
})