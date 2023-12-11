import {DropDownLayout} from "./DropDownLayout.jsx";
import {DropDownLinks} from "./DropDownLinks.jsx";

const routes = [{
    name: "My Volunteers",
    path:"/MyVolunteers"
},{
    name: "My Purchases",
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