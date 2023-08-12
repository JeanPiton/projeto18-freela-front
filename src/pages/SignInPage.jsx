import { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

export default function SignInPage(){
    const {setUser} = useContext(UserContext)
    const nav = useNavigate()
    const [loading,setLoading] = useState(false)
    const [SignInInputs,setSignInInputs] = useState({email:"",password:""})

    async function signIn(e){
        e.preventDefault();
        try {
            setLoading(true)
            await axios.post(`${import.meta.env.VITE_API_URL}/sign-in`,SignInInputs)
            .then(resp=>{
                localStorage.setItem("user",JSON.stringify({email:SignInInputs.email,token:resp.data.token}))
                setUser({email:SignInInputs.email,token:resp.data.token})
                nav('/')
            })
        } catch (err) {
            setLoading(false)
            alert(err.response.data)
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={signIn}>
                <input type="email" placeholder="email" required disabled={loading} onChange={e=>setSignInInputs(previous=>({...previous, ['email']:e.target.value}))} value={SignInInputs.email}/>
                <input type="password" placeholder="senha" required disabled={loading} onChange={e=>setSignInInputs(previous=>({...previous, ['password']:e.target.value}))} value={SignInInputs.password}/>
                <button disabled={loading}>{!loading?"Login":"Carregando"}</button>
            </form>
            <a href="/cadastro">Cadastrar</a>
        </div>
    )
}