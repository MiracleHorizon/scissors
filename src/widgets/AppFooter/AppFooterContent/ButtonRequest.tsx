import dynamic from 'next/dynamic'
import { Button, Text } from '@radix-ui/themes'
import { type FC, memo } from 'react'

import { SymbolIcon } from '@ui/icons/SymbolIcon'
import { LockClosedIcon } from '@ui/icons/LockClosedIcon'
import { useOutputStore } from '@stores/output'

const RequestErrorAlert = dynamic(
  () => import('@components/alerts/RequestErrorAlert').then(mod => mod.RequestErrorAlert),
  { ssr: false }
)

export const ButtonRequest: FC<Props> = memo(
  ({ label, isPending, error, makeRequest, retry, reset }) => {
    const isFileUploaded = useOutputStore(state => state.isFileUploaded())

    return (
      <>
        <Button
          size='3'
          radius='large'
          disabled={!isFileUploaded || isPending}
          onClick={makeRequest}
        >
          <Text as='span'>{label}</Text>
          {!isFileUploaded || isPending ? (
            <LockClosedIcon width='20px' height='20px' label={`${label.toLowerCase()} locked`} />
          ) : (
            <SymbolIcon width='20px' height='20px' label={label.toLowerCase()} />
          )}
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
}
