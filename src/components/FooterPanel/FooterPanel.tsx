import { Button, Flex, Separator } from '@radix-ui/themes'
import { LockClosedIcon, SymbolIcon } from '@radix-ui/react-icons'

import { ButtonDownload } from '@components/ButtonDownload'
import { useConvertStore } from '@stores/convert'
import styles from './FooterPanel.module.css'

export function FooterPanel({ isLoading, handleConvertImage }: Props) {
  const file = useConvertStore(state => state.file)

  return (
    <Flex
      asChild
      align='center'
      justify='end'
      gap='3'
      px='4'
      width='100%'
      height='9'
      className={styles.root}
    >
      <footer>
        <ButtonDownload />
        <Separator orientation='vertical' size='2' />
        <Button
          size='3'
          disabled={!file || isLoading}
          className={styles.convertButton}
          onClick={handleConvertImage}
        >
          Convert
          {!file || isLoading ? (
            <LockClosedIcon width='20px' height='20px' />
          ) : (
            <SymbolIcon width='20px' height='20px' />
          )}
        </Button>
      </footer>
    </Flex>
  )
}

interface Props {
  isLoading: boolean
  handleConvertImage: VoidFunction
}
