'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Flex, Heading, IconButton, Separator } from '@radix-ui/themes'

import { GithubLogoIcon } from '@scissors/react-icons/GithubLogoIcon'
import { HamburgerMenuIcon } from '@scissors/react-icons/HamburgerMenuIcon'

import { Drawer as DrawerComponent } from '@ui/drawer'
import { NavigationMobile, NavigationMobileItem } from '@components/navigation/navigation-mobile'
import { useEscapeAction } from '@hooks/useEscapeAction'
import { GITHUB_REPO_PATH } from '@site/config'
import styles from './drawer.module.css'

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handleClose = () => setIsOpen(false)

  useEscapeAction(handleClose)

  useEffect(() => {
    handleClose()
  }, [pathname])

  return (
    <DrawerComponent
      open={isOpen}
      direction='top'
      contentClassName={styles.content}
      overlayClassName={styles.overlay}
      onOpenChange={setIsOpen}
      onClose={handleClose}
      trigger={
        <IconButton variant='ghost' color='gray' className={styles.trigger}>
          <HamburgerMenuIcon width='20px' height='20px' />
        </IconButton>
      }
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
    </DrawerComponent>
  )
}
