import { useEffect, useState } from 'react'
import { Flex, Heading, IconButton, Separator } from '@radix-ui/themes'
import { useLocation, useParams } from 'react-router'

import { GithubLogoIcon } from '@scissors/react-icons/GithubLogoIcon'
import { HamburgerMenuIcon } from '@scissors/react-icons/HamburgerMenuIcon'

import { Drawer } from '@ui/Drawer'
import { NavigationMobile, NavigationMobileItem } from '@components/navigation/NavigationMobile'
import { useEscapeAction } from '@hooks/useEscapeAction'
import { GITHUB_REPO_PATH } from '@site/config'
import styles from './LayoutDrawer.module.css'

const LayoutDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const params = useParams()

  const handleClose = () => setIsOpen(false)

  useEscapeAction(handleClose)

  useEffect(() => {
    handleClose()
  }, [params, pathname])

  return (
    <Drawer
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
    </Drawer>
  )
}

export default LayoutDrawer
