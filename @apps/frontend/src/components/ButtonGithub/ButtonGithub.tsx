import { IconButton, Tooltip } from '@radix-ui/themes'

import { GithubLogoIcon } from '@scissors/react-icons/GithubLogoIcon'

import { GITHUB_REPO_PATH } from '@site/config'
import styles from './ButtonGithub.module.css'

export const tooltipContent = 'Watch the project on GitHub'

export const ButtonGithub = () => (
  <Tooltip content={tooltipContent}>
    <IconButton
      asChild
      radius='large'
      color='gray'
      variant='ghost'
      className={styles.button}
      data-cy='button-github'
    >
      <a target='_blank' rel='noreferrer' href={GITHUB_REPO_PATH}>
        <GithubLogoIcon width='16px' height='16px' />
      </a>
    </IconButton>
  </Tooltip>
)
