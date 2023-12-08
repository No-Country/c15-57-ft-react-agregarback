import { Link } from 'react-router-dom';
import { useUserContext } from '../../../Store/contextStore/UserContext';

import { useContaintContext } from '../../../Store/contextStore/ContentContext';


import logo from '../../../assets/Layout-logo.png'

const NavBarLayout = ({ children }) => {

    const { user, setUser, } = useUserContext();
    const { isOpen, openDropdown } = useContaintContext();


    return (
        <div className='
        grid 
        gap-4 
        grid-cols-3 
        grid-rows-1
        justify-items-center
        '>
            <figure>
                <img className="sticky" src={logo} alt="Description of the image" />
                <figcaption className='hidden'>This is a caption for the image.</figcaption>
            </figure>

            <ul className="
        grid 
        gap-8 
        grid-cols-6
        grid-rows-1
        place-items-center	
        ">
                {children}
                {
                    user
                        ? (<>
                            <li className="dropdown">
                                <div className='dropdown inline-block relative'>
                                    <button
                                        className="font-semibold py-2 px-4 rounded inline-flex items-center"
                                        onClick={() => openDropdown()}
                                    >
                                        User
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                        /> </svg>
                                    </button>
                                    <div className="
                            bg-blue-100
                            
                            ">
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
                                                className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
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
                                <li>
                                    <Link to="/Login"> Login</Link>
                                </li>
                                <li>
                                    <Link to="/Register"> Register </Link>
                                </li>
                            </>
                        )
                }
            </ul>
        </div>
    )

}

export default NavBarLayout