import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'

// Home
import Home from './views/Home'
import HomeMain from './components/home/HomeMain'
import Auth from './views/Auth'
import Login from './views/Login'
import SignUp from './views/Register'
import Navigation from './views/Navigation'
import Receps from './components/navigation/Receps'
import SavedReceps from './components/navigation/SavedReceps'
import Profile from './components/navigation/Profile'
import Login from './views/Login'
import Register from './views/Register'


// Auth

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <h1 className='text-destructive-foreground' >Error</h1>,
      element: <Home />,
      children: [
        {
          path: '/Home',
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
