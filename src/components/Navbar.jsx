import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useLocation } from "react-router-dom";

export default function Navbar(){
    const {user, setUser, userValidation} = useContext(UserContext)
    const location = useLocation()
    const [visible,setVisible] = useState(false)

    if(location.pathname=="/cadastro"||location.pathname=="/login") return

    function logOut(){
        localStorage.removeItem("user")
        setUser({})
    }
    function Profile(){
        userValidation("/user")
    }

    return(
        <nav>
            <img/>
            <ul>
                <li><button onClick={()=>setVisible(!visible)}>{user.name?user.name:"Visitante"}</button>
                <ul hidden={visible}>
                    <li><button onClick={()=>Profile()}>Perfil</button></li>
                    <li><button onClick={()=>logOut()}>logout</button></li>
                </ul></li>
            </ul>
        </nav>
    )
}