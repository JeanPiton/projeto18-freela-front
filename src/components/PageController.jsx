import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ControllerBox, ControllerButton } from "../style/PageControllerStyle"

export default function PageController(props){
    const page = new URLSearchParams(location.search).get("page")
    const [actualPage,setActualPage] = useState((!isNaN(page)&&page>=0)?parseInt(page):0)
    const nav = useNavigate()

    function changePage(path){
        setActualPage(path)
        nav(`/?page=${path}`)
        window.location.reload(true)
    }

    return(
        <ControllerBox>
            <ControllerButton onClick={()=>changePage(actualPage-1)} disabled={!actualPage>0}>{"<"}</ControllerButton>
            <div>{actualPage}</div>
            <ControllerButton onClick={()=>changePage(actualPage+1)} disabled={props.qtd!=11}>{">"}</ControllerButton>
        </ControllerBox>
    )
}