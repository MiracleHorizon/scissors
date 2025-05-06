import { Fragment } from 'react'
import { Code, IconButton, Popover, Separator, Text } from '@radix-ui/themes'

import { InfoCircledIcon } from '@scissors/react-icons/InfoCircledIcon'

import { MAX_FILE_NAME_LENGTH, MIN_FILE_NAME_LENGTH, NOT_ALLOWED_CHARS } from '@/shared/file'
import styles from './FileNameHint.module.css'

export const FileNameHint = () => (
  <Popover.Root>
    <Popover.Trigger>
      <IconButton size='1' color='gray' variant='ghost' radius='full'>
        <InfoCircledIcon width='18px' height='18px' color='gray' />
      </IconButton>
    </Popover.Trigger>

    <Popover.Content
      size='1'
      side='bottom'
      align='center'
      maxWidth={{
        initial: '80dvw',
        xs: '370px'
      }}
      className={styles.content}
    >
      <Text as='p' size='2' className={styles.contentText}>
        The <Text className={styles.spanOptional}>optional</Text> name of the output file{' '}
        <Text weight='medium'>(without extension)</Text>.
      </Text>

      <Separator orientation='horizontal' size='4' mt='2' mb='1' />

      <li>
        <Text size='2'>
          Not allowed characters:{' '}
          {NOT_ALLOWED_CHARS.map((chars, index) => (
            <Fragment key={chars}>
              <Code variant='ghost'>{chars}</Code>

              {index < NOT_ALLOWED_CHARS.length - 1 && ' '}
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
