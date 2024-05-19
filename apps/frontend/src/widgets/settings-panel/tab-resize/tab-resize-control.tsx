import { CheckboxCards } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'

import { RESIZE_OPERATION, type ResizeOperation } from '@scissors/sharp'

import { useTabResizeStore } from './store'
import type { CheckboxCardsSize } from '@lib/theme'

const operationList = Object.values(RESIZE_OPERATION)
const operationListLength = operationList.length

const size: CheckboxCardsSize = {
  initial: '2',
  xs: '1'
} as const
const columns = {
  initial: Math.floor(operationListLength / 2).toString(),
  xs: operationListLength.toString()
} as const

export function TabResizeControl() {
  const operations = useTabResizeStore(state => state.operations.map(operation => operation.id))

  const addOperation = useTabResizeStore(state => state.addOperation)
  const removeOperation = useTabResizeStore(state => state.removeOperation)

  const onValueChange = (value: string[]) => {
    for (const operation of value) {
      addOperation(operation)
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
      className='w-full'
      value={operations as ResizeOperation[]}
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
