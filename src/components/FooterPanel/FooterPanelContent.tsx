import { Button, Flex, Separator } from '@radix-ui/themes'
import { LockClosedIcon, SymbolIcon } from '@radix-ui/react-icons'

import { ButtonDownload } from '@components/ButtonDownload'
import { useOutputStore } from '@stores/output'
import { useConvertImage } from '@hooks/useConvertImage'

export function FooterPanelContent({ isPending, handleConvertImage }: Props) {
  const isFileUploaded = useOutputStore(state => state.isFileUploaded())

  return (
    <Flex align='center' justify='end' gap='3' height='100%' width='100%'>
      <ButtonDownload />
      <Separator orientation='vertical' size='2' />
      <Button size='3' disabled={!isFileUploaded || isPending} onClick={handleConvertImage}>
        Convert
        {!isFileUploaded || isPending ? (
          <LockClosedIcon width='20px' height='20px' />
        ) : (
          <SymbolIcon width='20px' height='20px' />
        )}
      </Button>
    </Flex>
  )
}

type Props = Pick<ReturnType<typeof useConvertImage>, 'isPending' | 'handleConvertImage'>
