'use client'

import { IconButton } from '@radix-ui/themes'
import { ChevronUpIcon } from '@radix-ui/react-icons'
import { MutableRefObject, useEffect, useState } from 'react'
import cn from 'classnames'

import type { ButtonSize } from '@libs/radix'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './ButtonBackTop.module.css'

export function ButtonBackTop<T extends HTMLElement>({
  visibilityOffset,
  container,
  size,
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
      radius='large'
      size={size ?? '2'}
      className={cn(styles.root, className)}
      onClick={handleScrollToTop}
    >
      <ChevronUpIcon width='22px' height='22px' />
    </IconButton>
  )
}

interface Props<T extends HTMLElement> extends ClassNameProps {
  visibilityOffset: number
  container?: MutableRefObject<T>
  size?: ButtonSize
}
