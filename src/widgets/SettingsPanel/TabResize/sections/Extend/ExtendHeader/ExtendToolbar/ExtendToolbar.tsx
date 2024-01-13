import { useCallback } from 'react'
import { Flex, Separator } from '@radix-ui/themes'

import { AllSidesIcon } from '@ui/icons/AllSidesIcon'
import { ChevronUpIcon } from '@ui/icons/ChevronUpIcon'
import { ChevronDownIcon } from '@ui/icons/ChevronDownIcon'
import { ButtonExtendReset } from './ButtonExtendReset'
import { ExtendToolbarButton } from './ExtendToolbarButton'
import { DirectionModel, useExtendStore } from '@stores/extend'
import styles from './ExtendToolbar.module.css'

export function ExtendToolbar() {
  const directionModel = useExtendStore(state => state.directionModel)
  const setDirectionModel = useExtendStore(state => state.setDirectionModel)

  const setDirectionModelNumber = useCallback(
    () => setDirectionModel(DirectionModel.NUMBER),
    [setDirectionModel]
  )
  const setDirectionModelAxis = useCallback(
    () => setDirectionModel(DirectionModel.AXIS),
    [setDirectionModel]
  )
  const setDirectionModelSeparated = useCallback(
    () => setDirectionModel(DirectionModel.SEPARATED),
    [setDirectionModel]
  )

  return (
    <Flex width='100%'>
      <Flex align='center' justify='end' gap='1' width='100%' className={styles.content}>
        {directionModel !== DirectionModel.NUMBER && (
          <ExtendToolbarButton
            onClick={
              directionModel === DirectionModel.AXIS
                ? setDirectionModelSeparated
                : setDirectionModelAxis
            }
          >
            <AllSidesIcon width='17px' height='17px' label='axes directions' />
          </ExtendToolbarButton>
        )}

        <ExtendToolbarButton
          onClick={
            directionModel !== DirectionModel.NUMBER
              ? setDirectionModelNumber
              : setDirectionModelAxis
          }
        >
          {directionModel !== DirectionModel.NUMBER ? (
            <ChevronUpIcon width='20px' height='20px' label='set all directions' />
          ) : (
            <ChevronDownIcon width='20px' height='20px' label='set axes directions' />
          )}
        </ExtendToolbarButton>

        <Separator mx='1' orientation='vertical' />

        <ButtonExtendReset className={styles.buttonReset} />
      </Flex>
    </Flex>
  )
}
