import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { NavBar, SubMenu } from "../style/NavbarStyle";
import logo from "../assets/react.svg"

export default function Navbar(){
    const {user, setUser, userValidation} = useContext(UserContext)
    const location = useLocation()
    const [hidden,setHidden] = useState(true)
    const nav = useNavigate();

    if(location.pathname=="/cadastro"||location.pathname=="/login") return

    function Log(){
        if(user.name){
            localStorage.removeItem("user")
            setUser({})
            if(location.pathname=="/user") nav("/")
        }else{
            nav("/login")
        }
        setHidden(true)
    }
    function Profile(){
        setHidden(true)
        nav("/user")
    }

    return(
        <NavBar>
            <div>
                <img src={logo} onClick={()=>nav("/")}/>
                <ul>
                    <li><button onClick={()=>setHidden(!hidden)}>{user.name?user.name:"Visitante"}
                    {user.name?<img src={user.image} className="profilePicture"/>:""}
                    </button>
                    <SubMenu hide={hidden}>
                        <li><button onClick={()=>Profile()}>Perfil</button></li>
                        <li><button onClick={()=>Log()}>{user.name?"Logout":"Login"}</button></li>
                    </SubMenu></li>
                </ul>
            </div>
            <hr/>
        </NavBar>
    )
}