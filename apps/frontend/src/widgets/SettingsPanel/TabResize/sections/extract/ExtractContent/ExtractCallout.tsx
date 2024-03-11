import { Callout, Strong } from '@radix-ui/themes'

import { InfoCircledIcon } from '@ui/icons/InfoCircledIcon'
import { useOutputStore } from '@stores/output'

export function ExtractCallout() {
  const isFileUploaded = useOutputStore(state => !!state.file)

  return (
    <Callout.Root size='1' color={isFileUploaded ? 'yellow' : 'gray'}>
      <Callout.Icon>
        <InfoCircledIcon width={18} height={18} />
      </Callout.Icon>

      <Callout.Text size='2'>
        {isFileUploaded ? (
          <>
            The preview, with which you can select the area to extract,{' '}
            <Strong>does not take into account</Strong> other possible operations on the image that
            will be before or after the extraction
          </>
        ) : (
          'Please, select the image file to extract'
        )}
      </Callout.Text>
    </Callout.Root>
  )
}
