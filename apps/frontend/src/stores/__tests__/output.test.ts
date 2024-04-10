// vitest-environment jsdom

import { IMAGE_FILE_FORMAT } from '@scissors/sharp'

import { createOutputStore, defaultState, type DownloadPayload } from '@stores/output'
import pick from 'lodash.pick'

describe('@stores/output', () => {
  const store = createOutputStore({
    withPersist: false
  })

  afterEach(() => {
    store.setState(defaultState)
  })

  it('should correctly set / remove file', () => {
    const file = new File([], 'foo.png', {
      type: 'image/png'
    })

    expect(store.getState().file).toBe(null)
    expect(store.getState().originalFile).toBe(null)
    expect(store.getState().isFileUploaded()).toBeFalsy()
    store.getState().setFile(file)
    expect(store.getState().file).toStrictEqual(file)
    expect(store.getState().originalFile).toStrictEqual(file)
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
    expect(store.getState().outputFileName).toBe(defaultState.outputFileName)

    store.getState().setOutputFileName('foo-bar-baz')
    expect(store.getState().outputFileName).toBe('foo-bar-baz')

    store.getState().resetOutputFileName()
    expect(store.getState().outputFileName).toBe(defaultState.outputFileName)
  })

  it('should correctly set download payload', () => {
    const file1 = new File([], 'foo.png', { type: 'image/png' })
    const file2 = new File([], 'bar.webp', { type: 'image/webp' })
    const testValue: DownloadPayload = {
      file: file2,
      fileName: 'foo.png',
      link: 'blob:foo.png'
    }

    expect(store.getState().downloadPayload).toBe(defaultState.downloadPayload)
    expect(store.getState().originalFile).toBe(null)

    store.setState({
      file: file1,
      originalFile: file1,
      keepChanges: true
    })

    expect(store.getState().getFileForProcessing()).toStrictEqual(file1)

    store.getState().setDownloadPayload(testValue)
    expect(store.getState().downloadPayload).toStrictEqual(pick(testValue, ['fileName', 'link']))
    expect(store.getState().file).toStrictEqual(file2)
    expect(store.getState().originalFile).toStrictEqual(file1)
    expect(store.getState().getFileForProcessing()).toStrictEqual(file2)
  })

  suite('should correctly set output file format', () => {
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
