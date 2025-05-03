import { Button } from '@radix-ui/themes'

import { useConvertMutation } from '../../api/convert-mutation'
import { useCommonStore } from '../../model/common/common.store'
import { useConvertSettings } from '../../model/useConvertSettings'
import { useImageStore } from '@/shared/image'
import { removeFileExtension, removeMimeTypePrefix } from '@/shared/file'

// TODO: Check FSD
export const ConvertButton = () => {
  const file = useImageStore(state => state.getFileForProcessing())
  const setDownloadableFile = useImageStore(state => state.setDownloadableFile)

  const fileName = useCommonStore(state => state.fileName)
  const settings = useConvertSettings()

  const { mutate: convert, loading } = useConvertMutation({
    onSuccess: setDownloadableFile
  })

  const handleConvert = async () => {
    if (!file) return

    void convert({
      file,
      // TODO: Улучшить код
      fileName: `${fileName.length > 0 ? fileName : removeFileExtension(file.name)}.${removeMimeTypePrefix(file.type)}`,
      settings
    })
  }

  return (
    <>
      <Button radius='large' disabled={loading || !file} loading={loading} onClick={handleConvert}>
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
