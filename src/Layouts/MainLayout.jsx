import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from '../components'

import '../index.css'

const MainLayout = () => {
  return (
    <div className='
    w-full
    h-full
    justify-self-center
    items-center
    grid-cols-1
    grid-rows-[1fr,auto,1fr]
    lg:grid-rows-[1r,auto,1fr]
'
    >
      <header>
        <NavBar />
      </header>

      <main className='row-span-2 '>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout
