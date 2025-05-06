import {
  createBrowserRouter,
  Navigate,
  RouterProvider as BaseRouterProvider,
  useLocation,
  type RouteObject
} from 'react-router-dom'

import { DefaultLayout } from './layout'

import { HomePage } from '@/pages/home'
import { GalleryPage } from '@/pages/gallery'
import { DocumentationPage } from '@/pages/docs'
import { SettingsConvertPage } from '@/pages/settings-convert'
import { SettingsResizePage } from '@/pages/settings-resize'
import { NotFoundPage } from '@/pages/not-found'

const Fallback = () => {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return <Navigate to='/convert' />
  }

  return <NotFoundPage />
}

export const AppRouter = () => (
  <BaseRouterProvider
    router={createBrowserRouter([
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
            element: <Fallback />
          }
        ]
      }
    ])}
  />
)
