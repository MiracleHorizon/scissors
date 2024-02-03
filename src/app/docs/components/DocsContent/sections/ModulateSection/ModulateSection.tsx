import { DocsSection } from '../../DocsSection'
import { BrightnessRow, HueRow, LightnessRow, SaturationRow } from './rows'
import { DOCS_HASH_MODULATE } from '@site/paths'

export const ModulateSection = () => (
  <DocsSection title='Modulate' hash={DOCS_HASH_MODULATE}>
    <>
      <LightnessRow />
      <BrightnessRow />
      <SaturationRow />
      <HueRow />
    </>
  </DocsSection>
)
