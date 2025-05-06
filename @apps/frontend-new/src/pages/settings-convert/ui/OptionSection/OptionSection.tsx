import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Card, Flex, Heading, IconButton, Link as RadixLink, Separator } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

import { Link2Icon } from '@scissors/react-icons/Link2Icon'
import { ResetIcon } from '@scissors/react-icons/ResetIcon'

import { BadgeBeta, BadgeNew } from '@/shared/ui'
import styles from './OptionSection.module.css'

interface WithBeta {
  isBeta?: boolean
  isNew?: never
}

interface WithNew {
  isNew?: boolean
  isBeta?: never
}

export const OptionSection = ({
  content,
  title,
  docsLink,
  icon,
  isBeta,
  isNew,
  onReset,
  ...headerProps
}: MarginProps &
  (WithBeta | WithNew) & {
    title?: string
    docsLink?: string
    icon?: ReactNode
    content: ReactNode
    onReset?: () => void
  }) => (
  <Card className={styles.root}>
    {title && (
      <Flex asChild mb='2' align='center' justify='between' width='100%' {...headerProps}>
        <header>
          <Flex asChild width='100%' align='center'>
            <article>
              {icon && (
                <>
                  <Flex asChild align='center' justify='center'>
                    <span>{icon}</span>
                  </Flex>
                  <Separator orientation='vertical' mx='6px' my='0' />
                </>
              )}

              {docsLink ? (
                <RadixLink asChild weight='medium' className={styles.link}>
                  <Link to={docsLink}>
                    {title}
                    <Link2Icon width='17px' height='17px' className={styles.linkIcon} />
                  </Link>
                </RadixLink>
              ) : (
                <Heading size='3' weight='medium'>
                  {title}
                </Heading>
              )}

              {isBeta && <BadgeBeta ml='auto' />}
              {isNew && <BadgeNew ml='auto' />}
            </article>
          </Flex>

          {onReset && (
            <IconButton variant='outline' color='red' radius='large' onClick={onReset}>
              <ResetIcon width='18px' height='18px' />
            </IconButton>
          )}
        </header>
      </Flex>
    )}

    {content}
  </Card>
)
