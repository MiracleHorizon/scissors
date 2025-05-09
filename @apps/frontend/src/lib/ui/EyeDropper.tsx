import { useCallback } from 'react'
import { IconButton } from '@radix-ui/themes'

import { PipetteIcon } from '@scissors/react-icons/PipetteIcon'

import { useEyeDropper } from '@hooks/useEyeDropper'
import { hexValidationRegex } from '@helpers/colors'
import type { ButtonProps } from '@lib/theme'

/* eslint no-unused-vars: 0  */
interface Props extends ButtonProps {
  setColor: (color: string) => void
}

const EyeDropperComponent = ({
  setColor,
  radius = 'large',
  variant = 'outline',
  ...props
}: Props) => {
  const { isSupported, openEyeDropper } = useEyeDropper()

  const handleClick = useCallback(async () => {
    if (!isSupported) return

    try {
      const result = await openEyeDropper()
      if (!result) return

      const color = result.sRGBHex

      const isValid = hexValidationRegex.test(color)
      if (!isValid) return

      setColor(color)
    } catch (err) {
      console.warn(err)
    } finally {
      document.body.classList.remove('eye-dropper-active')
    }
  }, [isSupported, openEyeDropper, setColor])

  return (
    <IconButton {...props} radius={radius} variant={variant} onClick={handleClick}>
      <PipetteIcon width='20px' height='20px' label='pick color with eye dropper' />
    </IconButton>
  )
}

export { EyeDropperComponent as EyeDropper }
