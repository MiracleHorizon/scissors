import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './layout'

import { HomePage } from '@/pages/home'
import { GalleryPage } from '@/pages/gallery'
import { DocumentationPage } from '@/pages/docs'

export const createRouter = () =>
  createBrowserRouter([
    {
      element: <DefaultLayout />,
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
          element: <DocumentationPage />
        }
      ]
    }
  ])
