import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'

// Home
import Home from './views/Home'
import HomeMain from './components/home/HomeMain'
import Navigation from './views/Navigation'
import Receps from './components/navigation/Receps'
import SavedReceps from './components/navigation/SavedReceps'
import Profile from './components/navigation/Profile'

// Auth
import Auth from './views/Auth'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <h1 className='text-destructive-foreground' >Error</h1>,
      element: <Home />,
      children: [
        {
          path: '/',  // home
          element: <HomeMain />
        }
      ]
    },
    {
      element: <Auth />,
      children: [
        {
          path:'/login',
          element: <Login />
        },
        {
          path:'/register',
          element: <Register />
        },
      ]
    },
    
    {
      element: <Navigation />,
      children:[
        {
          path: '/Profile',
          element:<Profile />
        },
        {
          path: '/Receps',
          element:<Receps />
        },
        {
          path: '/RecepsSaved',
          element:<SavedReceps />
        },
        {
          path: '/Configuration',
          element:<></>
        }
      ]
    },
  ])

  return (
      <ThemeProvider defaultTheme='system' >
        <RouterProvider router={router} />
      </ThemeProvider>
  )
}

export default App
