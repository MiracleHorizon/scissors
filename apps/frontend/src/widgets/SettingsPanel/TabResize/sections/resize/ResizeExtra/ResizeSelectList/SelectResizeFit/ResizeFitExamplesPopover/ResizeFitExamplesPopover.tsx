import Image from 'next/image'
import { Flex, Popover, ScrollArea, Text } from '@radix-ui/themes'
import type { PaddingProps } from '@radix-ui/themes/props'
import type { FC } from 'react'

import { ButtonInfo } from '@ui/ButtonInfo'
import { pathForAssets } from '@site/config'
import type { FlexDirection, Gap } from '@lib/theme'
import styles from './ResizeFitExamplesPopover.module.css'

interface Example {
  srcLight: string
  srcDark: string
  width: number
  height: number
  label: string
}

const examples: Example[] = [
  {
    srcLight: 'cover-light.png',
    srcDark: 'cover-dark.png',
    width: 360,
    height: 264,
    label: 'Cover'
  },
  {
    srcLight: 'contain-light.png',
    srcDark: 'contain-dark.png',
    width: 264,
    height: 264,
    label: 'Contain'
  },
  {
    srcLight: 'fill-light.png',
    srcDark: 'fill-dark.png',
    width: 264,
    height: 264,
    label: 'Fill'
  },
  {
    srcLight: 'inside-light.png',
    srcDark: 'inside-dark.png',
    width: 264,
    height: 264,
    label: 'Inside'
  },
  {
    srcLight: 'outside-light.png',
    srcDark: 'outside-dark.png',
    width: 360,
    height: 264,
    label: 'Outside'
  }
] as const

function pathForExampleImage(fileName: string): string {
  const EXAMPLES_PUBLIC_PATH = 'resize-fit-examples'

  return pathForAssets(`${EXAMPLES_PUBLIC_PATH}/${fileName}`)
}

const ASPECT_RATION_REDUCTION = 4.4

const ResizeFitExampleImage: FC<Example> = ({ srcLight, srcDark, width, height, label }) => {
  const common = {
    alt: label,
    width: width / ASPECT_RATION_REDUCTION,
    height: height / ASPECT_RATION_REDUCTION
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        {...common}
        src={pathForExampleImage(srcLight)}
        className='resize-fit-example-image-light'
      />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        {...common}
        src={pathForExampleImage(srcDark)}
        className='resize-fit-example-image-dark'
      />
    </>
  )
}

const exampleListStyle = {
  direction: {
    initial: 'column',
    xs: 'row'
  } as FlexDirection,
  gap: {
    initial: '2',
    xs: '4'
  } as Gap,
  ...({
    px: '2',
    pb: '0',
    pt: {
      initial: '1',
      xs: '2'
    }
  } as PaddingProps)
} as const

export const ResizeFitExamplesPopover = () => (
  <Popover.Root>
    <Popover.Trigger>
      <ButtonInfo radius='full' className={styles.buttonInfo} />
    </Popover.Trigger>

    <Popover.Content size='1' side='top' align='center' height='100%' className={styles.content}>
      <ScrollArea type='scroll' scrollbars='both'>
        <Flex {...exampleListStyle} width='100%' className={styles.exampleList}>
          {examples.map(({ label, ...imageProps }) => (
            <Flex key={label} direction='column' align='center' className={styles.exampleItem}>
              <ResizeFitExampleImage label={label} {...imageProps} />
              <Text size='2' weight='bold'>
                {label}
              </Text>
            </Flex>
          ))}
        </Flex>
      </ScrollArea>
    </Popover.Content>
  </Popover.Root>
)
