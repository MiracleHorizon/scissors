import { Card, Flex, Grid } from '@radix-ui/themes'
import { useEffect, useState } from 'react'

import type { ConvertSettings } from '@scissors/sharp'

import { PhotoInfoPanel } from './PhotoInfoPanel/PhotoInfoPanel'
import { PhotoSettingsPanel } from './PhotoSettingsPanel/PhotoSettingsPanel'
import { useSlidesQuery } from '../../api/useSlidesQuery'
import { PhotoSplit } from '../PhotoSplit/PhotoSplit'
import { PhotoToggle } from '../PhotoToggle/PhotoToggle'
import { PhotoCarousel } from '../PhotoCarousel/PhotoCarousel'

export const PhotoGallery = () => {
  const { data: slides, isSuccess, isFetching } = useSlidesQuery()
  const [selectedSlide, setSelectedSlide] = useState<{
    label: string
    order: number
    settings: Partial<ConvertSettings>
    beforeSrc: string
    afterSrc: string
  } | null>(null)
  const [view, setView] = useState<'split' | 'slider' | 'toggle'>('split')

  const handleSelectPhoto = (label: string, index: number) => {
    if (!slides) return
    const slide = slides.find(slide => slide.label === label)
    if (!slide) return

    setSelectedSlide({
      ...slide,
      order: index + 1
    })
  }

  useEffect(() => {
    if (isSuccess && slides?.length > 0) {
      const firstSlide = slides[0]
      setSelectedSlide({
        ...firstSlide,
        order: 1
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
            slideOrder={selectedSlide.order}
            totalSlides={slides.length}
            downloadPayloadJSON={JSON.stringify(selectedSlide.settings)}
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
