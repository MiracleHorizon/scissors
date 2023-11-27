import { IconButton, Tooltip } from '@radix-ui/themes'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

const AUTHOR_GITHUB_URL = 'https://github.com/MiracleHorizon'

export function ButtonGithub() {
  return (
    <Tooltip content="Author's GitHub">
      <IconButton asChild size='3' color='gray' variant='ghost' radius='large'>
        <a target='_blank' href={AUTHOR_GITHUB_URL}>
          <GitHubLogoIcon />
        </a>
      </IconButton>
    </Tooltip>
  )
}
