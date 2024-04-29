import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import {assets} from './assets/assets'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/about/About'
import Locatemess from './components/locatemess/Locatemess'
import Messinfo from './components/messinfo/Messinfo'
import Login from './components/loginRegister/Login'

function App() {
  const [count, setCount] = useState(0)
  const [showLogin, setShowLogin] = useState(false)

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          {showLogin?<Login setShowLogin={setShowLogin} /> : <></>}
          <Header  setShowLogin={setShowLogin}/>
          <Home />
          <Footer />
        </>
      )
    },
    {
      path: '/about',
      element: (
        <>
          <Header />
          <About />
          <Footer />
        </>
      )
    },
    {
      path: '/locatemess',
      element: (
        <>
          <Header />
          <Locatemess />
          <Footer />
        </>
      )
    },
    {
      path: '/addmess',
      element: (
        <>
          <Header />
          <About />
          <Footer />
        </>
      )
    },
    {
      path: '/locatemess/:mess',
      element: (
        <>
          <Header />
          <Messinfo />
          <Footer />
        </>
      )
    }
  ]);

  return (
    <RouterProvider router={router} />

  )
}

export default App
