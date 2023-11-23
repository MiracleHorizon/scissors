'use client'

import { Flex, Grid } from '@radix-ui/themes'

import { ThemeColorGridItem } from './ThemeColorGridItem'
import { SettingsPopoverTitle } from '../SettingsPopoverTitle'
import { themeColorItems } from '@shared/theme'
import type { SettingsPopoverProps } from '@components/SettingsPopover'

export function ThemeColorGrid({ themeColor }: Pick<SettingsPopoverProps, 'themeColor'>) {
  return (
    <Flex direction='column' width='100%'>
      <SettingsPopoverTitle title='Theme color' mb='3' />
      <Grid columns='6' gap='2' justify='center' width='100%'>
        {themeColorItems.map(({ key, color }) => (
          <ThemeColorGridItem key={key} isSelected={themeColor === color} color={color} />
        ))}
      </Grid>
    </Flex>
  )
}
