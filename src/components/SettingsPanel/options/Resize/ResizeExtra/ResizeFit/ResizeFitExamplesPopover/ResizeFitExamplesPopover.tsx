import Image from 'next/image'
import { Popover } from '@radix-ui/themes'

import { ButtonInfo } from '@ui/ButtonInfo'
import resizeFitExamples from '@public/resize-fit-examples.png'
import styles from './ResizeFitExamplesPopover.module.css'

export function ResizeFitExamplesPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <ButtonInfo ml='2' />
      </Popover.Trigger>

      <Popover.Content size='1' side='top' align='center' className={styles.content}>
        <Image
          src={resizeFitExamples.src}
          width={resizeFitExamples.width / 2.2}
          height={resizeFitExamples.height / 2.2}
          alt='Resize fit examples'
          className={styles.image}
        />
      </Popover.Content>
    </Popover.Root>
  )
}
