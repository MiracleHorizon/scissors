import { useMemo } from 'react'
import { Flex, Strong, Text } from '@radix-ui/themes'

import { BlurIcon } from '@ui/icons/BlurIcon'
import { OptionSlider } from '@components/OptionSlider'
import { OptionSwitch } from '@components/OptionSwitch'
import { ButtonAddBlurSigma } from './ButtonAddBlurSigma'
import { ButtonRemoveBlurSigma } from './ButtonRemoveBlurSigma'
import { useBlurStore } from '@stores/blur'
import { BLUR_SIGMA_STEP, MAX_BLUR_SIGMA, MIN_BLUR_SIGMA } from '@server/sharp'
import type { AlignItems, FlexDirection, Gap } from '@lib/theme'

const BlurInfo = () => (
  <Text as='p' size='3'>
    More accurate <Strong>Gaussian</Strong> blur. Performs a <Strong>slower</Strong>
  </Text>
)

export function Blur() {
  const blur = useBlurStore(state => state.value)
  const sigma = useBlurStore(state => state.sigma)
  const isSigmaAdded = useBlurStore(state => state.isSigmaAdded)

  const isBlurDisabled = !blur

  const flexProps = useMemo(() => {
    const direction: FlexDirection = {
      initial: 'column',
      xs: isSigmaAdded ? 'column' : 'row',
      md: 'column'
    }
    const align: AlignItems = {
      initial: 'start',
      xs: isSigmaAdded ? 'start' : 'center',
      md: 'start'
    }
    const gap: Gap = {
      initial: '2',
      xs: isSigmaAdded ? '2' : '4',
      md: '2'
    }

    return {
      direction,
      align,
      gap
    }
  }, [isSigmaAdded])

  const toggle = useBlurStore(state => state.toggle)
  const setSigma = useBlurStore(state => state.setSigma)

  const handleToggle = () => toggle()
  const handleChangeSigma = (value: number[]) => {
    if (value.length === 1) {
      return setSigma(value[0])
    }

    return setSigma(null)
  }

  return (
    <Flex asChild {...flexProps} width='100%'>
      <section>
        <OptionSwitch title='Blur' checked={blur} onClick={handleToggle} />

        {isSigmaAdded ? (
          <Flex gap='4' align='center' width='100%'>
            <OptionSlider
              title='Blur Sigma'
              titleIcon={<BlurIcon width={18} height={18} />}
              value={[sigma]}
              defaultValue={[MIN_BLUR_SIGMA]}
              step={BLUR_SIGMA_STEP}
              min={MIN_BLUR_SIGMA}
              max={MAX_BLUR_SIGMA}
              allowFloat
              disabled={isBlurDisabled}
              infoContent={<BlurInfo />}
              onValueChange={handleChangeSigma}
            />
            <ButtonRemoveBlurSigma disabled={isBlurDisabled} />
          </Flex>
        ) : (
          <ButtonAddBlurSigma disabled={isBlurDisabled} />
        )}
      </section>
    </Flex>
  )
}
