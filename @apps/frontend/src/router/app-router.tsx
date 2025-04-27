import { createBrowserRouter } from 'react-router-dom'

import { Layout as BaseLayout } from '@components/Layout'
import HomePage from '@pages/home'

export const createRouter = () =>
  createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        }
      ]
    }
  ])
