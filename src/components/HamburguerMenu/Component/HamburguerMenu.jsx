import { useState } from "react";

const HamburguerMenu = () => {
    const [isTrue, setIsTrue] = useState(false);

    const handleOpen = () => {
        setIsTrue(!isTrue);
    }

    return (
        <div >

            <nav className="relativepx-4 py-4 flex justify-between items-center bg-white">
                <div className="lg:hidden xl:hidden">
                    <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={() => handleOpen()}>
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>

                <ul className={`
       ${isTrue
                        ? ('block')
                        : ('hidden')
                    }
        absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6
        `}>


                </ul>
            </nav>
            <div className={`
        ${isTrue
                    ? ('block')
                    : ('hidden')
                }
         navbar-menu relative z-50 
        `}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">

                        <button className="navbar-close" onClick={() => handleOpen()}>
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default HamburguerMenu;