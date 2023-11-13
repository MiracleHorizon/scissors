import { AspectRatio, Flex, Link } from '@radix-ui/themes'

import { useConvertStore } from '@stores/convert'
import { themeColor } from '@shared/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export function FileDownload({ className }: ClassNameProps) {
  const downloadPayload = useConvertStore(state => state.downloadPayload)
  const removeDownloadPayload = useConvertStore(state => state.removeDownloadPayload)

  if (!downloadPayload) {
    return null
  }

  const { link, fileName } = downloadPayload

  const handleRemoveDownloadPayload = () => removeDownloadPayload()

  return (
    <Flex align='center' direction='column' className={className}>
      <AspectRatio ratio={16 / 9}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img width='100%' height='100%' src={link} alt={fileName} />
      </AspectRatio>
      <Flex mt='2' align='center' justify='center' width='100%'>
        <Link
          size='6'
          weight='medium'
          color={themeColor}
          href={link}
          download={fileName}
          onClick={handleRemoveDownloadPayload}
        >
          Download
        </Link>
      </Flex>
    </Flex>
  )
}
