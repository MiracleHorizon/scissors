import { clsx } from 'clsx'
import type { FC, SVGProps } from 'react'

import styles from './BackgroundGrid.module.css'

const patternId = '83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
export const BackgroundGrid: FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg aria-hidden='true' className={clsx(styles.root, className)} {...props}>
    <defs>
      <pattern id={patternId} width='180' height='180' x='50%' y='-1' patternUnits='userSpaceOnUse'>
        <path d='M100 200V.5M.5 .5H200' fill='none' />
      </pattern>
    </defs>
    <svg x='50%' y='-1' className={styles.cellSvg}>
      <path
        d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
        strokeWidth='0'
      />
    </svg>
    <rect width='100%' height='100%' strokeWidth='0' fill={`url(#${patternId})`} />
  </svg>
)
