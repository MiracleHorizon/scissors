'use client'

import { useCallback } from 'react'
import { Flex, Strong, Text } from '@radix-ui/themes'

import { OptionSlider } from '@components/OptionSlider'
import { OptionSwitch } from '@components/OptionSwitch'
import { ButtonAddBlurSigma } from './ButtonAddBlurSigma'
import { ButtonRemoveBlurSigma } from './ButtonRemoveBlurSigma'
import { useConvertStore } from '@stores/convert'
import { MAX_BLUR_SIGMA, MIN_BLUR_SIGMA } from '@libs/Sharp'

function BlurInfo() {
  return (
    <Text as='p' size='3'>
      More accurate <Strong>Gaussian</Strong> blur. Performs a <Strong>slower</Strong>
    </Text>
  )
}

export function Blur() {
  const blur = useConvertStore(state => state.blur?.value)
  const blurSigma = useConvertStore(state => state.blur?.sigma)
  const isBlurDisabled = !blur

  const toggleBlur = useConvertStore(state => state.toggleBlur)
  const setBlurSigma = useConvertStore(state => state.setBlurSigma)

  const handleToggleBlur = useCallback(() => toggleBlur(), [toggleBlur])
  const handleBlurSigmaChange = useCallback(
    (value: number[]) => setBlurSigma(value[0]),
    [setBlurSigma]
  )

  return (
    <Flex asChild>
      <section>
        <Flex gap='4' align='start' direction='column' width='100%'>
          <OptionSwitch title='Blur' checked={blur} onClick={handleToggleBlur} />
          {typeof blurSigma === 'number' ? (
            <Flex gap='4' align='center' width='100%'>
              <OptionSlider
                title='Blur sigma'
                value={[blurSigma ?? MIN_BLUR_SIGMA]}
                defaultValue={[MIN_BLUR_SIGMA]}
                step={0.1}
                min={MIN_BLUR_SIGMA}
                max={MAX_BLUR_SIGMA}
                disabled={isBlurDisabled}
                infoContent={<BlurInfo />}
                onValueChange={handleBlurSigmaChange}
              />
              <ButtonRemoveBlurSigma disabled={isBlurDisabled} />
            </Flex>
          ) : (
            <ButtonAddBlurSigma disabled={isBlurDisabled} />
          )}
        </Flex>
      </section>
    </Flex>
  )
}
