import Image from 'next/image'
import { Flex, type PaddingProps, Popover, ScrollArea, Text } from '@radix-ui/themes'

import { ButtonInfo } from '@ui/ButtonInfo'
import { pathForPublic } from '@site/config'
import type { FlexDirection, Gap } from '@lib/theme'
import styles from './ResizeFitExamplesPopover.module.css'

function getExampleImagePath(fileName: string): string {
  const EXAMPLES_PUBLIC_PATH = 'resize-fit-examples'

  return pathForPublic(`${EXAMPLES_PUBLIC_PATH}/${fileName}`)
}

const examples = [
  {
    src: getExampleImagePath('cover.png'),
    width: 360,
    height: 264,
    label: 'Cover'
  },
  {
    src: getExampleImagePath('contain.png'),
    width: 264,
    height: 264,
    label: 'Contain'
  },
  {
    src: getExampleImagePath('fill.png'),
    width: 264,
    height: 264,
    label: 'Fill'
  },
  {
    src: getExampleImagePath('inside.png'),
    width: 264,
    height: 264,
    label: 'Inside'
  },
  {
    src: getExampleImagePath('outside.png'),
    width: 360,
    height: 264,
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
    initial: '1',
    xs: '2'
  },
  pb: '1'
}

export const ResizeFitExamplesPopover = () => (
  <Popover.Root>
    <Popover.Trigger>
      <ButtonInfo radius='full' className={styles.buttonInfo} />
    </Popover.Trigger>

    <Popover.Content size='1' side='top' align='center' className={styles.content}>
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
