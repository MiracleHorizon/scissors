'use client'

import { Box, Button, Flex, Separator } from '@radix-ui/themes'
import type { ChangeEvent } from 'react'

import { FileUploader } from '@ui/FileUploader'
import { FileDownload } from '@components/FileDownload'
import { SwitchFlip } from '@components/SwitchFlip'
import { SwitchFlop } from '@components/SwitchFlop'
import { NegateOptions } from '@components/NegateOptions'
import { convertImage } from '@api/convertImage'
import { useConvertStore } from '@stores/convert'
import { cropFileNameExtension } from '@helpers/cropFileNameExtension'
import { ConvertFormat } from '@libs/Sharp'
import { themeColor } from '@shared/theme'
import styles from './page.module.css'

export default function HomePage() {
  const file = useConvertStore(state => state.file)
  const convertSettings = useConvertStore(state => state.getConvertSettings())

  const setFile = useConvertStore(state => state.setFile)
  const setDownloadPayload = useConvertStore(state => state.setDownloadPayload)

  async function handleConvertImage() {
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)
    formData.append('settings', JSON.stringify(convertSettings))

    const url = window.location.origin + '/api/convert'
    const imageBlob = await convertImage({ url, formData })

    const link = URL.createObjectURL(imageBlob)
    const fileFormat = file.type.replace('image/', '')
    const fileName = `${cropFileNameExtension(file.name)}.${fileFormat}`

    setDownloadPayload({
      link,
      fileName
    })
  }

  function handleFileChange(ev: ChangeEvent<HTMLInputElement>) {
    const fileList = ev.target.files
    if (!fileList) return

    const file = fileList.item(0)
    if (!file) return

    setFile(file)
    ev.target.value = ''
  }

  return (
    <Box width='100%'>
      <Flex py='6' width='100%' align='center' direction='column'>
        <Flex
          asChild
          px='6'
          width='100%'
          justify='start'
          direction='column'
          className={styles.main}
        >
          <main>
            <FileUploader
              accept={Object.values(ConvertFormat)
                .map(format => `image/${format}`)
                .join(', ')}
              onChange={handleFileChange}
            />
            <FileDownload className={styles.fileDownload} />

            <Flex asChild my='4' gap='2' direction='column' py='2'>
              <section>
                <Flex gap='3' direction='row'>
                  <SwitchFlip />
                  <SwitchFlop />
                </Flex>
                <Separator my='1' size='4' />
                <NegateOptions />
              </section>
            </Flex>

            <Flex width='100%' asChild align='center' justify='end'>
              <footer>
                <Button disabled={!file} size='3' color={themeColor} onClick={handleConvertImage}>
                  Convert
                </Button>
              </footer>
            </Flex>
          </main>
        </Flex>
      </Flex>
    </Box>
  )
}
