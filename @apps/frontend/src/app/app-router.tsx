import {
  createBrowserRouter,
  RouterProvider as BaseRouterProvider,
  type RouteObject,
  Navigate
} from 'react-router-dom'

import { DefaultLayout } from './layout'

import { HomePage } from '@/pages/home'
import { GalleryPage } from '@/pages/gallery'
import { DocumentationPage } from '@/pages/docs'
import { SettingsConvertPage } from '@/pages/settings-convert'
import { SettingsResizePage } from '@/pages/settings-resize'
import { NotFoundPage } from '@/pages/not-found'

export const AppRouter = () => (
  <BaseRouterProvider
    router={createBrowserRouter([
      {
        element: <DefaultLayout />,
        children: [
          {
            path: '/',
            element: <Navigate to='/convert' replace />
          },
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
          ...(process.env.NODE_ENV === 'development'
            ? ([
                {
                  path: '/gallery',
                  element: <GalleryPage />
                }
              ] as RouteObject[])
            : []),
          {
            path: '/docs',
            element: <DocumentationPage />
          },
          {
            path: '*',
            element: <NotFoundPage />
          }
        ]
      }
    ])}
  />
)
