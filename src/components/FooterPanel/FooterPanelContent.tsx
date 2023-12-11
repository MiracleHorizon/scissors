import { Button, Flex, Separator } from '@radix-ui/themes'
import { LockClosedIcon, SymbolIcon } from '@radix-ui/react-icons'

import { ButtonDownload } from '@components/ButtonDownload'
import { useConvertStore } from '@stores/convert'
import { useConvertImage } from '@hooks/useConvertImage'

export function FooterPanelContent({ isPending, handleConvertImage }: Props) {
  const file = useConvertStore(state => state.file)

  return (
    <Flex align='center' justify='end' gap='3' height='100%' width='100%'>
      <ButtonDownload />
      <Separator orientation='vertical' size='2' />
      <Button size='3' disabled={!file || isPending} onClick={handleConvertImage}>
        Convert
        {!file || isPending ? (
          <LockClosedIcon width='20px' height='20px' />
        ) : (
          <SymbolIcon width='20px' height='20px' />
        )}
      </Button>
    </Flex>
  )
}

type Props = Pick<ReturnType<typeof useConvertImage>, 'isPending' | 'handleConvertImage'>
