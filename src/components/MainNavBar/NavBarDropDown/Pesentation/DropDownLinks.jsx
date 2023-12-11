import {Link} from "react-router-dom";
import {useContentContext} from "../../../../Store/contextStore/ContentContext.jsx";

export const DropDownLinks = ({routes}) => {
    /* receive the routes to link "to:" */
    const {onAnimalRouteChecker} = useContentContext()
    const onAnimalRoute = onAnimalRouteChecker();

    return (
        <>
            {
                routes.map((route) => {
                    return (
                        <li key={route.path}>
                            <Link
                                className={`
                                    ${onAnimalRoute ? "text-white" : "text-black"}
                                    sm:text-[117%] rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap
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
