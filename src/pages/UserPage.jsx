import axios from "axios"
import { useContext, useEffect, useRef, useState } from "react"
import { UserBody, Area1, Area2, Area3, PageBody, CatsBody } from "../style/UserPageStyle"
import UsersModelComp from "../components/UsersModelComp"
import { CreateModelComp } from "../components/CreateModelComp"
import { UserContext } from "../contexts/UserContext"

export default function UserPage(){
    const {userValidation} = useContext(UserContext)
    const config = JSON.parse(localStorage.getItem('user'))!=undefined?{headers:{Authorization:`Bearer ${JSON.parse(localStorage.getItem('user')).token}`}}:""
    const [editMode,setEditMode] = useState(false)
    const [formAInput,setFormAInput] = useState({name:"",email:""})
    const [formBInput,setFormBInput] = useState({cpf:"",telephone:""})
    const [formCInput,setFormCInput] = useState({image:""})
    const [userInfo, setUserInfo] = useState({name:"",email:"",cpf:"",telephone:"",image:""})
    const [models,setModels] = useState([])
    const [races,setRaces] = useState([])
    const formAref = useRef();
    const formBref = useRef();
    const formCref = useRef();

    useEffect(()=>{
        userValidation()
        axios.get(`${import.meta.env.VITE_API_URL}/user/info`,config)
        .then(r=>{
            setUserInfo(r.data)
            setFormAInput({name:r.data.name,email:r.data.email})
            setFormBInput({cpf:r.data.cpf,telephone:r.data.telephone})
            setFormCInput({image:r.data.image})
        })
        .catch(err=>console.log(err.message))
        axios.get(`${import.meta.env.VITE_API_URL}/models/user`,config)
        .then(r=>{
            setModels(r.data.models)
            setRaces(r.data.races)
        })
    },[])

    function handleSubmit(){
        if(formAref.current.reportValidity()&&formBref.current.reportValidity()&&formCref.current.reportValidity()){
            setEditMode(false);
            axios.patch(`${import.meta.env.VITE_API_URL}/user/info`,{...formAInput,...formBInput,...formCInput},config)
            .then(window.location.reload())
            .catch(e=>console.log(e))
        }
    }

    function Cancel(){
        setEditMode(false)
        setFormAInput({name:userInfo.name,email:userInfo.email})
        setFormBInput({cpf:userInfo.cpf,telephone:userInfo.telephone})
        setFormCInput({image:userInfo.image})
    }

    return(
        <PageBody>
            <UserBody>{
                <Area1>
                    <img src={userInfo.image} hidden={editMode} className="userImage"/>
                    <form hidden={!editMode} ref={formCref} onSubmit={e=>e.preventDefault()}>
                        <img src={formCInput.image} className="userImage"/>
                        <p>foto de perfil: <input type="url" required onChange={e=>setFormCInput(previous=>({...previous, ['image']:e.target.value}))} value={formCInput.image}/></p>
                    </form>
                </Area1>}
                <Area2>
                    <p hidden={editMode}>nome: {userInfo.name}</p>
                    <p hidden={editMode}>email: {userInfo.email}</p>
                    <form hidden={!editMode} ref={formAref} onSubmit={e=>e.preventDefault()}>
                        <p>nome: <input type="text" required onChange={e=>setFormAInput(previous=>({...previous, ['name']:e.target.value}))} value={formAInput.name}/></p>
                        <p>email: <input type="email" required onChange={e=>setFormAInput(previous=>({...previous, ['email']:e.target.value}))} value={formAInput.email}/></p>
                    </form>
                </Area2>
                <Area3>
                    <p hidden={editMode}>cpf: {userInfo.cpf}</p>
                    <p hidden={editMode}>tel.: {userInfo.telephone}</p>
                    <form hidden={!editMode} ref={formBref} onSubmit={e=>e.preventDefault()}>
                        <p>cpf: <input type="text" required onChange={e=>setFormBInput(previous=>({...previous, ['cpf']:e.target.value}))} value={formBInput.cpf.replace(/\D/,"")}/></p>
                        <p>tel.: <input type="text" required onChange={e=>setFormBInput(previous=>({...previous, ['telephone']:e.target.value}))} value={formBInput.telephone.replace(/\D/,"")}/></p>
                    </form>
                    <div className="buttonArea">
                        <button onClick={()=>Cancel()} hidden={!editMode}>Cancelar</button>
                        <button onClick={()=>editMode?handleSubmit():setEditMode(!editMode)}>{editMode?"Salvar":"Editar"}</button>
                    </div>
                </Area3>
            </UserBody>
            <hr/>
            <CatsBody>
                {models.map(e=>{
                    return <UsersModelComp catInfo={e} races={races}/>
                })}
            </CatsBody>
            <CreateModelComp races={races} config={config}/>
        </PageBody>
    )
}