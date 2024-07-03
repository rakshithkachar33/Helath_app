import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Login from './pages/login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path:'/login',
    element:<Login/>
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}