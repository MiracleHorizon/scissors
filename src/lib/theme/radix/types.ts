import type { ComponentPropsWithoutRef } from 'react'
import type { Badge, Button, Flex, Text, TextField } from '@radix-ui/themes'

export type FlexProps = ComponentPropsWithoutRef<typeof Flex>
export type TextProps = ComponentPropsWithoutRef<typeof Text>
export type ButtonProps = ComponentPropsWithoutRef<typeof Button>
export type ButtonSize = ButtonProps['size']
export type BadgeProps = ComponentPropsWithoutRef<typeof Badge>
export type TextFieldInputProps = ComponentPropsWithoutRef<typeof TextField.Input>
export type Size = FlexProps['width']
export type TextSize = TextProps['size']
export type FlexDirection = FlexProps['direction']
export type AlignItems = FlexProps['align']
export type Gap = FlexProps['gap']
export type Radius = ButtonProps['radius']
export type RadixThemeColor = NonNullable<ButtonProps['color']>

export interface AccessibleIconProps {
  label?: string
}
