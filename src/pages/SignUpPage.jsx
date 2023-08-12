import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SignUpPage(){
    const nav = useNavigate()
    const [loading,setLoading] = useState(false)
    const [SignUpInputs,setSignUpInputs] = useState({name:"",image:"",email:"",cpf:"",telephone:"",password:""})

    async function signUp(e){
        e.preventDefault();
        try {
            setLoading(true)
            await axios.post(`${import.meta.env.VITE_API_URL}/sign-up`,SignUpInputs)
            console.log("Cadastro realizado com sucesso")
            nav('/login')
        } catch (err) {
            setLoading(false)
            alert(err.response.data)
        }
    }

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={signUp}>
                <input type="text" placeholder="nome" required disabled={loading} onChange={e=>setSignUpInputs(previous=>({...previous, ['name']:e.target.value}))} value={SignUpInputs.name}/>
                <input type="url" placeholder="foto de perfil" required disabled={loading} onChange={e=>setSignUpInputs(previous=>({...previous, ['image']:e.target.value}))} value={SignUpInputs.image}/>
                <input type="email" placeholder="email" required disabled={loading} onChange={e=>setSignUpInputs(previous=>({...previous, ['email']:e.target.value}))} value={SignUpInputs.email}/>
                <input type="text" placeholder="cpf" required disabled={loading} onChange={e=>setSignUpInputs(previous=>({...previous, ['cpf']:e.target.value}))} value={SignUpInputs.cpf.replace(/\D/,"")}/>
                <input type="text" placeholder="telefone" required disabled={loading} onChange={e=>setSignUpInputs(previous=>({...previous, ['telephone']:e.target.value}))} value={SignUpInputs.telephone.replace(/\D/,"")}/>
                <input type="password" placeholder="senha" required disabled={loading} onChange={e=>setSignUpInputs(previous=>({...previous, ['password']:e.target.value}))} value={SignUpInputs.password}/>
                <button disabled={loading}>{!loading?"Cadastrar":"Carregando"}</button>
            </form>
        </div>
    )
}