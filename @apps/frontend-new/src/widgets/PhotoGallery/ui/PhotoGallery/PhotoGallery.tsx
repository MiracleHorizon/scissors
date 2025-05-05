import { Box, Card, Flex, Grid, ScrollArea } from '@radix-ui/themes'
import { useEffect, useState } from 'react'

import type { ConvertSettings } from '@scissors/sharp'

import { PhotoInfoPanel } from './PhotoInfoPanel/PhotoInfoPanel'
import { PhotoSettingsPanel } from './PhotoSettingsPanel/PhotoSettingsPanel'
import { useSlidesQuery } from '../../api/useSlidesQuery'
import { PhotoSplit } from '../PhotoSplit/PhotoSplit'
import { PhotoToggle } from '../PhotoToggle/PhotoToggle'
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
        {selectedSlide && (
          <PhotoInfoPanel
            view={view}
            onViewChange={setView}
            slideLabel={selectedSlide.label}
            slideOrder={selectedSlide.order}
            totalSlides={slides?.length ?? 0}
            downloadPayloadJSON={JSON.stringify(selectedSlide.settings)}
            renderSlot={
              <ScrollArea mt='4' type='auto' scrollbars='horizontal' style={{ height: '114px' }}>
                <Flex gapX='2' height='100px'>
                  {slides?.map((slide, index) => (
                    <Box
                      key={slide.label}
                      width='160px'
                      height='90x'
                      style={{
                        cursor: 'pointer',
                        flexShrink: 0,
                        backgroundColor: 'var(--gray-3)',
                        borderRadius: 'var(--radius-3)',
                        border:
                          selectedSlide.label === slide.label ? '2px solid var(--gray-12)' : 'none'
                      }}
                      onClick={() =>
                        setSelectedSlide({
                          ...slide,
                          order: index + 1
                        })
                      }
                    />
                  ))}
                </Flex>
              </ScrollArea>
            }
          />
        )}

        {selectedSlide && <PhotoSettingsPanel settings={selectedSlide.settings} />}
      </Grid>
    </Flex>
  )
}
