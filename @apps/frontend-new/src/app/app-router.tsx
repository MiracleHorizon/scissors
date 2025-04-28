import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './layout'

import { HomePage } from '@/pages/home'
import { GalleryPage } from '@/pages/gallery'
import { DocumentationPage } from '@/pages/docs'
import { SettingsConvertPage } from '@/pages/settings-convert'
import { SettingsResizePage } from '@/pages/settings-resize'

export const createRouter = () =>
  createBrowserRouter([
    {
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
          children: [
            {
              path: '/convert',
              element: <SettingsConvertPage />
            },
            {
              path: '/resize',
              element: <SettingsResizePage />
            }
          ]
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
