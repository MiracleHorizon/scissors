import { IconButton, Tooltip } from '@radix-ui/themes'
import type { CSSProperties } from 'react'

import { GithubLogoIcon } from '@scissors/react-icons/GithubLogoIcon'

import { GITHUB_REPO_PATH } from '@site/config'

const style: CSSProperties = {
  width: '20px',
  height: '20px'
} as const

export const ButtonGithub = () => (
  <Tooltip content='Watch the project on GitHub'>
    <IconButton asChild radius='large' color='gray' variant='ghost' style={style}>
      <a target='_blank' rel='noreferrer' href={GITHUB_REPO_PATH}>
        <GithubLogoIcon width='16px' height='16px' />
      </a>
    </IconButton>
  </Tooltip>
)
