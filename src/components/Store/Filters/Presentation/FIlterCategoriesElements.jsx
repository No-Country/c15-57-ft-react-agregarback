import React from 'react'

function FilterCategoriesElements({ type = 'Remeras', filter = ['Talle', 'S', 'M', 'L', 'XL'] }) {
   
    
   
    return (
        <>
            <p className='w-20 py-6 text-slate-800 text-xl font-medium font-display '>
                {type}
            </p>
            <div className='pb-6 justify-start items-start gap-3 inline-flex'>
                <p className='text-gray-800 text-base font-normal font-roboto '>
                    Filtrar por:
                </p>
                <select className='text-gray-800 p-1 text-base border-none bg-transparent font-light font-roboto  '>
                    {filter.map((item, index) =>
                        index === 0
                            ? <option hidden key={item}>{item}</option>
                            : <option className='text-gray-800 text-base border-none bg-transparent font-light font-roboto' key={item}>{item}</option>
                    )}
                </select>
            </div>
        </>
    )
}

export default FilterCategoriesElements