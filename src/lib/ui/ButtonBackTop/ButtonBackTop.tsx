'use client'

import { IconButton } from '@radix-ui/themes'
import { type MutableRefObject, useEffect, useState } from 'react'
import { clsx } from 'clsx'

import { ChevronUpIcon } from '@ui/icons/ChevronUpIcon'
import type { ButtonSize } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './ButtonBackTop.module.css'

export function ButtonBackTop<T extends HTMLElement>({
  container,
  visibilityOffset = 0,
  size = '2',
  className
}: Props<T>) {
  const [isVisible, setVisible] = useState(false)

  const handleScrollToTop = () => {
    const scrollToOptions: ScrollToOptions = {
      top: 0,
      left: 0,
      behavior: 'smooth'
    }

    const node = container?.current
    if (!node) {
      window.scrollTo(scrollToOptions)

      return
    }

    node.scrollTo(scrollToOptions)
  }

  useEffect(() => {
    const node = container?.current

    const handleScroll = () => {
      if (!node) {
        if (window.scrollY > visibilityOffset) {
          setVisible(true)
        } else {
          setVisible(false)
        }

        return
      }

      if (node.scrollTop > visibilityOffset) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    if (!node) {
      window.addEventListener('scroll', handleScroll)
    } else {
      node.addEventListener('scroll', handleScroll)
    }
  }, [container, visibilityOffset])

  if (!isVisible) {
    return null
  }

  return (
    <IconButton
      size={size}
      radius='large'
      className={clsx(styles.root, className)}
      onClick={handleScrollToTop}
    >
      <ChevronUpIcon width='22px' height='22px' label='back scroll top' />
    </IconButton>
  )
}

interface Props<T extends HTMLElement> extends ClassNameProps {
  visibilityOffset?: number
  container?: MutableRefObject<T>
  size?: ButtonSize
}
