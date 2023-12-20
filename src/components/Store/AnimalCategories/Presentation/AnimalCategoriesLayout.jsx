import React from 'react'

function AnimalCategoriesLayout({children}) {
  return (
    <aside className='hidden md:inline-flex md:w-80 h-full mx-6 py-12 bg-white rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)] flex-col justify-start items-center gap-3.5'>
      {children}
    </aside>
  )
}

export default AnimalCategoriesLayout