import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Area1, Area2, Area3, ModelBody } from "../style/ModelPageStyle"

export default function ModelPage(){
    const { id } = useParams()
    const [model,setModel] = useState({})

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/model/${id}`)
        .then(resp=>setModel(resp.data))
        .catch(error=>console.log(error.message))
    },[])

    return(
        <ModelBody>
            <Area1 $color={model.active?"#7fbc14":"#c9c9c9"}>
                <img src={model.image}/>
                <p>{model.active?"Disponível":"Indisponível"}</p>
            </Area1>
            <Area2>
                <p>nome: {model.name}</p>
                <p>raça: {model.race}</p>
                <p>características:<br/>{model.description}</p>
            </Area2>
            <Area3>
                <p>dono: {model.ownerName}</p>
                <p>email: {model.email}</p>
                <p>tel.: {model.telephone}</p>
            </Area3>
        </ModelBody>
    )
}