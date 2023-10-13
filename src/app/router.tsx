import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { ChallengePage } from '@/pages/challenge-page/challenge-page.tsx'
import { GuidesPage } from '@/pages/guides-page/guides-page.tsx'
import { HomePage } from '@/pages/home-page/home-page.tsx'
import { SignInPage } from '@/pages/login-page/sign-in-page.tsx'
import { SignUpPage } from '@/pages/register-page/sign-up-page.tsx'
import { Layout } from '@/shared/ui/layout/layout.tsx'

const publicRoutes: RouteObject[] = [
  { path: '/sign-in', element: <SignInPage /> },
  { path: '/sign-up', element: <SignUpPage /> },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        element: <PrivateRoutes />,
        children: [
          { path: '/challenge', element: <ChallengePage /> },
          { path: '/guides', element: <GuidesPage /> },
        ],
      },
    ],
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}
function PrivateRoutes() {
  const isLoggedIn = false

  return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}
