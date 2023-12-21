import { Link } from 'react-router-dom'

import useRouterChecker from '../../../../Hooks/useRouterChecker.jsx'

import logoWhite from '../../../../assets/Logollogowhite.png'
import logoBlack from '../../../../assets/Layout-logo.png'

export const LogoElements = (props = { logoWhite, logoBlack }) => {
  const { animalRouterChecker } = useRouterChecker()

  return (
    <Link to='/'>
      <img
        className='w-[100%] md:w-[100%] lg:w-[100%]'
        src={animalRouterChecker ? logoWhite : logoBlack}
        alt='Description of the image'
      />
    </Link>
  )
}
