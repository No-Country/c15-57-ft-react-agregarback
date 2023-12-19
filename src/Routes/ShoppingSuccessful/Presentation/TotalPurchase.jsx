import { dhlSmall } from '../../../assets/purchase'
import miniature from '../../../assets/product-miniature.jpg'
import { useContentContext } from '../../../Store/contextStore/ContentContext'
export default function TotalPurchase () {
  const { country, city, postal, street, streetNumber, sentShippingInfo } = useContentContext()
  return (
    <section className='flex flex-col w-[350px] lg:w-[622px]'>
      <h3 className='font-robotoM text-[0.8rem] text-itemTitle self-end mr-[2%]'>
        Precio
      </h3>
      <div className='flex h-[52px] my-2 border-[1px] border-slate-300 rounded-xl gap-3 box-border overflow-hidden'>
        <img src={miniature} alt='producto' className='w-[50px] h-[53px]' />
        <div>
          <h4 className='font-robotoL text-[0.8rem] text-itemTitle'>Producto</h4>
          <p className='font-robotoL text-[0.7rem] text-slate-500'>Taza cerámica con imagen de animal. 200ml.</p>
        </div>
        <div className='flex flex-col items-center lg:ml-[30.5%] lg:mr-[4%]'>
          <h4 className='font-robotoL text-[0.8rem] text-itemTitle'>
            Cantidad
          </h4>
          <p className='font-robotoL text-[0.7rem] text-slate-500'>1</p>
        </div>
        <div className='flex'>
          <p className='font-robotoL text-green-800 text-[0.9rem] self-center mr-2 lg:mr-1'>$2400</p>
        </div>
      </div>
      {sentShippingInfo &&
        <div className='h-[90px] flex border-[1px] border-slate-300 rounded-xl box-border overflow-hidden items-center max-w-[350px] lg:max-w-[622px]'>
          <img src={dhlSmall} alt='DHL logo' className='w-[50px] h-[90px] object-cover' />
          <div className='ml-5 flex items-center justify-between w-[77%] lg:w-[88%]'>
            <div>
              <h4 className='font-robotoL text-[0.8rem] text-itemTitle'>Envío</h4>
              <p className='font-robotoL text-[0.7rem] text-slate-500'>
                {`${street} ${streetNumber}`}
              </p>
              <p className='font-robotoL text-[0.7rem] text-slate-500'>
                {`${postal} - ${city}`}
              </p>
              <p className='font-robotoL text-[0.7rem] text-slate-500'>
                {country}
              </p>
            </div>
            <p className='font-robotoL text-green-800 text-[0.9rem] '>
              $2000
            </p>
          </div>
        </div>}
      <div className='flex justify-end mt-2 gap-4 mr-2'>
        <p className='font-robotoM text-itemTitle text-[0.9rem]'>Total</p>
        <p className='font-robotoM text-green-800 text-[0.9rem]'>$4400</p>
      </div>
    </section>
  )
}
