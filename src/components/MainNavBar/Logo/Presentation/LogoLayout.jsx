export const LogoLayout = ({ children }) => {
  return (
    <figure className='w-[100%] col-start-2 col-end-2 row-span-1 z-50 relative self-center md:pb-[10.4%] lg:pb-[8.4%] md:w-[92%] md:h-[6.7976%] md:col-span-1 lg:w-[80%]  md:z-50'>
      {children}
      <figcaption className='hidden'>This is a caption for the image.</figcaption>
    </figure>
  )
}
