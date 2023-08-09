import axios from "axios"
import { useEffect, useState } from "react"
import ModelComp from "../components/ModelComp"
import { useParams } from "react-router-dom"

export default function ModelsPage(){
    const [models,setModels] = useState([])
    const {page} = useParams()

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/models/?offset=${isNaN(page)?0:page*10}`)
        .then(resp=>setModels(resp.data))
        .catch(error=>console.log(error.message))
    },[])

    return (
        <>
            {
                models.map(e=><ModelComp image={e.image} name={e.name} id={e.id}/>)
            }
        </>
    )
}