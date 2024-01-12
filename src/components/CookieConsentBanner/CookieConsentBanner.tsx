'use client'

import { useState } from 'react'
import { Button, Card, Flex, Text } from '@radix-ui/themes'

import { CookieIcon } from '@ui/icons/CookieIcon'
import styles from './CookieConsentBanner.module.css'

const KEY = 'cookie-consent'

export default function CookieConsentBanner() {
  const [isVisible, setVisible] = useState(!localStorage.getItem(KEY))

  const handleCookiesAccept = () => {
    localStorage.setItem(
      'cookie-consent',
      JSON.stringify({
        accepted: true
      })
    )
    setVisible(false)
  }

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
