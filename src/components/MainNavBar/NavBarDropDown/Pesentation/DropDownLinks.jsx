import { Link } from "react-router-dom";
import useRouterChecker from "../../../../Hooks/useRouterChecker";

export const DropDownLinks = ({ routes }) => {
    /* receive the routes to link "to:" */
    const { animalRouterChecker } = useRouterChecker()

    return (
        <>
            {
                routes.map((route) => {
                    return (
                        <li key={route.path}>
                            <Link
                                className={`
                                    ${!animalRouterChecker ? "text-white" : "text-black"}
                                 w-[7vw] text-[.75rem] text-left pl-[6px] bg-gray-200 hover:bg-gray-400 block whitespace-no-wrap
                                `} to={route.path}>
                                {route.name}
                            </Link>
                        </li>
                    )
                })
            }
        </>
    )
}
