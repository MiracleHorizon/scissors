import { useState } from 'react'
import { Flex, Separator } from '@radix-ui/themes'

import { Switch } from '@/shared/ui'

import { FileNameInput } from './FileNameInput/FileNameInput'
import styles from './Common.module.css'

const initialState = {
  fileName: '',
  flip: false,
  flop: false,
  grayscale: false,
  negate: false
}

export const Common = () => {
  const [state, setState] = useState(initialState)

  return (
    <Flex direction='column' gapY='4'>
      <FileNameInput
        fileName={state.fileName}
        setFileName={newFileName => setState(prev => ({ ...prev, fileName: newFileName }))}
      />

      <Flex gapX='4' height='100%' gapY='2' width='100%'>
        <Flex width='50%' direction='column' gap='2'>
          <Switch
            label='Flip'
            checked={state.flip}
            onClick={() => setState(prev => ({ ...prev, flip: !prev.flip }))}
          />
          <Switch
            label='Flop'
            checked={state.flop}
            onClick={() => setState(prev => ({ ...prev, flop: !prev.flop }))}
          />
        </Flex>

        <Separator orientation='vertical' className={styles.separator} />

        <Flex width='50%' direction='column' gap='2'>
          <Switch
            label='Grayscale'
            checked={state.grayscale}
            onClick={() => setState(prev => ({ ...prev, grayscale: !prev.grayscale }))}
          />
          <Switch
            label='Negate'
            checked={state.negate}
            onClick={() => setState(prev => ({ ...prev, negate: !prev.negate }))}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
