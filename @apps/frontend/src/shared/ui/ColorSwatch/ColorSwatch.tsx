import type { HTMLAttributes, ReactNode } from 'react'
import { Tooltip } from '@radix-ui/themes'
import { clsx } from 'clsx'

import styles from './ColorSwatch.module.css'

const DEFAULT_SIZE = '20px'

export const ColorSwatch = ({
  color,
  style,
  className,
  tooltipContent,
  size,
  ...props
}: Omit<HTMLAttributes<HTMLDivElement>, 'color'> & {
  color: string
  size?: string
  tooltipContent?: ReactNode
  className?: string
}) => {
  const swatchJSX = (
    <div
      {...props}
      style={{
        ...style,
        backgroundColor: color,
        width: size ?? DEFAULT_SIZE,
        height: size ?? DEFAULT_SIZE
      }}
      className={clsx(styles.root, className)}
    />
  )

  if (tooltipContent) {
    return <Tooltip content={tooltipContent}>{swatchJSX}</Tooltip>
  }

  return swatchJSX
}
