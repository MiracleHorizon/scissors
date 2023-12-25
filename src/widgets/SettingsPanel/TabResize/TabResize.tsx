import { Tabs } from '@radix-ui/themes'

import { Resize } from './Resize'
import { isDevelopment } from '@helpers/isDevelopment'

// TODO: Presets

// TODO: Extract
// TODO: Trim
export function TabResize() {
  return (
    <Tabs.Content value='resize'>
      <Resize />
      {isDevelopment() && <div>Presets</div>}
    </Tabs.Content>
  )
}
