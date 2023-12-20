export default function ButtomMovileList ( {action, isVisible ,showImg }){
  return(
    <div onClick={action} className='h-full  pt-16 px-1 w-10 flex justify-center  '>
      <img className={`${isVisible && 'hidden'} w-[14px] h-[27px]  object-cover`} src={showImg} alt={`${showImg}`} />
    </div>
  )
}