export default function Filtros ({ type = 'Remeras', filter = ['Talle', 'S', 'M', 'L', 'XL'] }) {
  return (
    <>
      <p className="w-20 py-6 text-slate-800 text-xl font-medium font-['Helvetica Neue'] ">
        {type}
      </p>
      <div className='pb-6 justify-start items-start gap-3 inline-flex'>
        <p className="text-gray-800 text-base font-normal font-['Roboto'] ">
          Filtrar por:
        </p>
        <select className='text-gray-800 text-base font-light font-["Roboto"]  '>
          {filter.map((item, index) =>
            index === 0
              ? <option hidden key={item}>{item}</option>
              : <option key={item}>{item}</option>
          )}
        </select>
      </div>
    </>
  )
}
