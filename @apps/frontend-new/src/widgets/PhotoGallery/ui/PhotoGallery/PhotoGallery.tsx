import { Card, Flex, Grid, IconButton, Tooltip } from '@radix-ui/themes'
import { useEffect, useState } from 'react'

import { ChevronLeftIcon } from '@scissors/react-icons/ChevronLeftIcon'
import { ChevronRightIcon } from '@scissors/react-icons/ChevronRightIcon'
import type { ConvertSettings } from '@scissors/sharp'

import { PhotoInfoPanel } from './PhotoInfoPanel/PhotoInfoPanel'
import { PhotoSettingsPanel } from './PhotoSettingsPanel/PhotoSettingsPanel'
import { useSlidesQuery } from '../../api/slides-query'
import { PhotoSplit } from '../PhotoSplit/PhotoSplit'
import { PhotoToggle } from '../PhotoToggle/PhotoToggle'
import { PhotoCarousel } from '../PhotoCarousel/PhotoCarousel'

// TODO: Кэширование картинок
// TODO: Раскидать по FSD
export const PhotoGallery = () => {
  const { data: slides, isSuccess, isFetching } = useSlidesQuery()
  const [selectedSlide, setSelectedSlide] = useState<{
    label: string
    index: number
    settings: Partial<ConvertSettings>
    beforeSrc: string
    afterSrc: string
  } | null>(null)
  const [view, setView] = useState<'split' | 'slider' | 'toggle'>('split')

  const selectNextSlide = () => {
    if (!slides || !selectedSlide) return
    const nextSlide = slides.find((_, index) => index === selectedSlide.index + 1)
    if (!nextSlide) return

    const newIndex = selectedSlide.index + 1
    if (newIndex > slides.length) return

    setSelectedSlide({
      ...nextSlide,
      index: newIndex
    })
  }

  const selectPreviousSlide = () => {
    if (!slides || !selectedSlide) return
    const previousSlide = slides.find((_, index) => index === selectedSlide.index - 1)
    if (!previousSlide) return

    const newIndex = selectedSlide.index - 1
    if (newIndex < 0) return

    setSelectedSlide({
      ...previousSlide,
      index: newIndex
    })
  }

  const handleSelectPhoto = (label: string, index: number) => {
    if (!slides) return
    const slide = slides.find(slide => slide.label === label)
    if (!slide) return

    setSelectedSlide({
      ...slide,
      index
    })
  }

  useEffect(() => {
    if (isSuccess && slides?.length > 0) {
      const firstSlide = slides[0]
      setSelectedSlide({
        ...firstSlide,
        index: 0
      })
    }
  }, [isSuccess, slides])

  if (isFetching) {
    return <div>Loading...</div>
  }

  return (
    <Flex
      direction='column'
      width={{
        initial: '100%',
        md: '70dvw'
      }}
      mx={{
        initial: '4',
        md: '0'
      }}
      style={{ backgroundColor: 'unset' }}
    >
      <Card
        size='2'
        style={{
          height: 'min(calc(100vh - 300px), 560px)',
          minHeight: '300px',
          position: 'relative'
        }}
        mb='4'
      >
        <Flex width='100%' height='100%'>
          {slides && slides.length > 1 && (
            <>
              <Tooltip
                content='Previous slide'
                hidden={!selectedSlide || selectedSlide.index === 0}
              >
                <IconButton
                  color='gray'
                  size='2'
                  radius='large'
                  disabled={!selectedSlide || selectedSlide.index === 0}
                  style={{
                    position: 'absolute',
                    left: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1
                  }}
                  onClick={selectPreviousSlide}
                >
                  <ChevronLeftIcon />
                </IconButton>
              </Tooltip>

              <Tooltip
                content='Next slide'
                hidden={!selectedSlide || selectedSlide.index === slides.length - 1}
              >
                <IconButton
                  color='gray'
                  size='2'
                  radius='large'
                  disabled={!selectedSlide || selectedSlide.index === slides.length - 1}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1
                  }}
                  onClick={selectNextSlide}
                >
                  <ChevronRightIcon />
                </IconButton>
              </Tooltip>
            </>
          )}

          {selectedSlide && (
            <>
              {view === 'split' && (
                <PhotoSplit
                  beforeSrc={selectedSlide.beforeSrc}
                  afterSrc={selectedSlide.afterSrc}
                  label={selectedSlide.label}
                />
              )}

              {view === 'toggle' && (
                <PhotoToggle
                  beforeSrc={selectedSlide.beforeSrc}
                  afterSrc={selectedSlide.afterSrc}
                  label={selectedSlide.label}
                />
              )}
            </>
          )}
        </Flex>
      </Card>

      <Grid
        width='100%'
        height={{
          initial: 'auto',
          md: '300px'
        }}
        columns={{
          initial: '1fr',
          md: '2fr 1fr'
        }}
        gap='4'
      >
        {selectedSlide && slides && (
          <PhotoInfoPanel
            view={view}
            onViewChange={setView}
            slideLabel={selectedSlide.label}
            slideOrder={selectedSlide.index + 1}
            totalSlides={slides.length}
            settings={selectedSlide.settings}
            renderFooter={
              <PhotoCarousel
                slides={slides}
                selectedPhoto={selectedSlide}
                onSelectPhoto={handleSelectPhoto}
              />
            }
          />
        )}

        {selectedSlide && <PhotoSettingsPanel settings={selectedSlide.settings} />}
      </Grid>
    </Flex>
  )
}
