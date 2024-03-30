import { useEffect, useState } from 'react'
import Drawer from 'react-modern-drawer'
import { Flex, IconButton, Portal, Separator } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

import { DotsHorizontalIcon } from '@scissors/react-icons/DotsHorizontalIcon'

import { ItemImportSettings } from '../actions/import-settings'
import { ItemRandomizeSettings } from '../actions/randomize-settings'
import { ItemExportSettings } from '../actions/export-settings'
import { ItemResetSettings } from '../actions/reset-settings'
import { BREAKPOINTS_MAX_WIDTH } from '@lib/theme'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'
import styles from './ToolbarMobileMenu.module.css'

export function ToolbarMobileMenu(props: MarginProps) {
  const selectedTab = useTabsStore(state => state.selectedTab)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  useEffect(() => {
    const handleWindowResize = () => {
      if (!isOpen) return

      const breakpoint = BREAKPOINTS_MAX_WIDTH.xs
      const isMobile = matchMedia(`(max-width: ${breakpoint}px)`).matches

      if (!isMobile) {
        handleClose()
      }
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [isOpen])

  return (
    <>
      <IconButton {...props} color='gray' radius='large' variant='soft' onClick={handleOpen}>
        <DotsHorizontalIcon width='20px' height='20px' />
      </IconButton>

      <Portal container={document.querySelector('[data-is-root-theme="true"]') as HTMLElement}>
        <Drawer
          open={isOpen}
          zIndex={1001}
          direction='bottom'
          className={styles.drawer}
          onClose={handleClose}
        >
          <Flex direction='column' width='100%' py='3'>
            <Flex asChild direction='column' gapY='2px' width='100%' px='3'>
              <ul>
                <ItemImportSettings />
                <ItemExportSettings />

                {selectedTab === TOOLBAR_TAB.CONVERT && <ItemRandomizeSettings />}
              </ul>
            </Flex>

            {selectedTab === TOOLBAR_TAB.CONVERT && (
              <>
                <Separator size='4' my='3' />

                <Flex asChild direction='column' gapY='2px' width='100%' px='3'>
                  <ul>
                    <ItemResetSettings />
                  </ul>
                </Flex>
              </>
            )}
          </Flex>
        </Drawer>
      </Portal>
    </>
  )
}
