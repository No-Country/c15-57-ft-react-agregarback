export default function ButtomMovileList ( {action, isVisible ,showImg }){
  return(
    <div onClick={action} className='h-full pt-16 px-1 w-10 flex pjustify-center sitems-center '>
      <img className={`${isVisible && 'hidden'} h-12 `} src={showImg} alt={`${showImg}`} />
      </div>
  )
}