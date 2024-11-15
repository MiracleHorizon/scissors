import { type HTMLAttributes, memo } from 'react'
import { Tooltip } from '@radix-ui/themes'
import { clsx } from 'clsx'

import type { ClassNameProps } from '@/shared/lib'
import styles from './ColorSwatch.module.css'

interface Props extends ClassNameProps, Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  color: string
  tooltipContent?: string
}

export const ColorSwatch = memo(({ color, style, className, tooltipContent, ...props }: Props) => {
  const swatchJSX = (
    <div
      {...props}
      style={{
        ...style,
        backgroundColor: color
      }}
      className={clsx(styles.root, className)}
    />
  )

  if (tooltipContent) {
    return <Tooltip content={tooltipContent}>{swatchJSX}</Tooltip>
  }

  return swatchJSX
})

ColorSwatch.displayName = 'ColorSwatch'
