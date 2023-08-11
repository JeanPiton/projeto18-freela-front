import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { UserBody, Area1, Area2, Area3 } from "../style/UserPageStyle"

export default function UserPage(){
    const config =  {headers:{Authorization:`Bearer ${JSON.parse(localStorage.getItem('user')).token}`}}
    const [editMode,setEditMode] = useState(false)
    const [formAInput,setFormAInput] = useState({name:"",email:""})
    const [formBInput,setFormBInput] = useState({cpf:"",telephone:""})
    const [userInfo, setUserInfo] = useState({name:"",email:"",cpf:"",telephone:""})
    const formAref = useRef();
    const formBref = useRef();

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/user/info`,config)
        .then(r=>{
            setUserInfo(r.data)
            setFormAInput({name:r.data.name,email:r.data.email})
            setFormBInput({cpf:r.data.cpf,telephone:r.data.telephone})
            console.log(r)
        })
        .catch(err=>console.log(err.message))
    },[])

    function handleSubmit(){
        if(formAref.current.reportValidity()&&formBref.current.reportValidity()){
            setEditMode(false);
            console.log({...formAInput,...formBInput})
            axios.patch(`${import.meta.env.VITE_API_URL}/user/info`,{...formAInput,...formBInput},config)
            .then(window.location.reload())
            .catch(e=>console.log(e))
        }
    }

    return(
        <UserBody>{/*
            <Area1 $color={model.active?"#7fbc14":"#c9c9c9"}>
                <img src={model.image}/>
                <p>{model.active?"Disponível":"Indisponível"}</p>
            </Area1>*/}
            <Area2>
                <p hidden={editMode}>nome: {userInfo.name}</p>
                <p hidden={editMode}>email: {userInfo.email}</p>
                <form hidden={!editMode} ref={formAref}>
                    <p>nome: <input type="text" required onChange={e=>setFormAInput(previous=>({...previous, ['name']:e.target.value}))} value={formAInput.name}/></p>
                    <p>email: <input type="email" required onChange={e=>setFormAInput(previous=>({...previous, ['email']:e.target.value}))} value={formAInput.email}/></p>
                </form>
            </Area2>
            <Area3>
                <p hidden={editMode}>cpf: {userInfo.cpf}</p>
                <p hidden={editMode}>tel.: {userInfo.telephone}</p>
                <form hidden={!editMode} ref={formBref}>
                    <p>cpf: <input type="text" required onChange={e=>setFormBInput(previous=>({...previous, ['cpf']:e.target.value}))} value={formBInput.cpf.replace(/\D/,"")}/></p>
                    <p>tel.: <input type="text" required onChange={e=>setFormBInput(previous=>({...previous, ['telephone']:e.target.value}))} value={formBInput.telephone.replace(/\D/,"")}/></p>
                </form>
                <div className="buttonArea">
                    <button onClick={()=>setEditMode(false)} hidden={!editMode}>Cancelar</button>
                    <button onClick={()=>editMode?handleSubmit():setEditMode(!editMode)}>{editMode?"Salvar":"Editar"}</button>
                </div>
            </Area3>
        </UserBody>
    )
}