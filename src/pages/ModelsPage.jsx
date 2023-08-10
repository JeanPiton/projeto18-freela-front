import axios from "axios"
import { useEffect, useState } from "react"
import ModelComp from "../components/ModelComp"
import { ModelsArea, ModelsBody } from "../style/ModelsPageStyle"

export default function ModelsPage(){
    const [models,setModels] = useState([])
    const page = new URLSearchParams(location.search).get("page")

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/models/?offset=${isNaN(page)?0:page*10}`)
        .then(resp=>setModels(resp.data))
        .catch(error=>console.log(error.message))
    },[])

    return (
        <ModelsBody>
            <ModelsArea>
                {
                    models.map((e,i)=>{
                        if(i==10) return
                        return <ModelComp image={e.image} name={e.name} id={e.id} active={e.active}/>})
                }
            </ModelsArea>
        </ModelsBody>
    )
}