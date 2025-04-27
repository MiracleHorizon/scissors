import { lazy, Suspense, type HTMLAttributes, memo } from 'react'
import { Button, Flex } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { DropdownRequestOptions } from './DropdownRequestOptions'
import { useOutputStore } from '@stores/output'
import { TOUR_STEP } from '@lib/tour'
import styles from './ButtonRequest.module.css'

const RequestErrorAlert = lazy(() =>
  import('@components/alerts/RequestErrorAlert').then(mod => ({ default: mod.RequestErrorAlert }))
)

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'color' | 'onClick' | 'className'> {
  label: string
  isLoading: boolean
  error: unknown
  makeRequest: VoidFunction
  retry: VoidFunction
  reset: VoidFunction
  isDisabled?: boolean
}

export const ButtonRequest = memo(
  ({ label, isLoading, error, makeRequest, retry, reset, isDisabled, ...buttonProps }: Props) => {
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
          <Button
            size='3'
            disabled={disabled}
            className={styles.button}
            onClick={makeRequest}
            {...buttonProps}
          >
            {label}
          </Button>

          <DropdownRequestOptions isLoading={isLoading} disabled={disabled} />
        </Flex>

        {error && error instanceof Error && (
          <Suspense fallback={null}>
            <RequestErrorAlert open={!!error} error={error} reset={reset} retry={retry} />
          </Suspense>
        )}
      </>
    )
  }
)

ButtonRequest.displayName = 'ButtonRequest'
