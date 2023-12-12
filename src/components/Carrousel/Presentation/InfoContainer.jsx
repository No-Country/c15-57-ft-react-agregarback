

export default function InfoContainer(){
  return(
    <main>
      <div className='bg-gray-600 w-[100%] max-w-[1440px] sm:h-[273px] sm:bg-gray-200 mx-auto flex flex-col items-center sm:pt-12 p-0  justify-center sm:rounded-tr-[60px] sm:rounded-bl-[60px] py-8 gap-8'>
        <p className='sm:text-[30px] text-[20px] text-gray-200 sm:text-gray-800 w-[100%] sm:px-12 flex justify-center text-center'>¡Dona ahora, la supervivencia de los animales <br/>de Latinoamérica depende de nosotros! </p>
        <a className='w-36 h-20 sm:w-24 sm:h-10 bg-gray-400 rounded-[40px] flex items-center justify-center font-bold text-[24px] text-gray-800 sm:text-gray-500 ' href="#">Donar</a>
      </div>
      <div className='w-[100%] h-auto flex justify-center  mx-auto mt-8 mb-12 '>
        <p className='text-[20px] text-gray-900  sm:text-[28px] sm:font-[300] w-[100%] flex justify-center text-center '>Prevenir la extinción de los animales es un desafío global que involucra la <br/> 
        colaboración de gobiernos, organizaciones ambientales, comunidades locales y <br/>
         personas individuales. Aquí hay algunas acciones clave que se pueden tomar para <br/> 
         contribuir a la prevención de la extinción de animales:</p>
      </div>
      
    </main>
  )
};