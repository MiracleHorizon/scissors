import type { Responsive } from '@radix-ui/themes'

export type Padding = Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '7' | '9'>
export type Color =
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
  color?: Color
  size?: ButtonSize
  variant?: ButtonVariant
  radius?: ButtonRadius
}
export type ButtonSize = Responsive<'1' | '2' | '3' | '4'>
export type ButtonVariant = 'classic' | 'solid' | 'soft' | 'surface' | 'outline' | 'ghost'
export type ButtonRadius = 'small' | 'large' | 'none' | 'medium' | 'full'

// TextField.Input
export interface TextFieldInputProps {
  color?: Color
  size?: TextFieldInputSize
  variant?: TextFieldInputVariant
}

export type TextFieldInputSize = Responsive<'1' | '2' | '3'>
export type TextFieldInputVariant = 'classic' | 'surface' | 'soft'
