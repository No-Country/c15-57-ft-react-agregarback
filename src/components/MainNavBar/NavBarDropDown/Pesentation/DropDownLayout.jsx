import { useContentContext } from '../../../../Store/contextStore/ContentContext.jsx'
import { useUserContext } from '../../../../Store/contextStore/UserContext.jsx'
import useRouterChecker from '../../../../Hooks/useRouterChecker.jsx'

export const DropDownLayout = ({ children }) => {
    const { openDropdown, navBarDropDown, isOpen, closeDropDown } = useContentContext()
    const { logControl } = useUserContext()
    const { animalRouterChecker } = useRouterChecker()

    return (

        <div className='dropdown relative md:bottom-[0.3vh] lg:bottom-[0.1vh] 2xl:bottom-[0vh]'>
            <button
                className={`
                ${isOpen && "text-black w-[100%] text-[4vh] h-[20%]"}
                ${!animalRouterChecker || isOpen && "text-black w-[100%] text-[4vh] h-[20%]"}
                ${animalRouterChecker || isOpen && "text-white"}
                ${animalRouterChecker && "text-white"}
                ${!animalRouterChecker || !isOpen && "text-white"}
                ${animalRouterChecker
                        ? 'text-white rounded inline-flex items-center justify-center '
                        : 'text-black rounded inline-flex items-center  justify-center'
                    } 
                md:text-[1.5vw] z-4500 font-robotoM  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 
                        `}
                onClick={() => openDropdown()}
                tabIndex={0}
            >
                Usuario
                <svg className=" fill-current h-4 w-4 "
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </button>
            <div className="relative w-[100vw] bottom-[50vh] md:bottom-[0vh] md:w-[100%]">
                <ul
                    className={`
                 w-[100%]  md:w-[7vw] md:w-[13vw] lg:w-[9vw] rounded-md bg-slate-950 md:bg-gray-200 font-robotoM
                ${navBarDropDown
                            ? 'block absolute bg-slate-950 md:bg-gray-200 w-[100v%] h-[40vh]   text-black md:w-[8vw] md:h-[7vh] pt-1 rounded-lg'
                            : 'hidden'
                        }`
                    }
                    onClick={() => closeDropDown()} // Added keyboard event listener

                >
                    {children}
                    <hr className="bg-black" />
                    <button
                        className='text-white md:text-black w-[100vw] text-[2rem]  md:w-[100%] h-[50%] font-robotoM text-[1rem] md:text-[1.5vh] md:text-left pl-[6px] block whitespace-no-wrap hover:bg-zinc-700 hover:text-white  md:w-[9vw] rounded'
                        onClick={() => logControl()}
                    >
                        Close Session
                    </button>
                </ul>
            </div>
        </div>


    )
}
