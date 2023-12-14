import { MdOutlineArrowBackIos } from 'react-icons/md'
export default function SubtitleInfoStore ({ title }) {
  return (
    <div className='w-full h-[51px] grid grid-cols-3 grid-rows-1 bg-shoppingTitle items-center justify-between font-Roboto md:w-[95%] md:mt-[29px] md:rounded-t '>
      <MdOutlineArrowBackIos className='col-span-1 ml-[10px] md:ml-[30px]  ' />
      <h2 className='text-xl col-span-2 md:text-center md:col-span-1'>{title}</h2>
    </div>
  )
}
