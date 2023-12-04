import { Flex, type PaddingProps } from '@radix-ui/themes'

import { ButtonReset } from '@components/ButtonReset'
import { useResetSettings } from '@stores/hooks/useResetSettings'
import styles from './Toolbar.module.css'

const padding: PaddingProps = {
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
    <Flex align='center' justify='end' {...padding} className={styles.root}>
      <ButtonReset title='Reset' tooltipTitle='Reset all settings' onClick={handleReset} />
    </Flex>
  )
}
