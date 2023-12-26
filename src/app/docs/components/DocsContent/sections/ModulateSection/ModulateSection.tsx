import { DocsSection } from '../../DocsSection'
import { BrightnessRow, HueRow, LightnessRow, SaturationRow } from './rows'
import { DocsHash } from '@lib/router'

export function ModulateSection() {
  return (
    <DocsSection title='Modulate' hash={DocsHash.MODULATE}>
      <>
        <LightnessRow />
        <BrightnessRow />
        <SaturationRow />
        <HueRow />
      </>
    </DocsSection>
  )
}
