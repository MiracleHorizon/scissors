import { createBrowserRouter } from 'react-router-dom'

import { Layout as BaseLayout } from '@components/Layout'
import HomePage from '@pages/home'
import GalleryPage from '@pages/gallery'
import DocsPage from '@pages/docs'
import { NotFound } from '@pages/not-found'

export const createRouter = () =>
  createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/gallery',
          element: <GalleryPage />
        },
        {
          path: '/docs',
          element: <DocsPage />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ])
