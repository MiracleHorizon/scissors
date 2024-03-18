import { Box } from '@radix-ui/themes'
import { clsx } from 'clsx'
import { type CSSProperties, type FC, useEffect, useLayoutEffect, useRef, useState } from 'react'

import { EnterFullScreenIcon } from '@ui/icons/EnterFullScreenIcon'
import { pathForAssets } from '@site/config'
import type { DownloadPayload } from '@app-types/DownloadPayload'
import styles from './UploadedFilePreview.module.css'

const rootStyle: CSSProperties = {
  backgroundImage: `url(${pathForAssets('image-fill-tiles.png')})`
}

export const UploadedFilePreview: FC<Props> = ({ file, downloadPayload, handleOpenLightbox }) => {
  const [rootRect, setRootRect] = useState<DOMRect>({} as DOMRect)
  const rootRef = useRef<HTMLDivElement>(null)
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const updateRootRect = () => {
    const rootNode = rootRef.current
    if (!rootNode) return

    const rect = rootNode.getBoundingClientRect()
    setRootRect(rect)
  }

  useLayoutEffect(() => {
    updateRootRect()
  }, [file])

  useEffect(() => {
    const handleWindowResize = () => {
      if (debounceTimer.current !== null) {
        clearTimeout(debounceTimer.current)
      }

      debounceTimer.current = setTimeout(updateRootRect, 500)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <Box ref={rootRef} style={rootStyle} className={styles.root}>
      <EnterFullScreenIcon className={clsx(styles.icon, styles.fullscreenIcon)} />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={downloadPayload?.link ?? URL.createObjectURL(file)}
        alt={file.name}
        className={styles.image}
        style={{
          maxWidth: rootRect?.width,
          maxHeight: rootRect?.height
        }}
        onClick={handleOpenLightbox}
      />
    </Box>
  )
}

interface Props {
  file: File
  downloadPayload: DownloadPayload | null
  handleOpenLightbox: VoidFunction
}
