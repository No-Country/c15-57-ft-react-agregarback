import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'
import './index.css'

export const MainLayout = () => {
  return (
    <div>
      <header>
        <Header />
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
