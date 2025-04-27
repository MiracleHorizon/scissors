

import Link from 'next/link'
import { Flex, IconButton, Link as RadixLink, Text, Tooltip } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { useSelectedPath } from '@hooks/useSelectedPath'
import type { NavigationItemModel } from '@components/navigation/types'
import styles from './NavigationItem.module.css'

export const NavigationItem = ({
  label,
  href,
  tooltipContent,
  icon,
  ...attributes
}: NavigationItemModel) => {
  const isSelected = useSelectedPath(href)

  const itemJSX = (
    <Flex
      asChild
      align='center'
      className={clsx(styles.root, {
        [styles.selected]: isSelected
      })}
    >
      <RadixLink asChild color='gray' underline='hover' size='2' className={styles.link}>
        <Link {...attributes} href={href}>
          <Text className={styles.text}>{label}</Text>
          <IconButton
            color='gray'
            variant='ghost'
            size='2'
            radius='large'
            className={styles.iconButton}
          >
            {icon}
          </IconButton>
        </Link>
      </RadixLink>
    </Flex>
  )

  if (tooltipContent) {
    return <Tooltip content={tooltipContent}>{itemJSX}</Tooltip>
  }

  return itemJSX
}
