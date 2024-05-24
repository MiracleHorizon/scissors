import dynamic from 'next/dynamic'
import { memo } from 'react'
import { Button, Flex } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { DropdownRequestOptions } from './DropdownRequestOptions'
import { useOutputStore } from '@stores/output'
import { TOUR_STEP } from '@lib/tour'
import styles from './ButtonRequest.module.css'

const RequestErrorAlert = dynamic(
  () => import('@components/alerts/RequestErrorAlert').then(mod => mod.RequestErrorAlert),
  {
    ssr: false
  }
)

interface Props {
  label: string
  isLoading: boolean
  error: unknown
  makeRequest: VoidFunction
  retry: VoidFunction
  reset: VoidFunction
  isDisabled?: boolean
}

export const ButtonRequest = memo(
  ({ label, isLoading, error, makeRequest, retry, reset, isDisabled }: Props) => {
    const isFileUploaded = useOutputStore(state => state.isFileUploaded())
    const disabled = isDisabled || isLoading || !isFileUploaded

    return (
      <>
        <Flex
          gap='1px'
          align='center'
          data-tourstep={TOUR_STEP.REQUEST_BUTTON}
          className={clsx(styles.root, {
            [styles.disabled]: disabled
          })}
        >
          <Button size='3' className={styles.button} disabled={disabled} onClick={makeRequest}>
            {label}
          </Button>

          <DropdownRequestOptions isLoading={isLoading} disabled={disabled} />
        </Flex>

        {error && error instanceof Error && (
          <RequestErrorAlert open={!!error} error={error} reset={reset} retry={retry} />
        )}
      </>
    )
  }
)

ButtonRequest.displayName = 'ButtonRequest'
