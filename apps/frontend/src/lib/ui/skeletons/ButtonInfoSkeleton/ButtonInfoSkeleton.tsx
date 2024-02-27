import { clsx } from 'clsx'
import Skeleton from 'react-loading-skeleton'

import styles from './ButtonInfoSkeleton.module.css'

export function ButtonInfoSkeleton({ variant, radius, withoutMargin }: Props) {
  const getProps = () => {
    let sizes = {
      width: 26,
      height: 26
    }

    if (variant === 'minimal') {
      sizes = {
        width: 18,
        height: 18
      }
    }

    return {
      ...sizes,
      className: clsx(
        withoutMargin ? styles.withoutMargin : styles.withIntendMargin,
        !radius || radius === 'large' ? styles.largeRadius : styles.fullRadius
      ),
      containerClassName: clsx(variant === 'minimal' && styles.containerMinimal)
    }
  }

  return <Skeleton {...getProps()} />
}

interface Props {
  variant?: 'default' | 'minimal'
  radius?: 'large' | 'full'
  withoutMargin?: boolean
}
