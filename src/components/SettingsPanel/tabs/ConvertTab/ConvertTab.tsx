import { useCallback } from 'react'
import { Flex, Separator, Tabs } from '@radix-ui/themes'

import { FormatOption } from './FormatOption'
import { FormatPNG } from './formats/png/components/FormatPNG'
import { useFormatStore } from '@stores/format'
import { ConvertFormat } from '@libs/Sharp'

export function ConvertTab() {
  const convertFormat = useFormatStore(state => state.format)

  const getFormatComponent = useCallback(() => {
    if (!convertFormat) {
      return null
    }

    switch (convertFormat) {
      case ConvertFormat.PNG:
        return <FormatPNG />
      case ConvertFormat.JPG:
        return null
      case ConvertFormat.JPEG:
        return null
      case ConvertFormat.WEBP:
        return null
      default:
        return null
    }
  }, [convertFormat])

  return (
    <Tabs.Content value='convert'>
      <Flex direction='column' px='5' pt='3' pb='5'>
        <FormatOption />
        <Separator size='4' mt='3' mb='4' />
        {getFormatComponent()}
      </Flex>
    </Tabs.Content>
  )
}
