import { memo } from 'react'
import { Button, Text } from '@radix-ui/themes'

import { SymbolIcon } from '@ui/icons/SymbolIcon'
import { LockClosedIcon } from '@ui/icons/LockClosedIcon'
import { useConvertImage } from '@stores/hooks/useConvertImage'
import { useOutputStore } from '@stores/output'

function ButtonConvert({ isPending, handleConvertImage }: Props) {
  const isFileUploaded = useOutputStore(state => state.isFileUploaded())

  return (
    <Button size='3' disabled={!isFileUploaded || isPending} onClick={handleConvertImage}>
      <Text as='span'>Convert</Text>
      {!isFileUploaded || isPending ? (
        <LockClosedIcon width='20px' height='20px' />
      ) : (
        <SymbolIcon width='20px' height='20px' />
      )}
    </Button>
  )
}

const Memoized = memo(ButtonConvert)

export { Memoized as ButtonConvert }

type Props = Pick<ReturnType<typeof useConvertImage>, 'isPending' | 'handleConvertImage'>
