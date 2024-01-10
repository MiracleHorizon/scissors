import { DimensionsIcon } from '@ui/icons/DimensionsIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResizeReset } from './ButtonResizeReset'
import { DocsHash, Route } from '@lib/router'
import styles from './ResizeHeader.module.css'

export function ResizeHeader() {
  return (
    <OptionSectionHeader
      title='Resize'
      href={Route.DOCS + DocsHash.RESIZE}
      icon={<DimensionsIcon width='18px' height='18px' label='resize' />}
    >
      <ButtonResizeReset className={styles.buttonReset} />
    </OptionSectionHeader>
  )
}
