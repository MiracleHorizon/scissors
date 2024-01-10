import type { Responsive } from '@radix-ui/themes'

export type Size = Responsive<
  | 'auto'
  | 'min-content'
  | 'max-content'
  | '100%'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
>
export type TextSize = Responsive<'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>

export type FlexDirection = Responsive<'row' | 'row-reverse' | 'column' | 'column-reverse'>
export type AlignItems = Responsive<'center' | 'baseline' | 'stretch' | 'start' | 'end'>
export type Gap = Responsive<'2' | '4' | '0' | '1' | '3' | '5' | '6' | '7' | '8' | '9'>

export type Radius = 'small' | 'large' | 'none' | 'medium' | 'full'

export type RadixThemeColor =
  | 'tomato'
  | 'red'
  | 'ruby'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'iris'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'jade'
  | 'green'
  | 'grass'
  | 'brown'
  | 'orange'
  | 'sky'
  | 'mint'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'gold'
  | 'bronze'
  | 'gray'

// Button
export interface ButtonProps {
  color?: RadixThemeColor
  size?: ButtonSize
  variant?: ButtonVariant
  radius?: Radius
}
export type ButtonSize = Responsive<'1' | '2' | '3' | '4'>
export type ButtonVariant = 'classic' | 'solid' | 'soft' | 'surface' | 'outline' | 'ghost'

// Badge
export interface BadgeProps {
  color?: RadixThemeColor
  size?: BadgeSize
  variant?: BadgeVariant
  radius?: Radius
}
export type BadgeSize = Responsive<'1' | '2'>
export type BadgeVariant = 'solid' | 'soft' | 'surface' | 'outline'

// TextField.Input
export interface TextFieldInputProps {
  color?: RadixThemeColor
  size?: TextFieldInputSize
  variant?: TextFieldInputVariant
}

export type TextFieldInputSize = Responsive<'1' | '2' | '3'>
export type TextFieldInputVariant = 'classic' | 'surface' | 'soft'

// AccessibleIcon
export interface AccessibleIconProps {
  label?: string
}
