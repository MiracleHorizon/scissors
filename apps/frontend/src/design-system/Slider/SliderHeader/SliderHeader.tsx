import dynamic from 'next/dynamic'
import { Flex, Heading, Separator } from '@radix-ui/themes'
import type { FC } from 'react'

import type { Props as SliderProps } from '../types'
import styles from './SliderHeader.module.css'

const SliderPopover = dynamic(() => import('./SliderPopover').then(mod => mod.SliderPopover), {
  ssr: false
})

type Props = Pick<SliderProps, 'title' | 'titleIcon' | 'infoContent' | 'disabled'>

export const SliderHeader: FC<Props> = ({ title, titleIcon, disabled, infoContent }) => (
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

      {infoContent && <SliderPopover content={infoContent} disabled={disabled} />}
    </article>
  </Flex>
)
