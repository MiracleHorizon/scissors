import { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Dialog, Flex, Separator } from '@radix-ui/themes'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

import { IMAGE_FILE_FORMAT } from '@scissors/sharp'

import { ExtractRatioControl } from '../ExtractRatioControl'
import { ExtractCallout } from '../ExtractCallout'
import { BadgeBeta } from '@ui/badges/BadgeBeta'
import { useExtractStore } from '@stores/extract'
import { cropperDataToExtractRegion, extractRegionToCropperData } from '../utils'
import { aspectRatioList } from '../data'
import styles from './ExtractSectionDialog.module.css'

interface Props {
  file: File
}

export const ExtractSectionDialog = ({ file }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const [open, setOpen] = useState(false)
  const [cropper, setCropper] = useState<Cropper | null>(null)

  const aspectRatio = useExtractStore(state => state.cropperAspectRatio)
  const extractRegion = useExtractStore(state => state.getExtractRegion())

  const setExtractRegion = useExtractStore(state => state.setRegion)
  const setPreviewFile = useExtractStore(state => state.setPreviewFile)
  const setPreviewAspectRatio = useExtractStore(state => state.setPreviewAspectRatio)
  const setCropperAspectRatio = useExtractStore(state => state.setCropperAspectRatio)

  const handleChangeAspectRatio = (displayValue: string) => {
    const value = aspectRatioList.find(v => v.displayValue === displayValue)?.value ?? -1
    setCropperAspectRatio(value)

    if (!cropper) return
    cropper.setAspectRatio(value > 0 ? value : NaN)
  }

  const createPreviewImage = useCallback(
    async (cropper: Cropper) => {
      cropper
        .getCroppedCanvas({
          fillColor: '#454545'
        })
        .toBlob(blob => {
          if (!blob) return

          const fileType = IMAGE_FILE_FORMAT.PNG
          const file = new File([blob], `extracted-region.${fileType}`, {
            type: `image/${fileType}`
          })

          setPreviewFile(file)
        })
    },
    [setPreviewFile]
  )

  const handleSetRegion = useCallback(async () => {
    if (!cropper) return

    const region = cropperDataToExtractRegion({
      data: cropper.getData(),
      imageData: cropper.getImageData()
    })

    setExtractRegion(region)
    setPreviewAspectRatio(aspectRatio)

    cropper.setData(extractRegionToCropperData(region))

    await createPreviewImage(cropper)
  }, [cropper, aspectRatio, createPreviewImage, setExtractRegion, setPreviewAspectRatio])

  useEffect(() => {
    if (!open) return

    /*
     * setTimeout is needed to wait for the image to be rendered.
     */
    setTimeout(() => {
      if (!imageRef.current) return

      const data = extractRegionToCropperData(extractRegion)
      const options: Cropper.Options = {
        data,
        minCropBoxWidth: 20,
        minCropBoxHeight: 20,
        // NOTE: NaN - default value for aspectRatio.
        // https://github.com/fengyuanchen/cropperjs/blob/b122bb6769e867e867ee6a913e12231cbcdf5463/src/js/defaults.js#L18
        aspectRatio: aspectRatio > 0 ? aspectRatio : NaN
      }
      setCropper(new Cropper(imageRef.current, options))
    }, 0)

    /*
     * Should be invoked only once after the first dialog content render.
     */
    // react-hooks/exhaustive-deps
  }, [open])

  return (
    <Dialog.Root defaultOpen={false} open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={styles.trigger}>
        <Button>Configure</Button>
      </Dialog.Trigger>

      {open && (
        <Dialog.Content>
          <Flex direction='column' gap='3' width='100%'>
            <Flex asChild align='center' wrap='wrap' gap='2'>
              <Dialog.Title mb='1' truncate>
                Extract
                <BadgeBeta />
              </Dialog.Title>
            </Flex>

            <ExtractCallout />

            <img
              ref={imageRef}
              src={file ? URL.createObjectURL(file) : undefined}
              alt='Image to extract'
              className={styles.image}
            />

            <Separator size='4' />

            <Flex
              asChild
              align='end'
              justify='end'
              direction={{
                initial: 'column',
                xs: 'row'
              }}
              gap='2'
              width='100%'
            >
              <footer>
                <ExtractRatioControl
                  aspectRatio={aspectRatio}
                  setAspectRatio={handleChangeAspectRatio}
                />
                <Dialog.Close>
                  <Button onClick={handleSetRegion}>Confirm</Button>
                </Dialog.Close>
              </footer>
            </Flex>
          </Flex>
        </Dialog.Content>
      )}
    </Dialog.Root>
  )
}
