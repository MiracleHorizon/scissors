'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Flex, Text } from '@radix-ui/themes'

import { CookieIcon } from '@ui/icons/CookieIcon'
import { isTourCompleted, TOUR_LS_KEY } from '@lib/tour'
import styles from './CookieConsentBanner.module.css'

const KEY = 'scissors-cookie-consent'

function checkVisibility(): boolean {
  /*
   * Check if already accepted.
   */
  if (localStorage.getItem(KEY) !== null) {
    return false
  }

  /*
   * Banner can be shown only once and only if user tour is completed.
   */
  return isTourCompleted()
}

export default function CookieConsentBanner() {
  const [isVisible, setVisible] = useState(checkVisibility())

  const handleCookiesAccept = () => {
    localStorage.setItem(
      'cookie-consent',
      JSON.stringify({
        accepted: true
      })
    )
    setVisible(false)
  }

  useEffect(() => {
    /*
     * Listen for storage event to check if tour is completed.
     */
    function handleCompleteTour(ev: StorageEvent) {
      if (ev.key !== TOUR_LS_KEY) return

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
    <Card size='2' className={styles.root}>
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
