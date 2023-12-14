import { DocsSection } from '../../DocsSection'
import { BrightnessRow, HueRow, LightnessRow, SaturationRow } from './rows'

export function ModulateSection() {
  return (
    <DocsSection title='Modulate' hash='#modulate'>
      <>
        <LightnessRow />
        <BrightnessRow />
        <SaturationRow />
        <HueRow />
      </>
    </DocsSection>
  )
}
