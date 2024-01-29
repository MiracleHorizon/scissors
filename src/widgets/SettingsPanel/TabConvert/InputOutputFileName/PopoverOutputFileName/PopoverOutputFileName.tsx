import { Fragment } from 'react'
import { Code, Popover, Separator, Text } from '@radix-ui/themes'

import { ButtonInfo } from '@ui/ButtonInfo'
import {
  MAX_FILE_NAME_LENGTH,
  MIN_FILE_NAME_LENGTH,
  notAllowedChars
} from '@helpers/file/constants'
import styles from './PopoverOutputFileName.module.css'

export const PopoverOutputFileName = () => (
  <Popover.Root>
    <Popover.Trigger>
      <ButtonInfo />
    </Popover.Trigger>

    <Popover.Content size='1' side='bottom' align='center' className={styles.content}>
      <Text as='p' size='2' className={styles.contentText}>
        The{' '}
        <Text as='span' className={styles.spanOptional}>
          optional
        </Text>{' '}
        name of the output file{' '}
        <Text as='span' weight='medium'>
          (without extension)
        </Text>
        .
      </Text>

      <Separator orientation='horizontal' size='4' mt='2' mb='1' />

      <li>
        <Text size='2'>
          Not allowed characters:{' '}
          {notAllowedChars.map((chars, index) => (
            <Fragment key={chars}>
              <Code variant='ghost'>{chars}</Code>
              {index < notAllowedChars.length - 1 && ' '}
            </Fragment>
          ))}
        </Text>
      </li>

      <li>
        <Text size='2'>
          Length:{' '}
          <Code variant='ghost'>
            {MIN_FILE_NAME_LENGTH} - {MAX_FILE_NAME_LENGTH}
          </Code>{' '}
          characters
        </Text>
      </li>
    </Popover.Content>
  </Popover.Root>
)
