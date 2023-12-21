'use client'

import { useCallback } from 'react'
import { Select } from '@radix-ui/themes'

import { useFormatStore } from '@stores/format'
import { ConvertFormat, DEFAULT_CONVERT_FORMAT } from '@libs/Sharp'

export function SelectFormat() {
  const format = useFormatStore(state => state.format)

  const setFormat = useFormatStore(state => state.setFormat)

  const handleChangeFormat = useCallback((value: ConvertFormat) => setFormat(value), [setFormat])

  return (
    <Select.Root
      value={format ?? DEFAULT_CONVERT_FORMAT}
      defaultValue={DEFAULT_CONVERT_FORMAT}
      onValueChange={handleChangeFormat}
    >
      <Select.Trigger placeholder='Convert format' />

      <Select.Content sideOffset={5} align='center' position='popper'>
        <Select.Group>
          <Select.Label>Convert format</Select.Label>
          {Object.values(ConvertFormat).map(format => (
            <Select.Item key={format} value={format}>
              {format}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}
