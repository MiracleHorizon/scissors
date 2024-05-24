import { useCallback } from 'react'
import { Flex, Separator } from '@radix-ui/themes'

import { AllSidesIcon } from '@scissors/react-icons/AllSidesIcon'
import { ChevronUpIcon } from '@scissors/react-icons/ChevronUpIcon'
import { ChevronDownIcon } from '@scissors/react-icons/ChevronDownIcon'

import { ButtonExtendReset } from './ButtonExtendReset'
import { ExtendToolbarButton } from './ExtendToolbarButton'
import { DIRECTION_MODEL, useExtendStore } from '@stores/extend'

export const ExtendToolbar=()=> {
  const directionModel = useExtendStore(state => state.directionModel)
  const setDirectionModel = useExtendStore(state => state.setDirectionModel)

  const setDirectionModelNumber = useCallback(
    () => setDirectionModel(DIRECTION_MODEL.NUMBER),
    [setDirectionModel]
  )
  const setDirectionModelAxis = useCallback(
    () => setDirectionModel(DIRECTION_MODEL.AXIS),
    [setDirectionModel]
  )
  const setDirectionModelSeparated = useCallback(
    () => setDirectionModel(DIRECTION_MODEL.SEPARATED),
    [setDirectionModel]
  )

  return (
    <Flex width='100%'>
      <Flex align='center' justify='end' gap='1' width='100%'>
        {directionModel !== DIRECTION_MODEL.NUMBER && (
          <ExtendToolbarButton
            onClick={
              directionModel === DIRECTION_MODEL.AXIS
                ? setDirectionModelSeparated
                : setDirectionModelAxis
            }
          >
            <AllSidesIcon width='17px' height='17px' label='axes directions' />
          </ExtendToolbarButton>
        )}

        <ExtendToolbarButton
          onClick={
            directionModel !== DIRECTION_MODEL.NUMBER
              ? setDirectionModelNumber
              : setDirectionModelAxis
          }
        >
          {directionModel !== DIRECTION_MODEL.NUMBER ? (
            <ChevronUpIcon width='20px' height='20px' label='set all directions' />
          ) : (
            <ChevronDownIcon width='20px' height='20px' label='set axes directions' />
          )}
        </ExtendToolbarButton>

        <Separator mx='1' orientation='vertical' />

        <ButtonExtendReset />
      </Flex>
    </Flex>
  )
}
