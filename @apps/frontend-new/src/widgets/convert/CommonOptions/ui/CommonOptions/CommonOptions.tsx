import { Flex, Separator } from '@radix-ui/themes'

import {
  FileNameInput,
  FlipSwitch,
  FlopSwitch,
  GrayscaleSwitch,
  NegateSwitch
} from '@/features/settings/convert'
import styles from './CommonOptions.module.css'

export const CommonOptions = () => (
  <Flex direction='column' gapY='4'>
    <FileNameInput />

    <Flex
      gapX='4'
      direction={{
        xs: 'row',
        initial: 'column'
      }}
      height='100%'
      gapY='2'
      width='100%'
    >
      <Flex
        width={{
          xs: '50%',
          initial: '100%'
        }}
        direction='column'
        gap='2'
      >
        <FlipSwitch />
        <FlopSwitch />
      </Flex>

      <Separator orientation='vertical' className={styles.separator} />

      <Flex
        width={{
          xs: '50%',
          initial: '100%'
        }}
        direction='column'
        gap='2'
      >
        <GrayscaleSwitch />
        <NegateSwitch />
      </Flex>
    </Flex>
  </Flex>
)
