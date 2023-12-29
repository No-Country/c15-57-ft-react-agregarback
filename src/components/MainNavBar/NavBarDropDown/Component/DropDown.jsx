import { DropDownContainer } from "../Pesentation/DropDown.jsx";


const routes = [{
    name: 'Mi Perfil',
    path: '/User'
}
]

export const Dropdown = ({ windowSize } = props) => {
    return (
        <>
            <DropDownContainer
                windowSize={windowSize}
                routes={routes} />
        </>
    )
};