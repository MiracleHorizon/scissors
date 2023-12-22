'use client'

import { useCallback } from 'react'
import { Select } from '@radix-ui/themes'

import { useOutputStore } from '@stores/output'
import { ConvertFormat } from '@libs/Sharp'

export function SelectOutputFormat() {
  const outputFormat = useOutputStore(state => state.outputFormat)
  const setOutputFormat = useOutputStore(state => state.setOutputFormat)

  const handleChangeOutputFormat = useCallback(
    (value: ConvertFormat) => setOutputFormat(value),
    [setOutputFormat]
  )

  if (!outputFormat) {
    return null
  }

  return (
    <Select.Root value={outputFormat} onValueChange={handleChangeOutputFormat}>
      <Select.Trigger placeholder='Output format' />

      <Select.Content sideOffset={5} align='center' position='popper'>
        <Select.Group>
          <Select.Label>Output format</Select.Label>
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
