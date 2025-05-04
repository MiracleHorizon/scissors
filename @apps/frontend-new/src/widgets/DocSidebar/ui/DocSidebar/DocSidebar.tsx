import { useState, type ChangeEvent } from 'react'
import { Flex, Grid, Heading, TextField } from '@radix-ui/themes'

import { Navigation } from './Navigation/Navigation'
import styles from './DocSidebar.module.css'

export const DocSidebar = () => {
  const [search, setSearch] = useState('')

  const handleSearchChange = (ev: ChangeEvent<HTMLInputElement>) => setSearch(ev.target.value)

  return (
    <Flex asChild flexShrink='0' direction='column' width='260px' className={styles.root}>
      <aside>
        <Grid width='100%' p='3' className={styles.searchBox}>
          <TextField.Root
            radius='large'
            size='3'
            placeholder='Search...'
            value={search}
            onChange={handleSearchChange}
          >
            <TextField.Slot>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='m21 21-4.34-4.34' />
                <circle cx='11' cy='11' r='8' />
              </svg>
            </TextField.Slot>
          </TextField.Root>
        </Grid>

        <Flex p='3' direction='column'>
          <Heading as='h3' size='2' mb='4' weight='medium'>
            Documentation sections
          </Heading>

          <Navigation search={search} setSearch={setSearch} />
        </Flex>
      </aside>
    </Flex>
  )
}
