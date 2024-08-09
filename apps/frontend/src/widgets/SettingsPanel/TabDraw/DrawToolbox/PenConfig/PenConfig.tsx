import { LineJoin } from './LineJoin'
import { StrokeStyle } from './StrokeStyle'
import { ShadowColor } from './ShadowColor'
import { ShadowBlur } from './ShadowBlur'
import { GlobalAlpha } from './GlobalAlpha'

export const PenConfig = () => (
  <>
    <LineJoin />
    <StrokeStyle />
    <ShadowBlur />
    <ShadowColor />
    <GlobalAlpha />
  </>
)
