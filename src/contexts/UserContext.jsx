import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext()

export default function UserProvider({children}){
    const lsUser = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(lsUser?lsUser:{})
    const nav = useNavigate()

    useEffect(()=>{
        if(user.name==undefined&&lsUser!=null){
            axios.post(`${import.meta.env.VITE_API_URL}/token`,{email:user.email,token:user.token})
            .then(resp=>{
                localStorage.setItem("user",JSON.stringify({...lsUser,name:resp.data.name}))
                setUser({...user,name:resp.data.name})
            })
            .catch(err=>console.log(err))
        }
    },[user])

    async function userValidation(path){
        axios.post(`${import.meta.env.VITE_API_URL}/token`,{email:user.email,token:user.token})
        .then(()=>nav(path))
        .catch(()=>nav("/login"))
    }

    return (
        <UserContext.Provider value={{user,setUser,userValidation}}>
            {children}
        </UserContext.Provider>
    )
}