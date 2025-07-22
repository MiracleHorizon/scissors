// REPOSITORY
const REPO_OWNER = 'MiracleHorizon'
const REPO_NAME = 'scissors'
const REPO_BRANCH = 'main'
const REPO_PATH = `${REPO_OWNER}/${REPO_NAME}`
const FRONTEND_PATH = '@apps/frontend'

const GITHUB_USER_CONTENT_PATH = 'raw.githubusercontent.com'
const GITHUB_USER_CONTENT_REPO_PATH = `https://${GITHUB_USER_CONTENT_PATH}/${REPO_PATH}/${REPO_BRANCH}`

export const GITHUB_PATH = 'github.com'
export const GITHUB_REPO_PATH = `https://${GITHUB_PATH}/${REPO_PATH}`

export const pathForAssets = (path: string): string => {
  const ASSETS_PATH = 'src/assets'

  return `${GITHUB_USER_CONTENT_REPO_PATH}/${FRONTEND_PATH}/${ASSETS_PATH}/${path}`
}

export const pathForSocial = (path: string): string => {
  const SOCIAL_PATH = 'social'

  return `${GITHUB_USER_CONTENT_REPO_PATH}/${SOCIAL_PATH}/${path}`
}
