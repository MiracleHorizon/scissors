import { useEffect, useState } from 'react'
import { Button, Card, Flex, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { CookieIcon } from '@scissors/react-icons/CookieIcon'

import { TOUR_LOCALSTORAGE_KEY } from '@/features/tour'
import { useSelectedPath } from '@/shared/router'
import { acceptCookies, isCookiesAccepted, isCookiesBannerVisible } from './utils'
import styles from './CookieConsentBanner.module.css'

export const CookieConsentBanner = () => {
  const isHomePage = useSelectedPath('/')
  const [isVisible, setVisible] = useState(isCookiesBannerVisible())

  const handleAcceptCookies = () => {
    acceptCookies()
    setVisible(false)
  }

  useEffect(() => {
    /*
     * Listen for storage event to check if tour is completed.
     */
    const handleCompleteTour = (ev: StorageEvent) => {
      if (ev.key !== TOUR_LOCALSTORAGE_KEY) return

      /*
       * If cookies already accepted - do nothing.
       */
      if (isCookiesAccepted()) return

      if (ev.newValue !== null) {
        setVisible(true)
      }
    }

    window.addEventListener('storage', handleCompleteTour)

    return () => {
      window.removeEventListener('storage', handleCompleteTour)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <Card
      size='2'
      className={clsx(styles.root, isHomePage ? styles.homePagePosition : styles.defaultPosition)}
    >
      <Flex
        align='center'
        direction={{
          initial: 'column',
          xs: 'row'
        }}
        gap={{
          initial: '3',
          xs: '0'
        }}
        width='100%'
      >
        <CookieIcon className={styles.icon} />

        <Flex
          align='center'
          gap={{
            initial: '3',
            xs: '2'
          }}
          direction={{
            initial: 'column',
            xs: 'row'
          }}
          ml={{
            initial: '0',
            xs: '3'
          }}
        >
          <Text
            as='p'
            size='2'
            align={{
              initial: 'center',
              xs: 'left'
            }}
          >
            We use cookies to give you the best experience on our website.
          </Text>

          <Button radius='large' onClick={handleAcceptCookies}>
            Accept
          </Button>
        </Flex>
      </Flex>
    </Card>
  )
}
