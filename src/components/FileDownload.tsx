import Image from 'next/image'
import { AspectRatio, Flex, Link } from '@radix-ui/themes'

import { useConvertStore } from '@stores/convert'
import { themeColor } from '@shared/theme'

export function FileDownload() {
  const downloadPayload = useConvertStore(state => state.downloadPayload)
  const removeDownloadPayload = useConvertStore(state => state.removeDownloadPayload)

  if (!downloadPayload) {
    return null
  }

  const { link, fileName } = downloadPayload

  const handleRemoveDownloadPayload = () => removeDownloadPayload()

  return (
    <Flex align='center' direction='column'>
      <AspectRatio ratio={16 / 9}>
        <Image fill sizes='100%' src={link} alt={fileName} />
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
