import React from 'react'
import { Link } from 'react-router-dom'

function VulnerableHabitadElements ({ habitat1, habitat2, habitat3, habitat4, habitat5 }) {
  return (
    <>
      <h2 className='text-[#1E1E1E] text-[32px] not-italic leading-6 pb-[41px]'>
        Explorar los animales según su habitat
      </h2>
      <div className='flex justify-center flex-row pb-[90px]'>
        <div
          style={{ backgroundImage: `url(${habitat1})` }}
          className='group w-[224.273px] h-[224.273px] shrink-0 cursor-pointer flex text-center justify-center items-center text-[color:var(--White,#FFF)] m-[18px]'
        >
          <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-3xl not-italic font-bold leading-10'>
            Bosques y selvas
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${habitat2})` }}
          className='group w-[224.273px] h-[224.273px] shrink-0 cursor-pointer flex text-center justify-center items-center text-[color:var(--White,#FFF)] m-[18px]'
        >
          <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-3xl not-italic font-bold leading-10'>
            Desierto
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${habitat3})` }}
          className='group w-[224.273px] h-[224.273px] shrink-0 cursor-pointer flex text-center justify-center items-center text-[color:var(--White,#FFF)] m-[18px]'
        >
          <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl not-italic font-bold leading-10'>
            Montañas
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${habitat4})` }}
          className='group w-[224.273px] h-[224.273px] shrink-0 cursor-pointer flex text-center justify-center items-center text-[color:var(--White,#FFF)] m-[18px]'
        >
          <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-3xl not-italic font-bold leading-10'>
            Sabanas y pastisales
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${habitat5})` }}
          className='group w-[224.273px] h-[224.273px] shrink-0 cursor-pointer flex text-center justify-center items-center text-[color:var(--White,#FFF)] m-[18px]'
        >
          <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-3xl not-italic font-bold leading-10'>
            Océanos, Ríos y Lagunas
          </p>
        </div>
      </div>
      <div className='explorer-search'>
        <div className='relative inline-block'>
          <button className='text-[white]  flex w-[374px] justify-center items-center gap-2.5 bg-[#1a4f2e] text-[color:var(--White,#fff)] text-center text-lg not-italic font-medium leading-6 cursor-pointer px-7 py-[13px] p-2.5 rounded-[50px] border-[none]'>
            Buscar por nombre
          </button>
          <div className='invisible hover:visible absolute bg-[#f9f9f9] max-h-[150px] overflow-y-auto shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] z-[1] w-[374px] gap-2.5 rounded-[10px_10px_10px_10px]'>
            <Link to='#'>Jaguar</Link>
            <Link to='#'>Oso con Ateojos</Link>
            <Link to='#'>Manatí</Link>
            <Link to='#'>Ajolote</Link>
            <Link to='#'>Mono Araña de Frente Roja</Link>
            <Link to='#'>Tortuga Carey</Link>
            <Link to='#'>Aguará Grazú</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default VulnerableHabitadElements
