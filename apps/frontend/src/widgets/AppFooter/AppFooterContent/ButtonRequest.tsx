import { type FC, memo } from 'react'
import dynamic from 'next/dynamic'
import MediaQuery from 'react-responsive'
import { Button, Spinner, Text } from '@radix-ui/themes'

import { SymbolIcon } from '@scissors/react-icons/SymbolIcon'
import { LockClosedIcon } from '@scissors/react-icons/LockClosedIcon'

import { useOutputStore } from '@stores/output'
import { TOUR_STEP } from '@lib/tour'

const RequestErrorAlert = dynamic(
  () => import('@components/alerts/RequestErrorAlert').then(mod => mod.RequestErrorAlert),
  { ssr: false }
)

export const ButtonRequest: FC<Props> = memo(
  ({ label, isLoading, error, makeRequest, retry, reset, isDisabled }) => {
    const isFileUploaded = useOutputStore(state => state.isFileUploaded())
    const lowercaseLabel = label.toLowerCase()

    return (
      <>
        <Button
          data-tourstep={TOUR_STEP.REQUEST_BUTTON}
          size='3'
          radius='large'
          disabled={isDisabled || isLoading || !isFileUploaded}
          onClick={makeRequest}
        >
          <MediaQuery minWidth={401}>
            <Text>{label}</Text>
          </MediaQuery>

          <Spinner size='2' loading={isLoading}>
            <MediaQuery minWidth={401}>
              {!isFileUploaded ? (
                <LockClosedIcon width='20px' height='20px' label={`${lowercaseLabel} locked`} />
              ) : (
                <SymbolIcon width='20px' height='20px' label={lowercaseLabel} />
              )}
            </MediaQuery>

            <MediaQuery maxWidth={400}>
              <SymbolIcon width='18px' height='18px' label={lowercaseLabel} />
            </MediaQuery>
          </Spinner>
        </Button>

        {error && error instanceof Error && (
          <RequestErrorAlert open={!!error} error={error} reset={reset} retry={retry} />
        )}
      </>
    )
  }
)

ButtonRequest.displayName = 'ButtonRequest'

interface Props {
  label: string
  isLoading: boolean
  error: unknown
  makeRequest: VoidFunction
  retry: VoidFunction
  reset: VoidFunction
  isDisabled?: boolean
}
