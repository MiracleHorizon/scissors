import { Flex, Heading, Separator } from '@radix-ui/themes'
import { DimensionsIcon } from '@radix-ui/react-icons'

import { ButtonRemoveResize } from '@components/options/Resize/ButtonRemoveResize'
import styles from './ResizeHeader.module.css'

export function ResizeHeader() {
  return (
    <Flex asChild align='center' justify='between' width='100%'>
      <header>
        <Flex asChild align='center'>
          <article>
            <Flex asChild align='center' justify='center'>
              <span>
                <DimensionsIcon width='18px' height='18px' />
              </span>
            </Flex>
            <Separator orientation='vertical' className={styles.separator} />
            <Heading size='3' weight='medium'>
              Resize
            </Heading>
          </article>
        </Flex>

        <ButtonRemoveResize />
      </header>
    </Flex>
  )
}
