import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUserContext } from "../../../Store/contextStore/UserContext";

export default function Register() {

  const {user, setUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/User");
  }, [user]);

  return (
    <div>


      <button onClick={() => setUser(true)}> Register </button>

    </div>
  )
}
