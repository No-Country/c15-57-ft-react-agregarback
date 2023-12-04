import React from 'react'

import { Outlet } from 'react-router-dom'
import { NavBar, Footer } from './components'

import './index.css'

export const MainLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
