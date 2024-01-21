import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'

export const setup = (el: ReactElement) => ({
  user: userEvent.setup(),
  ...render(el)
})
