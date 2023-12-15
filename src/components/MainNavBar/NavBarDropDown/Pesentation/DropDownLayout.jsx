
import { useContentContext } from "../../../../Store/contextStore/ContentContext.jsx";
import { useUserContext } from "../../../../Store/contextStore/UserContext.jsx";
import useRouterChecker from "../../../../Hooks/useRouterChecker.jsx";

export const DropDownLayout = ({ children }) => {

    const { openDropdown, NavBarDropDown, isOpen } = useContentContext();
    const { logControl } = useUserContext();
    const { animalRouterChecker } = useRouterChecker();

    return (

        <div className='dropdown relative '>
            <button
                className={`
                ${isOpen && "w-[100%]"}
                ${!animalRouterChecker || isOpen && "text-black"}
                ${animalRouterChecker || isOpen && "text-white"}
                ${animalRouterChecker && "text-white"}
                ${!animalRouterChecker || !isOpen && "text-white"}
                ${
                    animalRouterChecker 
                    ? 'text-white rounded inline-flex items-center ' 
                    : 'text-black rounded inline-flex items-center '
                } 

                md:text-[1.5vw]

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
            <div className="bg-blue-100">
                <ul className={`${
                    NavBarDropDown
                    ? 'block  absolute text-gray-700 pt-1 rounded-lg '
                    : 'hidden'
                    }

                   'w-[7vw] rounded-md bg-gray-200'  `
                }>
                    {children}
                    <hr />
                    <button
                        className='w-[7vw]  text-[.75rem] text-left pl-[6px] bg-gray-200 hover:bg-gray-400 block whitespace-no-wrap'
                        onClick={() => logControl()}>
                        Close Session
                    </button>
                </ul>
            </div>
        </div>

    );
};
