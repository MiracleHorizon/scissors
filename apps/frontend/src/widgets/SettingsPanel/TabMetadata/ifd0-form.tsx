import { Flex } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form'
import type { ChangeEvent } from 'react'

import { DatePicker } from '@ui/DatePicker'
import { ButtonReset } from '@ui/ButtonReset'
import { MetadataForm } from './MetadataForm'
import { MetadataFormField } from './MetadataFormField'
import { useMetadataStore } from '@stores/metadata'

export function Ifd0OptionsForm() {
  const { keepMetadata, model, artist, copyright, dateTime, imageDescription, make, software } =
    useMetadataStore(state => ({
      ...state.ifd0,
      keepMetadata: state.keepMetadata
    }))

  const setMake = useMetadataStore(state => state.setMake)
  const setModel = useMetadataStore(state => state.setModel)
  const setCopyright = useMetadataStore(state => state.setCopyright)
  const setSoftware = useMetadataStore(state => state.setSoftware)
  const setArtist = useMetadataStore(state => state.setArtist)
  const setDateTime = useMetadataStore(state => state.setDateTime)
  const setImageDescription = useMetadataStore(state => state.setImageDescription)
  const reset = useMetadataStore(state => state.resetIfd0)

  const handleReset = () => reset()

  const handleSetMake = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value
    setMake(value === '' ? null : value)
  }
  const handleSetModel = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value
    setModel(value === '' ? null : value)
  }
  const handleSetCopyright = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value
    setCopyright(value === '' ? null : value)
  }
  const handleSetSoftware = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value
    setSoftware(value === '' ? null : value)
  }
  const handleSetArtist = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value
    setArtist(value === '' ? null : value)
  }
  const handleSetImageDescription = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value
    setImageDescription(value === '' ? null : value)
  }
  const handleDateTimeChange = (date: Date) => setDateTime(date)

  return (
    <MetadataForm
      title='IFD0'
      headerContent={<ButtonReset tooltipContent='Reset IFD0 form fields' onClick={handleReset} />}
      content={
        <>
          <MetadataFormField
            name='make'
            label='Make'
            disabled={!keepMetadata}
            value={make ?? ''}
            placeholder='Canon'
            onChange={handleSetMake}
          />
          <MetadataFormField
            name='model'
            label='Model'
            disabled={!keepMetadata}
            value={model ?? ''}
            placeholder='Canon EOS 6D'
            onChange={handleSetModel}
          />
          <MetadataFormField
            name='copyright'
            label='Copyright'
            disabled={!keepMetadata}
            value={copyright ?? ''}
            placeholder='@miraclehorizon'
            onChange={handleSetCopyright}
          />
          <MetadataFormField
            name='artist'
            label='Artist'
            disabled={!keepMetadata}
            value={artist ?? ''}
            placeholder='John Doe'
            onChange={handleSetArtist}
          />
          <MetadataFormField
            name='software'
            label='Software'
            disabled={!keepMetadata}
            value={software ?? ''}
            placeholder='Adobe Photoshop'
            onChange={handleSetSoftware}
          />
          <MetadataFormField
            name='imageDescription'
            label='Description'
            disabled={!keepMetadata}
            value={imageDescription ?? ''}
            placeholder='Photo taken with...'
            onChange={handleSetImageDescription}
          />
          <Flex asChild direction='column'>
            <Form.Field name='dateTime'>
              <Form.Label>Date Time</Form.Label>
              <DatePicker
                disabled={!keepMetadata}
                value={dateTime ?? new Date()}
                onValueChange={handleDateTimeChange}
              />
            </Form.Field>
          </Flex>
        </>
      }
    />
  )
}
