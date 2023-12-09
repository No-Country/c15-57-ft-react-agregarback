import { useState } from "react";
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../Store/contextStore/UserContext';

import { useContaintContext } from '../../../Store/contextStore/ContentContext';
import '../../../components/Carrousel/Presentation/style.css'


import logoblack from '../../../assets/Layout-logo.png'
import logowhite from '../../../assets/Logollogowhite.png'

const NavBarLayout = ({ children, checkHome, isInHome }) => {

    const { user, setUser, } = useUserContext();
    const { isOpen, openDropdown } = useContaintContext();
    const [isTrue, setIsTrue] = useState(false);

    const handleOpen = () => {
        setIsTrue(!isTrue);
    }

    return (<>

        <nav className="absolute flex justify-between items-center z-50 lg:hidden xl:hidden ">
            <div className="lg:hidden xl:hidden">
                <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={() => handleOpen()}>
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
        </nav>

        <div className="
      sm:grid sm:gap-4 sm:grid-cols-1 sm:grid-rows-3 sm:justify-items-center sm:h-10 sm:z-50 
      lg:grid lg:gap-4 lg:grid-cols-3 lg:grid-rows-1 lg:justify-items-center lg:h-10 lg:z-50
        "
        >

            <figure
                className='   
                sm:row-span-2 z-50
                md:row-span-2 z-50
                lg:self-center relative top-1/4	left-[5%] col-span-1 z-50
                xl:self-center relative top-1/4	left-[5%] col-span-1 z-50
           '
            >
                <img className="sticky" src={logoblack} alt="Description of the image" />
                <figcaption className='hidden'>This is a caption for the image.</figcaption>
            </figure>

            <div className={`z-50 `}>

                <div>
                    <ul className={
                        `${!isTrue
                            ? ('sm:hidden lg:grid col-span-2 h-[6.7vh] grid-rows-1 place-items-center absolute self-center left-[34%] top-[7%] z-50')
                            : 'sm:row-[span_2_/_span_3] sm:grid grid-cols-1  bg-indigo-500 lg:hidden'
                        }
                          sm:grid sm:grid-rows-6 sm:grid-cols-1 lg:col-span-2 h-[6.7vh] lg:grid lg:grid-cols-6 lg:grid-rows-1 lg:place-items-center lg:absolute lg:self-center left-[34%] top-[7%]  z-50`
                    }>
                        {children}
                        {
                            user
                                ? (
                                    <>
                                        <li className="
                                sm:grid sm:row-[span_1_/_span_6] sm:text-xl sm:pl-[5%] sm:z-50
                                lg: col-span-3 lg:text-xl lg:pl-[5%] lg:z-50 		
                                ">
                                            <div className='dropdown relative'>
                                                <button
                                                    className="py-2 px-4 rounded inline-flex items-center"
                                                    onClick={() => openDropdown()}
                                                    tabIndex={0}
                                                >
                                                    User
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                    /> </svg>
                                                </button>
                                                <div className="bg-blue-100">
                                                    <ul className={`${isOpen
                                                        ? 'block'
                                                        : 'hidden'
                                                        }
                                                        dropdown-menu absolute text-gray-700 pt-1`}>
                                                        <li>
                                                            <Link
                                                                className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
                                                                to="/MyVolunteers"> MyVolunteers </Link>
                                                        </li>
                                                        <li>
                                                            <Link className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
                                                                to="/MyPurchases"> MyPurchases </Link>
                                                        </li>
                                                        <hr />
                                                        <button
                                                            className='
                                                    rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
                                                            onClick={() => setUser(null)}> Close Session </button>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <section>
                                            <img src="" alt="Cart" />
                                        </section>
                                    </>

                                )
                                : (
                                    <>
                                        <li className='
                                text-[2.05vw] pl-[5%] text-black	
                                lg:text-white
                                '>
                                            <Link to="/Login"> Login</Link>
                                        </li>
                                        <li className='
                                text-[2.05vw] pl-[5%] text-black	
                                lg:text-white
                                '>
                                            <Link to="/Register"> Register </Link>
                                        </li>
                                    </>
                                )
                        }
                    </ul >
                </div>

            </div>
        </div >
    </>
    )

}

export default NavBarLayout