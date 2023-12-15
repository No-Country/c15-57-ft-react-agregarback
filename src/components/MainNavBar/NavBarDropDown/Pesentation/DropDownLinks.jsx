import { Link } from "react-router-dom";
import useRouterChecker from "../../../../Hooks/useRouterChecker";
import { useContentContext } from "../../../../Store/contextStore/ContentContext";

export const DropDownLinks = ({ routes }) => {
    /* receive the routes to link "to:" */
    const { animalRouterChecker } = useRouterChecker()
    const { isOpen } = useContentContext()

    return (
        <>
            {
                routes.map((route) => {
                    return (
                        <li key={route.path}>
                            <Link
                                className={`
                                    " w-[7vw] text-left pl-[6px] bg-gray-200 hover:bg-gray-400 block whitespace-no-wrap"
                                    ${isOpen && "w-[100%]"}
                                    ${!animalRouterChecker || isOpen && "text-black"}
                                    ${animalRouterChecker || isOpen && "text-white"}
                                    ${animalRouterChecker && "text-white"}
                                    ${!animalRouterChecker || !isOpen && "text-white"}
                                `}
                             to={route.path}>
                                {route.name}
                            </Link>
                        </li>
                    )
                })
            }
        </>
    )
}
