import { CheckboxCards } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'

import { RESIZE_OPERATION, type ResizeOperation } from '@scissors/sharp'

import { useResizeOperations } from '../../model'
import type { CheckboxCardsSize } from '@/shared/radix'

const operationList = Object.values(RESIZE_OPERATION)

const size: CheckboxCardsSize = {
  initial: '2',
  xs: '1'
} as const
const columns = {
  initial: Math.floor(operationList.length / 2).toString(),
  xs: operationList.length.toString()
} as const

export const ResizeOperationsSelector = () => {
  const { operations, addOperation, removeOperation } = useResizeOperations()

  const onValueChange = (value: string[]) => {
    for (const operation of value) {
      addOperation(operation as ResizeOperation)
    }

    const notSettledOperations = operationList.filter(o => !value.includes(o))
    for (const operation of notSettledOperations) {
      removeOperation(operation)
    }
  }

  return (
    <CheckboxCards.Root
      gap='1'
      size={size}
      columns={columns}
      value={operations}
      defaultValue={[RESIZE_OPERATION.RESIZE]}
      onValueChange={onValueChange}
    >
      {operationList.map(value => (
        <CheckboxCards.Item key={value} value={value}>
          {capitalize(value)}
        </CheckboxCards.Item>
      ))}
    </CheckboxCards.Root>
  )
}
