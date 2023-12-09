import { Flex, type PaddingProps } from '@radix-ui/themes'

import { ButtonReset } from '@components/ButtonReset'
import { ButtonRemoveSettings } from '@components/ButtonRemoveSettings'
import { useResetSettings } from '@stores/hooks/useResetSettings'
import styles from './Toolbar.module.css'

export const padding: PaddingProps = {
  px: {
    initial: '4',
    md: '3'
  },
  py: {
    initial: '2',
    md: '3'
  }
}

export function Toolbar() {
  const { handleReset } = useResetSettings()

  return (
    <Flex align='center' justify='end' gap='1' {...padding} className={styles.root}>
      <ButtonReset title='Reset' tooltipTitle='Reset all settings' onClick={handleReset} />
      <ButtonRemoveSettings />
    </Flex>
  )
}
