
import useRouterChecker from "../../../../Hooks/useRouterChecker";

export const CartIcon = ({ icon }) => {

    const { animalRouterChecker } = useRouterChecker()
    const CurrentIcon = icon

    return <CurrentIcon className={`
                    ${animalRouterChecker
                      ? 'text-white'
                      : 'text-black'
        }
                    `}
    />
}
