import { type FC, memo } from 'react'
import { Tooltip } from '@radix-ui/themes'
import { clsx } from 'clsx'

import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './ColorSwatch.module.css'

interface Props extends ClassNameProps {
  color: string
  tooltipContent?: string
  onClick?: VoidFunction
}

export const ColorSwatch: FC<Props> = memo(({ color, className, tooltipContent, onClick }) => {
  const swatchJSX = (
    <div
      style={{ backgroundColor: color }}
      className={clsx(styles.root, className)}
      onClick={onClick}
    />
  )

  if (tooltipContent) {
    return <Tooltip content={tooltipContent}>{swatchJSX}</Tooltip>
  }

  return swatchJSX
})

ColorSwatch.displayName = 'ColorSwatch'
