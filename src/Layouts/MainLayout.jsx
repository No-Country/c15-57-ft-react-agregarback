import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, Footer } from '../components'
import '../index.css'
const MainLayout = () => {
  return (
    <div className='
      w-screen
      h-screen
      justify-self-center
      items-center
      sm:grid-rows-[auto,auto,100px] gap-4
      md:grid-rows-[auto,auto,100px] gap-4
      lg:grid-rows-[auto,auto,100px] gap-4
      xl:grid-rows-[auto,auto,100px] gap-4'
    >
      <header className='p-4'>
        <NavBar />
      </header>
      <hr />
      <main
        className=''
      >
        <Outlet />
      </main>
      <hr />
      <footer
        className='p-4'
      >
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout
