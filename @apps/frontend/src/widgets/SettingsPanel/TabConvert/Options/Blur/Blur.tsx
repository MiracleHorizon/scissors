import { useMemo, lazy, Suspense } from 'react'
import { Flex } from '@radix-ui/themes'

import { Switch } from '@lib/ui/Switch'
import { BlurSigmaSkeleton } from './BlurSigma/BlurSigmaSkeleton'
import { ButtonAddBlurSigma } from './BlurSigma/ButtonAddBlurSigma'
import { useBlurStore } from '@stores/blur'
import type { AlignItems, FlexDirection, Gap } from '@lib/theme'

const BlurSigma = lazy(() => import('./BlurSigma').then(mod => ({ default: mod.BlurSigma })))

export const Blur = () => {
  const blur = useBlurStore(state => state.value)
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
      initial: '3',
      xs: isSigmaAdded ? '3' : '4',
      md: '3'
    }

    return {
      direction,
      align,
      gap
    }
  }, [isSigmaAdded])

  const toggle = useBlurStore(state => state.toggle)
  const handleToggle = () => toggle()

  return (
    <Flex asChild {...flexProps} width='100%'>
      <section>
        <Switch label='Blur' checked={blur} onClick={handleToggle} />

        {isSigmaAdded ? (
          <Suspense fallback={<BlurSigmaSkeleton />}>
            <BlurSigma disabled={isBlurDisabled} />
          </Suspense>
        ) : (
          <ButtonAddBlurSigma disabled={isBlurDisabled} />
        )}
      </section>
    </Flex>
  )
}
