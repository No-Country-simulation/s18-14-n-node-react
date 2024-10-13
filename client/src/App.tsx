import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'

// Alerts Toast
import { Toaster } from "@/components/ui/toaster"

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

// Add Ingredients
import Recipes from './views/Recipes'
import Personalized from './components/recipes/Personalized'
import Categories from './components/recipes/Categories'
import Detail from './views/Detail'

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
        },
        {
          path: '/detail',
          element: <Detail />
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
    {
      path: '/recipes',
      element: <Recipes />,
      children: [
        {
          path: '/recipes/personalized',
          element: <Personalized />
        },
        {
          path: '/recipes/categories',
          element: <Categories />
        },
        {
          path: '/recipes/details/:id',
          element: <div className='h-[400px]'>Recipe id:{ location.href.split('/')[5] } details</div>
        }
      ]
    }
  ])

  return (
      <ThemeProvider defaultTheme='light' >
        <div className="font-['Lato']">
          <Toaster />
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
  )
}

export default App
