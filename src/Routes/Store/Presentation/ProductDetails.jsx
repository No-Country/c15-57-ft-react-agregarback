import defaultImage from '../../../assets/products/remeras/remeras-02.png'

export default function ProductDetails () {
  return (
    <div className='container m-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className=''>
          <img
            className='w-full h-full'
            src={defaultImage}
            alt='Jaguar Remera'
          />
        </div>
        <div className='flex flex-col gap-5'>
          <h2 className="text-gray-800 text-5xl font-medium font-['Helvetica Neue']">
            Remera
          </h2>
          <p className="text-gray-800 text-3xl font-medium font-['Helvetica Neue']">
            $800
          </p>
          <ul>
            <li>
              - Confeccionamos con telas de primera calidad, Algodón 100% jersey
              24/1 de textura suave y liviana.
            </li>
            <li>
              - Toda la prenda se arma en Overlock de 4 hilos reforzando
              costuras de seguridad.
            </li>
            <li>
              - Cuello de Reeb fino al tono (Sin TapaCostura).- Tirillera de
              hombro a hombro con hilos de Algodón.
            </li>
          </ul>
          <div className='mt-4'>
            <h3 className='text-xl font-bold mb-2'>Size</h3>
            <ul className='flex gap-3 '>
              <div className='w-6 h-6 px-1.5 pt-0.5 bg-green-800 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex'>
                <div className="text-gray-100 text-base font-medium font-['Helvetica Neue']">S</div>
              </div>
              <div className='w-6 h-6 px-1 pt-0.5 bg-green-300 bg-opacity-40 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex'>
                <div className="text-gray-800 text-base font-medium font-['Helvetica Neue']">M</div>
              </div>
              <div className='w-6 h-6 px-1 pt-0.5 bg-green-300 bg-opacity-40 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex'>
                <div className="text-gray-800 text-base font-medium font-['Helvetica Neue']">L</div>
              </div>
              <div className='w-6 h-6 px-1.5 pt-0.5 bg-gray-300 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex'>
                <div className="text-gray-400 text-xs font-medium font-['Helvetica Neue']">XL</div>
              </div>
              <div className='w-6 h-6 px-1 pt-0.5 bg-green-300 bg-opacity-40 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex'>
                <div className="text-gray-800 text-xs font-medium font-['Helvetica Neue']">XXL</div>
              </div>
            </ul>
          </div>
          <div className='mt-4'>
            <h3 className='text-xl font-bold mb-2'>Color</h3>
            <ul className='flex gap-5 '>
              <li className='w-6 h-6 bg-gray-100 rounded-3xl border border-black' />
              <li className='w-6 h-6 bg-black rounded-3xl' />
            </ul>
          </div>
          <div className='mt-4 flex gap-5'>
            <button className='w-24 h-10 px-4 py-3 rounded-3xl border border-black justify-start items-end gap-4 inline-flex'>
              <div className="w-2 h-4 text-center text-gray-800 text-base font-medium font-['Helvetica Neue']">-</div>
              <div className="w-2 h-4 text-center text-gray-800 text-base font-medium font-['Helvetica Neue']">2</div>
              <div className="w-2 h-4 text-center text-gray-800 text-base font-medium font-['Helvetica Neue']">+</div>
            </button>
            <button className='w-40 h-10 px-4 py-2 bg-green-700 rounded-full justify-start items-center inline-flex'>
              <span className="text-center text-gray-100 text-base font-medium font-['Helvetica Neue'] leading-normal">
                Agregar al carrito
              </span>
            </button>
          </div>
          <br />
          <hr />
          <div className='mt-4 flex gap-5'>
            <span className="text-gray-800 text-base font-medium font-['Helvetica Neue']">Categoría:</span>
            <span className="text-gray-500 text-base font-light font-['Helvetica Neue']">Remera - Jaguar</span>
          </div>
        </div>
      </div>
    </div>
  )
}
