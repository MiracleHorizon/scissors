import { downloadFile } from './export'

/**
 * @param file - JSON file to read
 * @returns parsed JSON object or rejects with error
 */
export const readJSONFile = (file: File): Promise<string> => {
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

/**
 * @param payload - any value to convert to JSON
 * @returns JSON blob
 */
export const createJSONBlob = <T>(payload: T): Blob => {
  const json = JSON.stringify(payload, null, 2)

  return new Blob([json], {
    type: 'application/json'
  })
}

/**
 * @param payload - any value to convert to JSON
 * @param fileName - name of the file without extension
 */
export const createAndDownloadJSONFile = ({
  payload,
  fileName
}: {
  payload: Record<string, any>
  fileName: string
}) => {
  const blob = createJSONBlob(payload)

  downloadFile({
    blob,
    download: `${fileName}.json`
  })
}
