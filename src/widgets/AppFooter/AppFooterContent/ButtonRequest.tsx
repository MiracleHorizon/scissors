import { type FC, memo } from 'react'
import dynamic from 'next/dynamic'
import MediaQuery from 'react-responsive'
import { Button, Text } from '@radix-ui/themes'

import { SymbolIcon } from '@ui/icons/SymbolIcon'
import { LockClosedIcon } from '@ui/icons/LockClosedIcon'
import { useOutputStore } from '@stores/output'
import { TOUR_STEP } from '@lib/tour'

const RequestErrorAlert = dynamic(
  () => import('@components/alerts/RequestErrorAlert').then(mod => mod.RequestErrorAlert),
  { ssr: false }
)

export const ButtonRequest: FC<Props> = memo(
  ({ label, isPending, error, makeRequest, retry, reset, isDisabled }) => {
    const isFileUploaded = useOutputStore(state => state.isFileUploaded())

    return (
      <>
        <Button
          data-tourstep={TOUR_STEP.REQUEST_BUTTON}
          size='3'
          radius='large'
          disabled={isDisabled || isPending || !isFileUploaded}
          onClick={makeRequest}
        >
          <MediaQuery minWidth={401}>
            <Text as='span'>{label}</Text>

            {!isFileUploaded || isPending ? (
              <LockClosedIcon width='20px' height='20px' label={`${label.toLowerCase()} locked`} />
            ) : (
              <SymbolIcon width='20px' height='20px' label={label.toLowerCase()} />
            )}
          </MediaQuery>

          <MediaQuery maxWidth={400}>
            <SymbolIcon width='20px' height='20px' label={label.toLowerCase()} />
          </MediaQuery>
        </Button>

        {error && <RequestErrorAlert open={!!error} error={error} reset={reset} retry={retry} />}
      </>
    )
  }
)

ButtonRequest.displayName = 'ButtonRequest'

interface Props {
  label: string
  isPending: boolean
  error: Error | null
  makeRequest: VoidFunction
  retry: VoidFunction
  reset: VoidFunction
  isDisabled?: boolean
}
