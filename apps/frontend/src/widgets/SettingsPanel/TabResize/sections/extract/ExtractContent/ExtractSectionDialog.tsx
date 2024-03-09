import { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Dialog, Flex } from '@radix-ui/themes'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

import { SelectExtractAspectRatio } from './SelectExtractAspectRatio'
import { ExtractCallout } from './ExtractCallout'
import { BadgeBeta } from '@ui/badges/BadgeBeta'
import { useExtractStore } from '@stores/extract'
import { type ExtractRegion, IMAGE_FILE_FORMAT } from '@server/sharp'
import { aspectRatioList } from './data'

const defaultCropperOptions: Partial<Cropper.Options> = {
  rotatable: false,
  scalable: false,
  zoomable: false,
  movable: false,
  responsive: false
}

Cropper.setDefaults(defaultCropperOptions)

// TODO: Lazy loading cropper?
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

  function handleChangeAspectRatio(displayValue: string) {
    const value = aspectRatioList.find(v => v.displayValue === displayValue)?.value ?? -1
    setCropperAspectRatio(value)

    if (!cropper) return
    cropper.setAspectRatio(value > 0 ? value : NaN)
  }

  const createPreviewImage = useCallback(
    async (cropper: Cropper) => {
      cropper.getCroppedCanvas().toBlob(blob => {
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

    const { x, y, width, height } = cropper.getData()

    const region: ExtractRegion = {
      left: Math.floor(x),
      top: Math.floor(y),
      width: Math.floor(width),
      height: Math.floor(height)
    }

    setExtractRegion(region)
    setPreviewAspectRatio(aspectRatio)
    await createPreviewImage(cropper)

    cropper.setData(region)
  }, [cropper, aspectRatio, createPreviewImage, setExtractRegion, setPreviewAspectRatio])

  function onOpenChange(value: boolean) {
    setOpen(value)

    if (!value && cropper) {
      setCropper(null)
    }
  }

  useEffect(() => {
    if (!cropper) return

    cropper.setData(extractRegion)
  }, [cropper, extractRegion])

  useEffect(() => {
    if (!open) return

    // Да, это костыль.
    // TODO: Checkout https://fengyuanchen.github.io/cropperjs/examples/cropper-in-modal.html
    setTimeout(() => {
      console.log('Костыль')

      if (!imageRef.current) return

      const options: Cropper.Options = {
        data: extractRegion,
        aspectRatio: aspectRatio > 0 ? aspectRatio : NaN
      }

      setCropper(new Cropper(imageRef.current, options))
    }, 0)

    /*
     * Should be invoked only once after the first dialog content render.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <Dialog.Root defaultOpen={false} open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger>
        <Button>Configure</Button>
      </Dialog.Trigger>

      {open && (
        <Dialog.Content>
          <Flex direction='column' gap='2' width='100%'>
            <Flex asChild align='center' wrap='wrap' gap='2'>
              <Dialog.Title className='truncate'>
                Extract
                <BadgeBeta />
              </Dialog.Title>
            </Flex>

            <ExtractCallout />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imageRef}
              style={{
                width: '100%',
                maxWidth: '100%',
                maxHeight: '20dvh'
              }}
              src={file ? URL.createObjectURL(file) : undefined}
              alt='image to extract'
            />

            <SelectExtractAspectRatio
              aspectRatio={aspectRatio}
              setAspectRatio={handleChangeAspectRatio}
            />

            <Flex justify='end' width='100%' mt='2'>
              {/*<Dialog.Close>*/}
              <Button onClick={handleSetRegion}>Confirm</Button>
              {/*</Dialog.Close>*/}
            </Flex>
          </Flex>
        </Dialog.Content>
      )}
    </Dialog.Root>
  )
}

interface Props {
  file: File
}
