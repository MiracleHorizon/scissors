import Image from 'next/image'
import { Flex, type PaddingProps, Popover, ScrollArea, Text } from '@radix-ui/themes'

import { ButtonInfo } from '@ui/ButtonInfo'
import coverExample from '@public/resize-fit-examples/cover.png'
import containExample from '@public/resize-fit-examples/contain.png'
import fillExample from '@public/resize-fit-examples/fill.png'
import insideExample from '@public/resize-fit-examples/inside.png'
import outsideExample from '@public/resize-fit-examples/outside.png'
import type { FlexDirection, Gap } from '@lib/theme'
import styles from './ResizeFitExamplesPopover.module.css'

const examples = [
  {
    src: coverExample.src,
    width: coverExample.width,
    height: coverExample.height,
    label: 'Cover'
  },
  {
    src: containExample.src,
    width: containExample.width,
    height: containExample.height,
    label: 'Contain'
  },
  {
    src: fillExample.src,
    width: fillExample.width,
    height: fillExample.height,
    label: 'Fill'
  },
  {
    src: insideExample.src,
    width: insideExample.width,
    height: insideExample.height,
    label: 'Inside'
  },
  {
    src: outsideExample.src,
    width: outsideExample.width,
    height: outsideExample.height,
    label: 'Outside'
  }
]
const exampleListStyle = {
  direction: {
    initial: 'column',
    xs: 'row'
  } as FlexDirection,
  gap: {
    initial: '2',
    xs: '4'
  } as Gap
}
const exampleListPadding: PaddingProps = {
  pl: {
    initial: '1',
    xs: '2'
  },
  pt: {
    initial: '1',
    xs: '2'
  },
  pr: {
    initial: '2',
    xs: '1'
  },
  pb: '1'
}

export const ResizeFitExamplesPopover = () => (
  <Popover.Root>
    <Popover.Trigger>
      <ButtonInfo radius='full' className={styles.buttonInfo} />
    </Popover.Trigger>

    <Popover.Content size='1' side='bottom' align='center' className={styles.content}>
      <ScrollArea type='scroll' scrollbars='both'>
        <Flex
          {...exampleListStyle}
          {...exampleListPadding}
          width='100%'
          className={styles.exampleList}
        >
          {examples.map(({ width, height, label, ...image }) => (
            <Flex
              key={image.src}
              direction='column'
              align='center'
              gap='1'
              className={styles.exampleItem}
            >
              <Image width={width / 4.4} height={height / 4.4} alt={label} {...image} />
              <Text as='span' size='2' weight='bold' className={styles.exampleLabel}>
                {label}
              </Text>
            </Flex>
          ))}
        </Flex>
      </ScrollArea>
    </Popover.Content>
  </Popover.Root>
)
