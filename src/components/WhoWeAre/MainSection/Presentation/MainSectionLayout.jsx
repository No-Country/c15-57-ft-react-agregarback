import React from 'react'


function MainSectionLayout ({ children }) {
  return (
    <section className='my-[44px] w-[95%] flex flex-col items-center md:flex-row md:w-full md:h-auto md:my-0 box-border'>
      {children}
    </section>
  )
}

export default MainSectionLayout

