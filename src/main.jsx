import ReactDOM from 'react-dom/client'

import App from './App'
import { Home, Project, Suggest, Error } from './pages'

import './styles/reset.scss'
import './styles/base.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/project/:id',
        element: <Project />
      },
      {
        path: '/suggest',
        element: <Suggest />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)