// Github as S3 storage
const REPO_OWNER = 'MiracleHorizon'
const REPO_NAME = 'scissors'
const REPO_BRANCH = 'main'
const REPO_PATH = `${REPO_OWNER}/${REPO_NAME}`
const GITHUB_USER_CONTENT_PATH = 'raw.githubusercontent.com'

export const GITHUB_USER_CONTENT_REPO_PATH = `https://${GITHUB_USER_CONTENT_PATH}/${REPO_PATH}/${REPO_BRANCH}`
export const APP_PATH = '@apps/s3-bridge'
