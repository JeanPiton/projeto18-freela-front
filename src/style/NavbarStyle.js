import {styled} from "styled-components"

export const NavBar = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: white;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
    }

    hr{
        width: 100%;
        margin: 0;
    }

    button{
        background-color: transparent;
        border-style: none;
        font-size: 20px;
    }
`;

export const SubMenu = styled.ul`
    display: ${props=>props.hide?"none":"block"};
`