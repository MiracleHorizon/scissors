import { Grid } from '@radix-ui/themes'
import type { FC } from 'react'

import { ThemeColorGridItem } from './ThemeColorGridItem'
import { type GridProps, themeColorItems, type ThemeProps } from '@lib/theme'

export const ThemeColorGrid: FC<Props> = ({ themeColor, rows = 4, ...props }) => (
  <Grid
    columns={Math.floor(themeColorItems.length / rows).toString()}
    justify='center'
    gap='2'
    width='100%'
    {...props}
  >
    {themeColorItems.map(({ key, color }) => (
      <ThemeColorGridItem key={key} isSelected={themeColor === color} color={color} />
    ))}
  </Grid>
)

interface Props extends Pick<ThemeProps, 'themeColor'>, Omit<GridProps, 'rows'> {
  rows?: number
}
