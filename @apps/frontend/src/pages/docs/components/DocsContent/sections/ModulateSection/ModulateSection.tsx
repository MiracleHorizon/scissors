import { LightnessRow } from './LightnessRow'
import { BrightnessRow } from './BrightnessRow'
import { SaturationRow } from './SaturationRow'
import { HueRow } from './HueRow'
import { DOCS_ANCHOR_MODULATE } from '@site/paths'
import { DocsSection } from '@pages/docs/components/DocsSection'

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
