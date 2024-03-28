// https://github.com/streamich/react-use/blob/master/src/useMediaDevices.ts

import { useEffect, useState } from 'react'

import type { MediaDevice } from '@app-types/MediaDevice'

interface State {
  devices: MediaDevice[]
}

interface Returns {
  state: State
}

type ReturnFunction = () => Returns

function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, ReturnFunction | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>))
  }
}

function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, ReturnFunction | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>))
  }
}

const useMediaDevices = (): Returns => {
  const [state, setState] = useState<State>({
    devices: []
  })

  useEffect(() => {
    let mounted = true

    const onChange = () => {
      navigator.mediaDevices
        .enumerateDevices()
        .then(devices => {
          if (mounted) {
            setState({
              devices: devices.map(({ deviceId, groupId, kind, label }) => ({
                deviceId,
                groupId,
                kind,
                label
              }))
            } as State)
          }
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.error(err)
        })
    }

    on(navigator.mediaDevices, 'devicechange', onChange)
    onChange()

    return () => {
      mounted = false
      off(navigator.mediaDevices, 'devicechange', onChange)
    }
  }, [])

  return { state }
}

const useMediaDevicesMock = (): Returns => ({
  state: {
    devices: []
  }
})

const hook =
  typeof navigator !== 'undefined' && !!navigator.mediaDevices
    ? useMediaDevices
    : useMediaDevicesMock

export { hook as useMediaDevices }
