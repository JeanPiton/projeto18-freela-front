import { useNavigate } from "react-router-dom"

export default function ModelComp(props){
    const nav = useNavigate()

    function Goto(){
        nav(`/model/${props.id}`)
    }

    return(
        <div onClick={()=>Goto()}>
            <img src={props.image}/>
            <p>{props.name}</p>
        </div>
    )
}