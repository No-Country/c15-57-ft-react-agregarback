import { dhlSmall } from '../../../assets/purchase'
import { useContentContext } from '../../../Store/contextStore/ContentContext'
import { useECommerceContext } from '../../../Store/contextStore/ECommerceContext'
export default function TotalPurchase () {
  const { country, city, postal, street, streetNumber, sentShippingInfo } = useContentContext()
  const { cart, total } = useECommerceContext()
  return (
    <section className='flex flex-col w-[350px] md:w-full xl:max-w-[622px]'>
      <h3 className='font-robotoM text-[0.8rem] text-itemTitle self-end mr-[2%]'>Precio</h3>
      {cart.map((prod) => (
        <div
          key={prod.id}
          className='flex justify-start items-center h-[52px] my-2 border-[1px] border-slate-300 rounded-xl gap-3 box-border overflow-hidden'
        >
          <img
            src={prod.img}
            alt='producto'
            className='w-[50px] h-[53px]'
          />
          <div className='grow flex justify-between items-center h-[52px] my-2 border-slate-300 rounded-xl gap-3 box-border overflow-hidden'>
            <div>
              <h4 className='font-robotoL text-[0.8rem] text-itemTitle'>{prod.type}</h4>
              <p className='font-robotoL text-[0.7rem] text-slate-500'>{prod.description}</p>
            </div>
            <div className='flex flex-col items-center'>
              <h4 className='font-robotoL text-[0.8rem] text-itemTitle'>Cantidad</h4>
              <p className='font-robotoL text-[0.7rem] text-slate-500'>{prod.quantity}</p>
            </div>
            <div className='flex'>
              <p className='min-w-[80px] font-robotoL text-green-800 text-[0.9rem] self-center mr-2 xl:mr-1'>
                {prod.price.toLocaleString('es-AR', {
								  style: 'currency',
								  currency: 'ARS'
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
      {sentShippingInfo && (
        <div className='h-[90px] grow flex border-[1px] border-slate-300 rounded-xl box-border overflow-hidden items-center'>
          <img
            src={dhlSmall}
            alt='DHL logo'
            className='w-[50px] h-[90px] object-cover'
          />
          <div className='ml-2 flex items-center justify-between w-[90%] xl:w-[87%]'>
            <div>
              <h4 className='font-robotoL text-[0.8rem] text-itemTitle'>Envío</h4>
              <p className='font-robotoL text-[0.7rem] text-slate-500'>{`${street} ${streetNumber}`}</p>
              <p className='font-robotoL text-[0.7rem] text-slate-500'>{`${postal} - ${city}`}</p>
              <p className='font-robotoL text-[0.7rem] text-slate-500'>{country}</p>
            </div>
            <p className='font-robotoL text-green-800 text-[0.9rem] mr-4 xl:mr-0 '>
              {(parseInt(2000)).toLocaleString('es-AR', {
					  style: 'currency',
					  currency: 'ARS'
              })}
            </p>
          </div>
        </div>
      )}
      <div className='flex justify-end mt-2 gap-4 mr-4'>
        <p className='font-robotoM text-itemTitle text-[0.9rem]'>Total</p>
        <p className='font-robotoM text-green-800 text-[0.9rem]'>
          {(total + 2000).toLocaleString('es-AR', {
					  style: 'currency',
					  currency: 'ARS'
          })}
        </p>
      </div>
    </section>
  )
}
