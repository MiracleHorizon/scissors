import { Grid } from '@radix-ui/themes'
import type { FC } from 'react'

import { ThemeColorGridItem } from './ThemeColorGridItem'
import { type GridProps, themeColorItems } from '@lib/theme'
import { useTheme } from '@hooks/useTheme'

export const ThemeColorGrid: FC<Props> = ({ rows = 4, ...props }) => {
  const { themeColor } = useTheme()

  return (
    <Grid
      columns={Math.floor(themeColorItems.length / rows).toString()}
      justify='center'
      gapY='6px'
      width='100%'
      {...props}
    >
      {themeColorItems.map(({ key, color }) => (
        <ThemeColorGridItem key={key} isSelected={themeColor === color} color={color} />
      ))}
    </Grid>
  )
}

interface Props extends Omit<GridProps, 'rows'> {
  rows?: number
}
