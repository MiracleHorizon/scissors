'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Flex, Heading, IconButton, Separator } from '@radix-ui/themes'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import { NavigationMobile, NavigationMobileItem } from './NavigationMobile'
import { GithubLogoIcon } from '@ui/icons/GithubLogoIcon'
import { HamburgerMenuIcon } from '@ui/icons/HamburgerMenuIcon'
import { useEscapeAction } from '@hooks/useEscapeAction'
import { GITHUB_REPO_PATH } from '@site/config'
import styles from './NavigationDrawer.module.css'

export function NavigationDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handleToggle = () => setIsOpen(prevState => !prevState)
  const handleClose = () => setIsOpen(false)

  useEscapeAction(handleClose)

  useEffect(() => {
    handleClose()
  }, [pathname])

  return (
    <>
      <IconButton variant='ghost' color='gray' className={styles.trigger} onClick={handleToggle}>
        <HamburgerMenuIcon width='20px' height='20px' />
      </IconButton>

      <Drawer
        open={isOpen}
        direction='top'
        zIndex={1001}
        className={styles.root}
        overlayClassName={styles.overlay}
        onClose={handleToggle}
      >
        <Flex direction='column' gap='3' p='4' width='100%'>
          <NavigationMobile />

          <Separator size='4' />

          <Flex direction='column' width='100%'>
            <Heading mb='2' as='h4' size='4' className={styles.heading}>
              Resources
            </Heading>

            <NavigationMobileItem
              label='GitHub'
              target='_blank'
              rel='noreferrer'
              icon={<GithubLogoIcon width='18px' height='18px' label='go to github' />}
              href={GITHUB_REPO_PATH}
            />
          </Flex>
        </Flex>
      </Drawer>
    </>
  )
}
