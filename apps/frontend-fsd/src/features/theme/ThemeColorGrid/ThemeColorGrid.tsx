import { Grid } from '@radix-ui/themes'

import { ThemeColorGridItem } from './ThemeColorGridItem'
import { type GridProps, themeColorItems } from '@lib/theme'
import { useTheme } from '@hooks/useTheme'

interface Props extends Omit<GridProps, 'rows'> {
  rows?: number
}

export const ThemeColorGrid = ({ rows = 4, ...props }: Props) => {
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
