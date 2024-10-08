import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'

// Home
import Home from './views/Home'
import HomeMain from './components/home/HomeMain'
import Auth from './views/Auth'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

// Auth

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <h1 className='text-destructive-foreground' >Error</h1>,
      element: <Home />,
      children: [
        {
          path: '/',
          element: <HomeMain />
        }
      ]
    },
    {
      element: <Auth />,
      children: [
        {
          path: '/login',
          element: <SignIn />
        },
        {
          path: '/register',
          element: <SignUp />
        }
      ]
    }
  ])

  return (
      <ThemeProvider defaultTheme='system' >
        <RouterProvider router={router} />
      </ThemeProvider>
  )
}

export default App
