import { downloadFile } from './downloadFile'

/**
 * @param payload - any value to convert to JSON
 * @param fileName - name of the file without extension
 */
export const createAndDownloadJSON = ({
  payload,
  fileName
}: {
  payload: Record<string, unknown>
  fileName: string
}) => {
  const json = JSON.stringify(payload, null, 2)
  const blob = new Blob([json], {
    type: 'application/json'
  })

  downloadFile({
    blob,
    download: `${fileName}.json`
  })
}
