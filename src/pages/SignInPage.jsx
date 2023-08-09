import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SignInPage(){
    const nav = useNavigate()
    const [loading,setLoading] = useState(false)
    const [SignInInputs,setSignInInputs] = useState({email:"",password:""})

    async function signIn(e){
        e.preventDefault();
        try {
            setLoading(true)
            await axios.post(`${import.meta.env.VITE_API_URL}/sign-in`,SignInInputs)
            nav('/')
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
        </div>
    )
}