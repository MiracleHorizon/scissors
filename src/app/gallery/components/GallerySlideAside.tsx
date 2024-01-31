import { Flex, Heading, Text } from '@radix-ui/themes'
import type { FC } from 'react'

import { dmMono } from '@app/fonts'
import styles from './GallerySlideAside.module.css'

const DetailsItem: FC<SlideDetail> = ({ label, value }) => (
  <Text size='3' as='span'>
    {label}: {value}
  </Text>
)

export function GallerySlideAside({ label, details }: Props) {
  return (
    <Flex direction='column' pl='2' pb='2' className={styles.root}>
      <Flex asChild direction='column' width='100%' style={dmMono.style} className={styles.content}>
        <aside>
          <Heading size='4' as='h4'>
            {label}
          </Heading>

          <Flex asChild direction='column' mt='1'>
            <article>
              {details.map(detail => (
                <DetailsItem key={detail.label} {...detail} />
              ))}
            </article>
          </Flex>
        </aside>
      </Flex>
    </Flex>
  )
}

interface Props {
  label: string
  details: SlideDetail[]
}

/*
 * Representative expression of image processing settings.
 */
interface SlideDetail {
  label: string
  value: string | number
}
