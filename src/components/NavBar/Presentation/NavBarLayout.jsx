import { Link } from 'react-router-dom';
import { useUserContext } from '../../../Store/contextStore/UserContext';

import '../Presentation/style.css'
const NavBarLayout = ({ children }) => {

    const { user, setUser } = useUserContext();

    return (

        // comapny name

        <ul className="
        grid 
        gap-4 
        grid-cols-6 
        grid-rows-1
        justify-self-center	
        items-center
        ">

            {children}
            {
                user
                    ? (
                        <li className="dropdown">
                            <h1>User</h1>
                            <div className="dropdown-content">
                                <Link to="/MyVolunteers"> MyVolunteers </Link>
                                <Link to="/MyPurchases"> MyPurchases </Link>
                                <hr />
                                <button onClick={() => setUser(null)}> Close Session</button>
                            </div>
                        </li>)
                    : (
                        <li>
                            <Link to="/Login"> Login</Link>
                            <Link to="/Register"> Register </Link>
                        </li>)
            }
        </ul>
    )

}

export default NavBarLayout