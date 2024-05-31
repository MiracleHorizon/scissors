import { DropdownMenu, Flex, IconButton, Separator, Spinner } from '@radix-ui/themes'

import { CheckboxKeepChanges } from './CheckboxKeepChanges'
import { SelectOutputFormat } from './SelectOutputFormat'
import styles from './DropdownRequestOptions.module.css'

interface Props {
  isLoading: boolean
  disabled: boolean
}

export const DropdownRequestOptions = ({ disabled, isLoading }: Props) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger disabled={disabled} data-cy='dd-request-options-trigger'>
      <IconButton size='3' className={styles.trigger}>
        <Spinner size='3' loading={isLoading}>
          <DropdownMenu.TriggerIcon width='13px' height='13px' />
        </Spinner>
      </IconButton>
    </DropdownMenu.Trigger>

    <DropdownMenu.Content
      side='top'
      align='end'
      sideOffset={6}
      data-cy='dd-request-options-content'
      className={styles.content}
    >
      <Flex direction='column' p='1'>
        <CheckboxKeepChanges />
        <Separator size='4' mt='4' mb='2' />
        <SelectOutputFormat />
      </Flex>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
)
