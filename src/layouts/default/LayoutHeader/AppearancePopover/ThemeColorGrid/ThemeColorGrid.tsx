import { Flex, Grid } from '@radix-ui/themes'
import type { FC } from 'react'

import { ThemeColorGridItem } from './ThemeColorGridItem'
import { AppearancePopoverTitle } from '../AppearancePopoverTitle'
import { themeColorItems, type ThemeProps } from '@lib/theme'

const ROWS = 4
export const ThemeColorGrid: FC<Pick<ThemeProps, 'themeColor'>> = ({ themeColor }) => (
  <Flex direction='column' width='100%'>
    <AppearancePopoverTitle title='Theme Color' mb='3' />
    <Grid
      gap='2'
      justify='center'
      width='100%'
      columns={Math.floor(themeColorItems.length / ROWS).toString()}
    >
      {themeColorItems.map(({ key, color }) => (
        <ThemeColorGridItem key={key} isSelected={themeColor === color} color={color} />
      ))}
    </Grid>
  </Flex>
)
