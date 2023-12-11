import {useContentContext} from "../../../../Store/contextStore/ContentContext.jsx";

export const LogoLayout = ({children}) => {
    const {onAnimalRouteChecker} = useContentContext()
    const onAnimalRoute = onAnimalRouteChecker();
    return (
        <figure className={`
             ${
            onAnimalRoute
                ? 'w-full h-full col-span-1 row-span-1 z-50 relative self-center pb-[.001] lg:top-1/4	lg:left-[5%] lg:col-span-1 lg:z-50'
                : 'w-full h-full col-span-2 row-span-1 z-50 relative left-[34%] top-[67%]  self-center pb-[.001] sm:top-[56%]  lg:left-[5%] lg:top-[38%] lg:col-span-1 2xl:top-[28%]'
        }
                `}
        >
            {children}
            <figcaption className='hidden'>This is a caption for the image.</figcaption>
        </figure>
    )
}