import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
export default function SubtitleInfoStore ({ link, title }) {
  return (
    <div className='w-full h-[51px] grid grid-cols-5 grid-rows-1 bg-shoppingTitle items-center justify-between font-Roboto md:w-[95%] md:mt-[29px] md:rounded-t '>
      <Link to={link}>
        <MdOutlineArrowBackIos className='col-span-1 ml-[10px] md:ml-[30px]' />
      </Link>
      <h2 className='text-xl col-span-3 text-center'>{title}</h2>
    </div>
  )
}
