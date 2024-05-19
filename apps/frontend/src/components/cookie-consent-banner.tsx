'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Flex, Text } from '@radix-ui/themes'

import { CookieIcon } from '@scissors/react-icons/CookieIcon'

import { TOUR_LS_KEY, isTourCompleted as isTourCompletedCheck } from '@lib/tour'
import { useSelectedPath } from '@hooks/useSelectedPath'
import { PATH_ROOT } from '@site/paths'
import styles from './cookie-consent-banner.module.css'

export default function CookieConsentBanner() {
  const isHomePage = useSelectedPath(PATH_ROOT)
  const [isVisible, setVisible] = useState(isVisibleCheck())

  const handleCookiesAccept = () => {
    acceptCookies()
    setVisible(false)
  }

  useEffect(() => {
    /*
     * Listen for storage event to check if tour is completed.
     */
    function handleCompleteTour(ev: StorageEvent) {
      if (ev.key !== TOUR_LS_KEY) return

      /*
       * If cookies already accepted - do nothing.
       */
      if (isAccepted()) return

      const isCompleted = ev.newValue !== null
      if (isCompleted) {
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
      style={{
        bottom: isHomePage ? 'calc(var(--app-footer-height) + 20px)' : '20px'
      }}
      className={styles.root}
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
          <Button onClick={handleCookiesAccept}>Accept</Button>
        </Flex>
      </Flex>
    </Card>
  )
}

const COOKIE_CONSENT_LS_KEY = 'scissors-cookie-consent'

const acceptCookies = () =>
  localStorage.setItem(
    COOKIE_CONSENT_LS_KEY,
    JSON.stringify({
      accepted: true
    })
  )

const isAccepted = () => !!localStorage.getItem(COOKIE_CONSENT_LS_KEY)

function isVisibleCheck(): boolean {
  /*
   * Check if already accepted.
   */
  if (isAccepted()) {
    return false
  }

  /*
   * Banner can be shown only once and only if user tour is completed.
   */
  const isTourCompleted = isTourCompletedCheck()
  if (!isTourCompleted) {
    return false
  }

  return isTourCompleted && !isAccepted()
}
