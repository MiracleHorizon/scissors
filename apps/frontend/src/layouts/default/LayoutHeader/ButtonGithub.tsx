import { IconButton, Tooltip } from '@radix-ui/themes'

import { GithubLogoIcon } from '@ui/icons/GithubLogoIcon'
import { GITHUB_REPO_PATH } from '@site/config'

export const ButtonGithub = () => (
  <Tooltip content='Watch the project on GitHub'>
    <IconButton asChild size='3' color='gray' variant='ghost'>
      <a target='_blank' rel='noreferrer' href={GITHUB_REPO_PATH}>
        <GithubLogoIcon width='16px' height='16px' />
      </a>
    </IconButton>
  </Tooltip>
)
