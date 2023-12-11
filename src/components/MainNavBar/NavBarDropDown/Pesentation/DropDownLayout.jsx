import {Link} from "react-router-dom";
import {useContentContext} from "../../../../Store/contextStore/ContentContext.jsx";

export const DropDownLayout = ({children}) => {
    /*refactor buttons for a single and reusable component */
    const { isOpen, openDropdown } = useContentContext();

    return (

            <div className='dropdown relative '>
                <button
                    className=" py-2 px-4 rounded inline-flex items-center "
                    onClick={() => openDropdown()}
                    tabIndex={0}
                >
                    User
                    <svg className=" fill-current h-4 w-4 "
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </button>
                <div className="bg-blue-100"> // point
                    <ul className={`${isOpen
                        ? 'block'
                        : 'hidden'
                    }
                         absolute text-gray-700 pt-1`
                    }>
                        {children}
                        <hr/>
                        <button
                            className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
                            onClick={() => setUser(null)}>
                            Close Session
                        </button>
                    </ul>
                </div>
            </div>

    );
};
