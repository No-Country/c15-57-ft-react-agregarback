import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from '../components';
import '../index.css'
const MainLayout = () => {
  return (
    <div className="
    w-screen 
    h-screen
    grid 
    justify-self-center
    items-center
    sm:grid-cols-1 sm:grid-rows-4
    md:grid-cols-1 md:grid-rows-4
    lg:grid-cols-1 lg:grid-rows-5
    xl:grid-cols-1 xl:grid-rows-5
    "
    >
      <header className="
     sm:hidden 
     md:hidden
     lg:grid row-start-1 lg:row-end-2 lg:grid-col-span-1
     xl:grid row-start-1 xl:row-end-2 xl:grid-col-span-1
      "
      >
        <NavBar />
      </header>
      <hr />
      <main
        className=" 
        sm:row-start-1 sm:row-end-3 sm:grid-col-span-1 
        md:row-start-1 sm:row-end-3 md:grid-col-span-1
        lg:row-start-2 lg:row-end-4 lg:grid-col-span-1
        xl:row-start-2 lg:row-end-4 xl:grid-col-span-1
       "
      >
        <Outlet /> 
      </main>
      <hr />
      <footer
        className="   
        sm:row-start-4 sm:row-end-4 sm:grid-col-span-1 
        md:row-start-4 sm:row-end-4 md:grid-col-span-1
        lg:row-start-5 lg:row-end-5 lg:grid-col-span-1
        xl:row-start-5 lg:row-end-5 xl:grid-col-span-1
       "
      >
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;