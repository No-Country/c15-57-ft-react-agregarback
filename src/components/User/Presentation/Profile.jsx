import { CgProfile } from 'react-icons/cg'
import { IoMdExit } from 'react-icons/io'
import { useUserContext } from '../../../Store/contextStore/UserContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  const { logControl } = useUserContext()

  const closeLogin = () => {
    logControl()
    navigate('/')
  }

  return (
    <div className=' mt-6 min-w-[280px] max-w-[304px] min-h-[294px] flex flex-col items-center border-[1px] lg:mt-10 border-slate-400 rounded-md border-box'>
      <CgProfile className='text-gray-300 text-[120px] mt-2' />
      <h1 className='font-robotoM text-[1.4rem] text-gray-900'>
        Juan Perez
      </h1>
      <p className='font-roboto text-gray-500 text-[0.9rem]'>
        juanperez@gmail.com
      </p>
      <p className='font-robotoM text-green-600 text-[1.1rem] mt-2'>
        Editar datos
      </p>
      <div className='flex my-4 justify-center items-center gap-2 cursor-pointer' onClick={closeLogin}>
        <IoMdExit className='text-slate-300 text-[24px]' />
        <p className='text-gray-600 font-roboto text-[1.2rem]'>
          Cerrar sesión
        </p>
      </div>
    </div>
  )
}

export default Profile
