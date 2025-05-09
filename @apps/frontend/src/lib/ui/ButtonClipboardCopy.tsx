import { useEffect, useState } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'

import { CopyIcon } from '@scissors/react-icons/CopyIcon'
import { CheckIcon } from '@scissors/react-icons/CheckIcon'

import { copyToClipboard } from '@helpers/browser/copyToClipboard'
import type { ButtonProps } from '@lib/theme'

interface Props extends ButtonProps {
  copyValue: string
}

export const ButtonClipboardCopy = ({
  copyValue,
  size,
  variant = 'ghost',
  color = 'gray'
}: Props) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    if (isCopied) return
    copyToClipboard(copyValue).then(() => setIsCopied(true))
  }

  useEffect(() => {
    if (!isCopied) return

    const timer = setTimeout(() => setIsCopied(false), 3000)

    return () => clearTimeout(timer)
  }, [isCopied])

  return (
    <Tooltip content={isCopied ? 'Copied!' : 'Copy to clipboard'}>
      <IconButton
        size={size}
        variant={isCopied ? 'surface' : variant}
        color={isCopied ? 'blue' : color}
        radius='large'
        onClick={handleCopy}
      >
        {isCopied ? (
          <CheckIcon
            width='24px'
            height='24px'
            color='var(--accent-9)'
            label='copied to clipboard'
          />
        ) : (
          <CopyIcon width='20px' height='20px' />
        )}
      </IconButton>
    </Tooltip>
  )
}
