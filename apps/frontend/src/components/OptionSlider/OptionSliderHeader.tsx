import dynamic from 'next/dynamic'
import { Flex, Heading, Separator } from '@radix-ui/themes'
import type { FC } from 'react'

import type { Props as SliderProps } from './OptionSlider.types'
import styles from './OptionSliderHeader.module.css'

const OptionSliderPopover = dynamic(
  () => import('./OptionSliderPopover').then(mod => mod.OptionSliderPopover),
  {
    ssr: false
  }
)

export const OptionSliderHeader: FC<Props> = ({ title, titleIcon, disabled, infoContent }) => (
  <Flex asChild mb='3' px='0' align='center'>
    <article>
      {titleIcon && (
        <>
          <Flex asChild align='center' justify='center'>
            <span>{titleIcon}</span>
          </Flex>
          <Separator orientation='vertical' mx='6px' my='0' />
        </>
      )}

      <Heading as='h5' weight='medium' className={styles.heading}>
        {title}
      </Heading>

      {infoContent && <OptionSliderPopover content={infoContent} disabled={disabled} />}
    </article>
  </Flex>
)

type Props = Pick<SliderProps, 'title' | 'titleIcon' | 'infoContent' | 'disabled'>
