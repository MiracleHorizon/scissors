import { Button } from '@radix-ui/themes'

import { useConvertMutation } from '../../model/useConvertMutation'
import { useConvertSettingsList } from '../../model/useConvertSettingsList'
import { useImageStore } from '@/shared/image'
import { removeFileExtension, removeMimeTypePrefix } from '@/shared/file'

export const ConvertButton = () => {
  const file = useImageStore(state => state.getFileForProcessing())
  const setDownloadableFile = useImageStore(state => state.setDownloadableFile)

  const settings = useConvertSettingsList()

  const { mutate: convert, isPending } = useConvertMutation({
    onSuccess: data => {
      console.log(file)
      console.log(data)

      setDownloadableFile(data)
    }
  })

  const handleConvert = async () => {
    if (!file) return

    // TODO: Улучшить код
    const fileName =
      settings.fileName.length > 0 ? settings.fileName : removeFileExtension(file.name)
    const fileType = removeMimeTypePrefix(file.type)

    void convert({
      file,
      fileName: `${fileName}.${fileType}`,
      settings
    })
  }

  return (
    <>
      <Button
        radius='large'
        disabled={isPending || !file}
        loading={isPending}
        onClick={handleConvert}
      >
        Apply
      </Button>

      {/* TODO: Вынести выше */}
      {/* <>
        {error && error instanceof Error && (
          <Suspense fallback={null}>
            <RequestErrorAlert open={!!error} error={error} reset={reset} retry={retry} />
          </Suspense>
        )}
      </> */}
    </>
  )
}
