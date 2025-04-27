import { DocsSection } from '@app/docs/components/DocsSection'
import { LightnessRow } from './LightnessRow'
import { BrightnessRow } from './BrightnessRow'
import { SaturationRow } from './SaturationRow'
import { HueRow } from './HueRow'
import { DOCS_ANCHOR_MODULATE } from '@site/paths'

export const ModulateSection = () => (
  <DocsSection title='Modulate' hash={DOCS_ANCHOR_MODULATE}>
    <>
      <LightnessRow />
      <BrightnessRow />
      <SaturationRow />
      <HueRow />
    </>
  </DocsSection>
)
