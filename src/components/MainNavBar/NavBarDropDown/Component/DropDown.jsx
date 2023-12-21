import { DropDownContainer } from "../Pesentation/DropDown.jsx";


const routes = [{
    name: 'Mi Perfil',
    path: '/User'
}
]

export const Dropdown = () => {
    return (
        <>
            <DropDownContainer routes={routes} />
        </>
    )
};