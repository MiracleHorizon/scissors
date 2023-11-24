import { DocsSection } from '../DocsSection'
import { BrightnessRow, HueRow, LightnessRow, SaturationRow } from './rows'

export function ModulateSection() {
  return (
    <DocsSection title='Modulate'>
      <>
        <LightnessRow />
        <BrightnessRow />
        <SaturationRow />
        <HueRow />
      </>
    </DocsSection>
  )
}
