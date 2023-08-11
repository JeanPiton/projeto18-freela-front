import { styled } from "styled-components";

export const ItemBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 200px;
    height: 250px;
    background-color:${props=>props.$active?"#7fbc14":"#efefef"};
    border-radius: 15px;
    gap: 5px;


    img{
        max-width: 180px;
        max-height: 200px;
    }

    div{
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
`