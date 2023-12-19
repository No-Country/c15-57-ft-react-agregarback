
import { useContentContext } from "../../../../Store/contextStore/ContentContext.jsx";
import { useUserContext } from "../../../../Store/contextStore/UserContext.jsx";
import useRouterChecker from "../../../../Hooks/useRouterChecker.jsx";

export const DropDownLayout = ({ children }) => {

    const { openDropdown, navBarDropDown, isOpen } = useContentContext();
    const { logControl } = useUserContext();
    const { animalRouterChecker } = useRouterChecker();

    return (

        <div className='dropdown relative '>
            <button
                className={`
                ${isOpen && "text-black text-[4vh] h-[16.6%]"}
                ${!animalRouterChecker || isOpen && "text-black w-[100%] text-[4vh] h-[16.6%]"}
                ${animalRouterChecker || isOpen && "text-white"}
                ${animalRouterChecker && "text-white"}
                ${!animalRouterChecker || !isOpen && "text-white"}
                ${animalRouterChecker
                        ? 'text-white rounded inline-flex items-center '
                        : 'text-black rounded inline-flex items-center '
                    } 
                md:text-[1.5vw] z-4500
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
            <div>
                <ul className={`
                    w-[7vw] md:w-[13vw] lg:w-[9vw] rounded-md bg-gray-200
                ${navBarDropDown
                        ? 'block  absolute bg-gray-200 text-black w-[8vw] pt-1 rounded-lg'
                        : 'hidden'
                    }`
                }>
                    {children}
                    <hr className="bg-black" />
                    <button
                        className='text-black w-[100%] text-[1rem] md:text-[1.5vh] text-left pl-[6px] hover:bg-gray-400 block whitespace-no-wrap'
                        onClick={() => logControl()}>
                        Close Session
                    </button>
                </ul>
            </div>
        </div>

    );
};
