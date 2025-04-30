import { useState } from 'react'
import { Flex } from '@radix-ui/themes'

import { WidthIcon } from '@scissors/react-icons/WidthIcon'
import { HeightIcon } from '@scissors/react-icons/HeightIcon'
import {
  DEFAULT_RESIZE_BACKGROUND,
  DEFAULT_RESIZE_FIT,
  DEFAULT_RESIZE_KERNEL,
  DEFAULT_RESIZE_POSITION,
  MAX_RESIZE_HEIGHT,
  MAX_RESIZE_WIDTH,
  MIN_RESIZE_SIZE,
  RESIZE_FIT,
  RESIZE_GRAVITY,
  RESIZE_KERNEL,
  RESIZE_POSITION,
  type ResizeFit,
  type ResizeKernel,
  type ResizePosition
} from '@scissors/sharp'

import { Checkbox, ColorField, NumberInput, Select } from '@/shared/ui'

export const Resize = () => {
  const [width, setWidth] = useState<number | null>(null)
  const [height, setHeight] = useState<number | null>(null)
  const [kernel, setKernel] = useState<ResizeKernel>(DEFAULT_RESIZE_KERNEL)
  const [background, setBackground] = useState<string | null>(DEFAULT_RESIZE_BACKGROUND)
  const [fit, setFit] = useState<ResizeFit>(DEFAULT_RESIZE_FIT)
  const [position, setPosition] = useState<ResizePosition>(DEFAULT_RESIZE_POSITION)
  const [withDominantBackground, setWithDominantBackground] = useState(false)

  return (
    <Flex direction='column' gap='3' width='100%'>
      <Flex asChild align='center' gap='2' width='100%'>
        <form>
          <NumberInput
            label='Width'
            value={width}
            setValue={setWidth}
            max={MAX_RESIZE_WIDTH}
            min={MIN_RESIZE_SIZE}
            placeholder='1920'
            icon={<WidthIcon />}
          />
          <NumberInput
            label='Height'
            value={height}
            setValue={setHeight}
            max={MAX_RESIZE_HEIGHT}
            min={MIN_RESIZE_SIZE}
            placeholder='1080'
            icon={<HeightIcon />}
          />
        </form>
      </Flex>

      <Flex asChild direction='column' gap='2' width='100%'>
        <form>
          <Flex
            direction={{
              initial: 'column',
              xs: 'row'
            }}
            gap='2'
          >
            {position && (
              <Select
                label='Position'
                data={[
                  {
                    label: 'Position',
                    value: Object.values(RESIZE_POSITION)
                  },
                  {
                    label: 'Gravity',
                    value: Object.values(RESIZE_GRAVITY)
                  }
                ]}
                value={position ?? DEFAULT_RESIZE_POSITION}
                defaultValue={DEFAULT_RESIZE_POSITION}
                onValueChange={value => setPosition(value as ResizePosition)}
              />
            )}

            {fit && (
              <Select
                label='Fit'
                value={fit ?? DEFAULT_RESIZE_FIT}
                defaultValue={DEFAULT_RESIZE_FIT}
                data={[
                  {
                    value: Object.values(RESIZE_FIT)
                  }
                ]}
                onValueChange={value => setFit(value as ResizeFit)}
              />
            )}

            {kernel && (
              <Select
                label='Kernel'
                data={[
                  {
                    value: Object.values(RESIZE_KERNEL)
                  }
                ]}
                value={kernel ?? DEFAULT_RESIZE_KERNEL}
                defaultValue={DEFAULT_RESIZE_KERNEL}
                onValueChange={value => setKernel(value as ResizeKernel)}
              />
            )}
          </Flex>

          {background && (
            <Flex direction='column' gap='3'>
              <ColorField
                label='Background'
                value={background}
                disabled={withDominantBackground}
                onValueChange={setBackground}
              />
              <Checkbox
                label='Use dominant background'
                checked={withDominantBackground}
                onClick={() => setWithDominantBackground(prev => !prev)}
              />
            </Flex>
          )}
        </form>
      </Flex>
    </Flex>
  )
}
