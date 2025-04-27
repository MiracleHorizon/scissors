import { createBrowserRouter } from 'react-router-dom'

import { Layout as BaseLayout } from '@components/Layout'

export const createRouter = () =>
  createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [
        {
          path: '/',
          element: <div>Home</div>
        }
      ]
    }
  ])
