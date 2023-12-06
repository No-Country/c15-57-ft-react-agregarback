import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from '../components';
import '../index.css'
const MainLayout = () => {
  return (
    <div className="
    w-screen 
    h-screen
    grid grid-rows-5 
    grid grid-columns-1 
    justify-self-center	
    items-center"
    >
      <header className="
      grid grid-row: span 1 / span 2
      grid-column: span 1 / span 1;"
      >
        <NavBar />
      </header>
      <hr />
      <main
        className="   
       grid grid-row: span 2 / span 5
      grid-column: span 1 / span 1;"
      >
        <Outlet />
      </main>
      <hr />
      <footer
        className="   
       grid grid-row: span 5 / span 5
      grid-column: span 1 / span 1;"
      >
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;