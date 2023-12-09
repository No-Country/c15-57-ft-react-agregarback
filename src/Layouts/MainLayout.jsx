import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from '../components';
import '../index.css'
const MainLayout = () => {
  return (
    <div className="
    
    "
    >
      <header className="

  
      "
      >
        <NavBar />
      </header>
      <hr />
      <main
       
      >
        <Outlet /> 
      </main>
      <hr />
      <footer
        className=" "
      >
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;