import { useNavigate } from "react-router-dom"
import { ItemBody } from "../style/ModelCompStyle"

export default function ModelComp(props){
    const nav = useNavigate()

    function Goto(){
        nav(`/model/${props.id}`)
    }

    return(
        <ItemBody onClick={()=>Goto()} $active={props.active}>
            <img src={props.image}/>
            <div>
                <p>Nome: {props.name}</p>
            </div>
        </ItemBody>
    )
}