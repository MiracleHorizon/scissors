import { DocsSection } from '../../DocsSection'
import { BrightnessRow, HueRow, LightnessRow, SaturationRow } from './rows'
import { DOCS_HASH } from '@lib/router'

export function ModulateSection() {
  return (
    <DocsSection title='Modulate' hash={DOCS_HASH.MODULATE}>
      <>
        <LightnessRow />
        <BrightnessRow />
        <SaturationRow />
        <HueRow />
      </>
    </DocsSection>
  )
}
