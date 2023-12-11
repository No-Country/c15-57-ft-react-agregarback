import {useContentContext} from "../../../../Store/contextStore/ContentContext.jsx";

export const HamburguerMenuIcon = () => {
    const {toggle} = useContentContext()
    return (

        <button className="navbar-burger flex items-center text-blue-600" onClick={() => toggle()}>

            <svg className="block h-[25%] w-[25%] fill-current md:h-[20%] md:w-[20%]" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>

        </button>

    );
}