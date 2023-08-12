import axios from "axios"
import { useEffect, useState } from "react"
import ModelComp from "../components/ModelComp"
import { ControllerArea, ModelsArea, ModelsBody, SearchDiv } from "../style/ModelsPageStyle"
import PageController from "../components/PageController"

export default function ModelsPage(){
    const [models,setModels] = useState([])
    const [search,setSearch] = useState({search:"",status:"",race:""})
    const [update,setUpdate] = useState(false)
    const [races,setRaces] = useState([])
    const page = new URLSearchParams(location.search).get("page")

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/models/races`)
        .then(resp=>setRaces(resp.data))
        .catch(error=>console.log(error.message))
        axios.get(`${import.meta.env.VITE_API_URL}/models/?offset=${isNaN(page)?0:page*10}&search=${search.search}&status=${search.status}&race=${search.race}`)
        .then(resp=>setModels(resp.data))
        .catch(error=>console.log(error.message))
    },[update])

    function Search(e){
        e.preventDefault()
        setUpdate(!update)
    }

    return (
        <ModelsBody>
            <SearchDiv>
                <form onSubmit={e=>Search(e)}>
                    <input type="text" onChange={e=>setSearch(previous=>({...previous, ['search']:e.target.value}))} value={search.search}/> 
                    <button>pesquisar</button>
                    <select onChange={e=>setSearch(previous=>({...previous, ['status']:e.target.value}))} value={search.status}>
                        <option value="">Status</option>
                        <option value={true}>Disponiveis</option>
                        <option value={false}>Indisponiveis</option>
                    </select>
                    <select onChange={e=>setSearch(previous=>({...previous, ['race']:e.target.value}))} value={search.race}>
                        <option value="">Raças</option>
                        {races.map(e=><option value={e.id} key={e.id}>{e.name}</option>)}
                    </select>
                </form>
            </SearchDiv>
            <ModelsArea>
                {
                    models.map((e,i)=>{
                        if(i==10) return
                        return <ModelComp key={i*100} image={e.image} name={e.name} id={e.id} active={e.active}/>
                    })
                }
            </ModelsArea>
            <ControllerArea>
                <PageController qtd={models.length}/>
            </ControllerArea>
        </ModelsBody>
    )
}