import logoWhite from "../../../../assets/Logollogowhite.png";
import logoBlack from "../../../../assets/Layout-logo.png";
import {useContentContext} from "../../../../Store/contextStore/ContentContext.jsx";

export const LogoElements = (props = {logoWhite, logoBlack} ) => {

    const {onAnimalRouteChecker} = useContentContext()
    const onAnimalRoute = onAnimalRouteChecker();

    return <img className='w-[76%] md:w-[60%] lg:w-[100%]'
             src={onAnimalRoute ? logoWhite : logoBlack}
             alt="Description of the image"/>
}