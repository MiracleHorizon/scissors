export const createImageFromFile = async (file: File): Promise<HTMLImageElement> => {
  const fileReader = new FileReader()
  const fileReaderPromise = new Promise<HTMLImageElement>((resolve, reject) => {
    fileReader.onload = (ev: ProgressEvent<FileReader>) => {
      const img = new Image()

      img.onload = () => {
        resolve(img)
      }

      img.onerror = () => {
        reject(new Error('Could not load image'))
      }

      if (!ev.target) return
      img.src = ev.target.result as string
    }

    fileReader.onerror = () => {
      reject(new Error('Could not read file'))
    }
  })

  fileReader.readAsDataURL(file)

  return fileReaderPromise
}
