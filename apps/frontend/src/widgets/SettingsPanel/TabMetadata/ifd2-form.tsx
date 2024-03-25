import { useForm } from 'react-hook-form'
import { useCallback, useMemo } from 'react'
import { DEFAULT_IFD2_OPTIONS, type IFD2Options } from '@scissors/sharp'

import { ButtonReset } from '@ui/ButtonReset'
import { MetadataForm } from './MetadataForm'
import { MetadataFormField } from './MetadataFormField'
import { useMetadataStore } from '@stores/metadata'

const fieldList: {
  name: keyof IFD2Options
  label: string
  placeholder: string
}[] = [
  {
    name: 'lensMake',
    label: 'Lens Make',
    placeholder: 'Apple'
  },
  {
    name: 'lensModel',
    label: 'Lens Model',
    placeholder: 'Triple 4.25mm ƒ/1.8'
  },
  {
    name: 'lensSerialNumber',
    label: 'Lens Serial Number',
    placeholder: '58473291'
  },
  {
    name: 'bodySerialNumber',
    label: 'Body Serial Number',
    placeholder: '48295189'
  },
  {
    name: 'cameraOwnerName',
    label: 'Camera Owner Name',
    placeholder: 'Apple'
  },
  {
    name: 'focalLength',
    label: 'Focal Length',
    placeholder: '4.25'
  },
  {
    name: 'apertureValue',
    label: 'Aperture',
    placeholder: '4.57'
  }
] as const

export function Ifd2OptionsForm() {
  const {
    register,
    getValues,
    reset: resetForm
  } = useForm({
    defaultValues: DEFAULT_IFD2_OPTIONS
  })

  const set = useMetadataStore(state => state.setIfd2)
  const resetState = useMetadataStore(state => state.resetIfd2)

  const handleReset = useCallback(() => {
    resetState()
    resetForm()
  }, [resetForm, resetState])

  const onChange = useCallback(() => {
    set(getValues())
  }, [getValues, set])

  const fields = useMemo(
    () =>
      fieldList.map(field => ({
        register: register(field.name, {
          required: false,
          onChange
        }),
        ...field
      })),
    [onChange, register]
  )

  return (
    <MetadataForm
      title='IFD2'
      headerContent={<ButtonReset tooltipContent='Reset IFD2 form fields' onClick={handleReset} />}
      content={
        <>
          {fields.map(field => (
            <MetadataFormField key={field.name} {...field} />
          ))}
        </>
      }
    />
  )
}
