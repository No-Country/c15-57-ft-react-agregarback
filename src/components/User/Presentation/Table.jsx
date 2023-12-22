import { Fragment } from 'react'
const Table = ({ data }) => {
  return (
    <div className='grid grid-cols-4 lg:grid-cols-5 text-center mb-6 '>
      {/* Encabezado de la tabla */}
      <div className='col-span-1 font-robotoM text-[0.8rem] sm:text-[1rem] text-gray-700 bg-gray-200 pl-2  '>ID ORDEN</div>
      <div className='col-span-1 font-robotoM text-[0.8rem] sm:text-[1rem] text-gray-700 bg-gray-200 '>FECHA</div>
      <div className='col-span-1 font-robotoM text-[0.8rem] sm:text-[1rem] text-gray-700 bg-gray-200 '>TOTAL</div>
      <div className='col-span-1 font-robotoM text-[0.8rem] sm:text-[1rem] text-gray-700 bg-gray-200 '>ESTADO</div>
      <div className='col-span-1 bg-gray-200 text-transparent hidden lg:block'>Detalles </div>

      {/* Datos de la tabla */}
      {data.map((data, index) => {
        return (
          <Fragment key={index}>
            <div className='col-span-1 font-roboto text-[0.7rem] sm:text-[1rem] text-gray-800 mt-6 ' key={index}>{data.id}</div>
            <div className='col-span-1 font-roboto text-[0.7rem] sm:text-[1rem] text-gray-800 mt-6'>{data.date}</div>
            <div className='col-span-1 text-[0.7rem] sm:text-[1rem] text-gray-800 mt-6'>
              <span className='font-robotoM'>{data.total}</span>
              <br className='sm:hidden' />
              <span className='font-roboto'>{data.products}</span>
            </div>
            <div className='col-span-1 font-roboto text-[0.7rem] sm:text-[1rem] text-gray-800 mt-6'>{data.state}</div>
            <div className='hidden lg:block col-span-1 font-robotoM text-[0.7rem] sm:text-[1rem] text-green-600 mt-6'>Ver detalles</div>
          </Fragment>
        )
      }
      )}
    </div>
  )
}

export default Table
