import axios from "axios"
import { useRef, useState } from "react"
import { Area1, Area2, Area3, ModelBody } from "../style/UsersModelCompStyle"

export default function UsersModelComp(props){
    const config =  {headers:{Authorization:`Bearer ${JSON.parse(localStorage.getItem('user')).token}`}}
    const [modelProps,setModelProps] = useState(props.catInfo)
    const [races,setRaces] = useState(props.races)
    const [editMode,setEditMode] = useState(false)
    const [formAInput,setFormAInput] = useState({name:modelProps.name,description:modelProps.description})
    const [formBInput,setFormBInput] = useState({race:races.filter(e=>e.id==modelProps.racesId)[0].name,active:modelProps.active})
    const [formCInput,setFormCInput] = useState({image:modelProps.image})
    const formAref = useRef()
    const formBref = useRef()
    const formCref = useRef()

    function Cancel(){
        setEditMode(false)
        setFormAInput({name:modelProps.name,description:modelProps.description})
        setFormBInput({race:races.filter(e=>e.id==modelProps.racesId)[0].name,active:modelProps.active})
        setFormCInput({image:modelProps.image})
    }

    function handleSubmit(){
        if(formAref.current.reportValidity()&&formBref.current.reportValidity()&&formCref.current.reportValidity()){
            setEditMode(false);
            axios.patch(`${import.meta.env.VITE_API_URL}/models/user/${modelProps.id}`,{...formAInput,...formBInput,...formCInput},config)
            .then(()=>{window.location.reload()})
            .catch(e=>console.log(e))
        }
    }

    return(
        <>
            <ModelBody>
                <Area1>
                    <img hidden={editMode} src={modelProps.image}/>
                    <form hidden={!editMode} ref={formCref} onSubmit={e=>e.preventDefault()}>
                        <img src={formCInput.image}/>
                        <p>foto: <input type="url" required onChange={e=>setFormCInput(previous=>({...previous, ['image']:e.target.value}))} value={formCInput.image}/></p>
                    </form>
                </Area1>
                <Area2>
                    <p hidden={editMode}>nome:{modelProps.name}</p>
                    <p hidden={editMode}>características:<br/>{modelProps.description}</p>
                    <form hidden={!editMode} ref={formAref} onSubmit={e=>e.preventDefault()}>
                        <p>nome: <input type="text" required onChange={e=>setFormAInput(previous=>({...previous, ['name']:e.target.value}))} value={formAInput.name}/></p>
                        <p>características: <textarea required onChange={e=>setFormAInput(previous=>({...previous, ['description']:e.target.value}))} value={formAInput.description}/></p>
                    </form>
                </Area2>
                <Area3>
                    <p hidden={editMode}>raça:{races.filter(e=>e.id==modelProps.racesId)[0].name}</p>
                    <p hidden={editMode}>ativo:<input type="checkbox" readOnly checked={modelProps.active}/></p>
                    <form hidden={!editMode} ref={formBref} onSubmit={e=>e.preventDefault()}>
                        <p>raça:
                            <input list="races" required onChange={e=>setFormBInput(previous=>({...previous, ['race']:e.target.value}))} value={formBInput.race}/>
                            <datalist id="races">
                                {races.map((e,i)=><option key={i*10000} value={e.name}/>)}
                            </datalist>
                        </p>
                        <p>ativo: <input type="checkbox" onChange={e=>setFormBInput(previous=>({...previous, ['active']:e.target.checked}))} checked={formBInput.active}/></p>
                    </form>
                    <div>
                        <button onClick={()=>Cancel()} hidden={!editMode}>Cancelar</button>
                        <button onClick={()=>editMode?handleSubmit():setEditMode(!editMode)}>{editMode?"Salvar":"Editar"}</button>
                    </div>
                </Area3>
            </ModelBody>
            <hr/>
        </>
    )
}