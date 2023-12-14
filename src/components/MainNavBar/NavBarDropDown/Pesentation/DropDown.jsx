import {DropDownLayout} from "./DropDownLayout.jsx";
import {DropDownLinks} from "./DropDownLinks.jsx";

const routes = [{
    name: "Mis Donaciones",
    path:"/MyVolunteers"
},{
    name: "Mis Compras",
    path: "/MyPurchases"
}
]
export const DropDownContainer = () => {
    return (
        <DropDownLayout>
            <DropDownLinks routes={routes} />
        </DropDownLayout>
    )
};