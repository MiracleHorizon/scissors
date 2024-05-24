import { Flex } from '@radix-ui/themes'

import { BLUR_SIGMA_STEP, MAX_BLUR_SIGMA, MIN_BLUR_SIGMA } from '@scissors/sharp'

import { Slider } from '@design-system/Slider'
import { BlurSigmaHeader } from './BlurSigmaHeader'
import { useBlurStore } from '@stores/blur'

export const BlurSigma = ({ disabled }: Props) => {
  const sigma = useBlurStore(state => state.sigma)
  const setSigma = useBlurStore(state => state.setSigma)

  const handleChangeSigma = (value: number[]) => {
    if (value.length === 1) {
      return setSigma(value[0])
    }

    return setSigma(null)
  }

  return (
    <Flex direction='column' align='center' gap='2' width='100%'>
      <BlurSigmaHeader disabled={disabled} />
      <Slider
        value={[sigma]}
        defaultValue={[MIN_BLUR_SIGMA]}
        step={BLUR_SIGMA_STEP}
        min={MIN_BLUR_SIGMA}
        max={MAX_BLUR_SIGMA}
        allowFloat
        disabled={disabled}
        onValueChange={handleChangeSigma}
      />
    </Flex>
  )
}

interface Props {
  disabled: boolean
}
