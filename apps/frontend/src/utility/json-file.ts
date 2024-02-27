// TODO: Docs
export function readJSONFile(file: File): Promise<string> {
  const fileReader = new FileReader()
  const fileReaderPromise = new Promise<string>((resolve, reject) => {
    fileReader.onload = () => {
      const result = fileReader.result

      if (!result) {
        reject(new Error('Failed to read JSON file'))
      }

      resolve(result as string)
    }

    fileReader.onerror = reject
  })

  fileReader.readAsText(file)

  return fileReaderPromise
}

export function createJSONBlob<T>(payload: T): Blob {
  const json = JSON.stringify(payload, null, 2)

  return new Blob([json], {
    type: 'application/json'
  })
}
