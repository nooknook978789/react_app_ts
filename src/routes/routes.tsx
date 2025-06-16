// src/routes/routes.tsx

import { useRoutes } from 'react-router-dom'
import MemberLayout from '../layouts/MemberLayout'
import GuestLayout from '../layouts/GuestLayout'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      element: <GuestLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
      ],
    },
    {
      element: <MemberLayout />,
      children: [
        { path: '/dashboard', element: <Dashboard /> },
      ],
    },
    { path: '*', element: <NotFound /> }, // catch-all route
  ])

  return routes
}
