import {styled} from "styled-components"

export const NavBar = styled.div`
    position: fixed;
    z-index: 1;
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
        display: flex;
        background-color: white;
        border-style: none;
        font-size: 20px;
        text-align: center;
        line-height: 200%;
        gap:5px;
    }

    .profilePicture{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .logo{
        height: 100px;
    }
`;

export const SubMenu = styled.ul`
    display: ${props=>props.hide?"none":"block"};
`