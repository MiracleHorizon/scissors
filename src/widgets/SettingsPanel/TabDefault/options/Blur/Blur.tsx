'use client'

import { useCallback, useMemo } from 'react'
import { Flex, Strong, Text } from '@radix-ui/themes'

import { BlurIcon } from '@ui/icons'
import { OptionSlider } from '@components/OptionSlider'
import { OptionSwitch } from '@components/OptionSwitch'
import { ButtonAddBlurSigma } from './ButtonAddBlurSigma'
import { ButtonRemoveBlurSigma } from './ButtonRemoveBlurSigma'
import { useBlurStore } from '@stores/blur'
import { MAX_BLUR_SIGMA, MIN_BLUR_SIGMA } from '@server/Sharp'
import type { AlignItems, FlexDirection, Gap } from '@lib/theme'

function BlurInfo() {
  return (
    <Text as='p' size='3'>
      More accurate <Strong>Gaussian</Strong> blur. Performs a <Strong>slower</Strong>
    </Text>
  )
}

export function Blur() {
  const blur = useBlurStore(state => state.value)
  const sigma = useBlurStore(state => state.sigma)

  const isBlurDisabled = !blur
  const withSigma = typeof sigma === 'number'

  const flexProps = useMemo(() => {
    const direction: FlexDirection = {
      initial: 'column',
      xs: withSigma ? 'column' : 'row',
      md: 'column'
    }
    const align: AlignItems = {
      initial: 'start',
      xs: withSigma ? 'start' : 'center',
      md: 'start'
    }
    const gap: Gap = {
      initial: '2',
      xs: withSigma ? '2' : '4',
      md: '2'
    }

    return {
      direction,
      align,
      gap
    }
  }, [withSigma])

  const toggle = useBlurStore(state => state.toggle)
  const setSigma = useBlurStore(state => state.setSigma)

  const handleToggle = useCallback(() => toggle(), [toggle])
  const handleSigmaChange = useCallback((value: number[]) => setSigma(value[0]), [setSigma])

  return (
    <Flex asChild {...flexProps} width='100%'>
      <section>
        <OptionSwitch title='Blur' checked={blur} onClick={handleToggle} />
        {withSigma ? (
          <Flex gap='4' align='center' width='100%'>
            <OptionSlider
              title='Blur sigma'
              titleIcon={<BlurIcon width={18} height={18} />}
              value={[sigma ?? MIN_BLUR_SIGMA]}
              defaultValue={[MIN_BLUR_SIGMA]}
              step={0.1}
              min={MIN_BLUR_SIGMA}
              max={MAX_BLUR_SIGMA}
              disabled={isBlurDisabled}
              infoContent={<BlurInfo />}
              onValueChange={handleSigmaChange}
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
