'use client'

import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { ButtonAddModulate } from './ButtonAddModulate'
import { useModulateStore } from '@stores/modulate'

const ModulateHeader = dynamic(() => import('./ModulateHeader').then(mod => mod.ModulateHeader), {
  ssr: false
})
const ModulateList = dynamic(() => import('./ModulateList').then(mod => mod.ModulateList), {
  ssr: false
})

export function Modulate() {
  const isAdded = useModulateStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' p='0'>
      <section>
        {isAdded ? (
          <>
            <ModulateHeader />
            <ModulateList />
          </>
        ) : (
          <ButtonAddModulate />
        )}
      </section>
    </Flex>
  )
}
