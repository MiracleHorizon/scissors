import { useCallback } from 'react'

import { ButtonRequest } from '../ButtonRequest'
import { useOutputStore } from '@stores/output'
import { useRequestStore } from '@stores/request'
import { useMetadataStore } from '@stores/metadata'
import { useMetadataMutation } from '@api/handle-image-metadata'

export const ButtonMetadata = () => {
  const file = useOutputStore(state => state.getFileForProcessing())
  const fileName = useOutputStore(state => state.getFullFileName())
  const isLoading = useRequestStore(state => state.isLoading)
  const setLoading = useRequestStore(state => state.setLoading)
  const metadataSettings = useMetadataStore(state => state.getMetadataSettings())

  const { mutate, error, reset } = useMetadataMutation()

  const handleSubmit = useCallback(() => {
    if (!file) return

    setLoading(true)
    void mutate({
      file,
      fileName,
      settings: metadataSettings
    })
  }, [file, fileName, metadataSettings, setLoading, mutate])

  const handleRetry = useCallback(() => {
    if (isLoading) return

    handleSubmit()
  }, [isLoading, handleSubmit])

  return (
    <ButtonRequest
      label='Submit'
      makeRequest={handleSubmit}
      retry={handleRetry}
      reset={reset}
      error={error}
      isLoading={isLoading}
    />
  )
}
