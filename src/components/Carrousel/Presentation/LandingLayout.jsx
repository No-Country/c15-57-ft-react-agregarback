export default function LandingLayout ({ children }) {
  const toRender = [...children]
  const banner = toRender.splice(0, 1)

  return (
    <section className='w-[430px]  relative z-0 top-[-10px]'>
      {banner}
      <div className='w-[99vw]  flex items-center justify-center' />

      <div className='w-[99vw] h-auto justify-center flex flex-col '>{toRender} </div>
    </section>
  )
}
