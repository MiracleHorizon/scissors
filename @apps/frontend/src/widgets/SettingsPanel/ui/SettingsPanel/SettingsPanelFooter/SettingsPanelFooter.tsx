import { Button, Flex } from '@radix-ui/themes'
import { useRef } from 'react'

import { DownloadIcon } from '@scissors/react-icons/DownloadIcon'

import { useImageStore } from '@/shared/image'
import { ConvertButton } from '@/features/settings/convert'
import styles from './SettingsPanelFooter.module.css'

export const SettingsPanelFooter = () => {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const downloadableFile = useImageStore(state => state.downloadableFile)

  const handleDownloadFile = () => {
    if (!linkRef.current) return

    linkRef.current.click()
  }

  return (
    <Flex asChild mt='auto' align='center' justify='end' gapX='2' p='3' className={styles.footer}>
      <footer>
        <Button
          color='gray'
          radius='large'
          variant='surface'
          disabled={!downloadableFile}
          onClick={handleDownloadFile}
        >
          <DownloadIcon width='18px' height='18px' />
          Download
        </Button>

        <ConvertButton />

        {downloadableFile && (
          <a
            ref={linkRef}
            href={downloadableFile.link}
            download={downloadableFile.name}
            className='hidden'
          />
        )}
      </footer>
    </Flex>
  )
}
