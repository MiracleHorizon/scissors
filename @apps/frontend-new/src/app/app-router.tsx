import { createBrowserRouter, Navigate, useLocation } from 'react-router-dom'

import { DefaultLayout } from './layout'

import { HomePage } from '@/pages/home'
import { GalleryPage } from '@/pages/gallery'
import { DocumentationPage } from '@/pages/docs'
import { SettingsConvertPage } from '@/pages/settings-convert'
import { SettingsResizePage } from '@/pages/settings-resize'
import { NotFoundPage } from '@/pages/not-found'

export const createRouter = () =>
  createBrowserRouter([
    {
      element: <DefaultLayout />,
      children: [
        {
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
        },
        {
          path: '*',
          element: <Fallback />
        }
      ]
    }
  ])

const Fallback = () => {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return <Navigate to='/convert' />
  }

  return <NotFoundPage />
}
