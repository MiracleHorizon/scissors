import { IconButton, Tooltip } from '@radix-ui/themes'

import { GithubLogoIcon } from '@ui/icons/GithubLogoIcon'

const PROJECT_GITHUB_URL = 'https://github.com/MiracleHorizon/image-converter'

export function ButtonGithub() {
  return (
    <Tooltip content='Watch the project on GitHub'>
      <IconButton asChild size='3' color='gray' variant='ghost' radius='large'>
        <a target='_blank' href={PROJECT_GITHUB_URL}>
          <GithubLogoIcon />
        </a>
      </IconButton>
    </Tooltip>
  )
}
