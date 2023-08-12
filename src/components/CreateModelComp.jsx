import axios from "axios";
import { useRef,useState } from "react";
import { Area1, Area2, Area3, ModelBody } from "../style/UsersModelCompStyle";

export function CreateModelComp(props){
    const config = props.config
    const races = props.races
    const [editMode,setEditMode] = useState(false)
    const [formAInput,setFormAInput] = useState({name:"",description:""})
    const [formBInput,setFormBInput] = useState({race:"",active:false})
    const [formCInput,setFormCInput] = useState({image:""})
    const formAref = useRef()
    const formBref = useRef()
    const formCref = useRef()

    function Cancel(){
        setEditMode(false)
        setFormAInput({name:"",description:""})
        setFormBInput({race:"",active:false})
        setFormCInput({image:""})
    }

    function handleSubmit(){
        if(formAref.current.reportValidity()&&formBref.current.reportValidity()&&formCref.current.reportValidity()){
            setEditMode(false);
            axios.post(`${import.meta.env.VITE_API_URL}/models/user`,{...formAInput,...formBInput,...formCInput},config)
            .then(window.location.reload())
            .catch(e=>console.log(e))
        }
    }

    return(
        <ModelBody>
            <Area1>
                <form hidden={!editMode} ref={formCref} onSubmit={e=>e.preventDefault()}>
                    <img src={formCInput.image}/>
                    <p>foto: <input type="url" required onChange={e=>setFormCInput(previous=>({...previous, ['image']:e.target.value}))} value={formCInput.image}/></p>
                </form>
            </Area1>
            <Area2>
                <form hidden={!editMode} ref={formAref} onSubmit={e=>e.preventDefault()}>
                    <p>nome: <input type="text" required onChange={e=>setFormAInput(previous=>({...previous, ['name']:e.target.value}))} value={formAInput.name}/></p>
                    <p>características: <textarea required onChange={e=>setFormAInput(previous=>({...previous, ['description']:e.target.value}))} value={formAInput.description}/></p>
                </form>
            </Area2>
            <Area3>
                <form hidden={!editMode} ref={formBref} onSubmit={e=>e.preventDefault()}>
                    <p>raça:
                    <input list="races" required onChange={e=>setFormBInput(previous=>({...previous, ['race']:e.target.value}))} value={formBInput.race}/>
                    <datalist id="races">
                        {races.map(e=><option value={e.name}/>)}
                    </datalist>
                    </p>
                    <p>ativo: <input type="checkbox" onChange={e=>setFormBInput(previous=>({...previous, ['active']:e.target.checked}))} checked={formBInput.active}/></p>
                </form>
                <div>
                    <button onClick={()=>Cancel()} hidden={!editMode}>Cancelar</button>
                    <button onClick={()=>editMode?handleSubmit():setEditMode(!editMode)}>{editMode?"Salvar":"Adicionar"}</button>
                </div>
            </Area3>
        </ModelBody>
    )
}