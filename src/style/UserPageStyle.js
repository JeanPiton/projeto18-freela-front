import { styled } from "styled-components";

export const PageBody = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 54px;
    
    hr{
        width: 100%;
    }
`;

export const UserBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    gap: 20px;
`;

export const Area1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;

    img{
        width: 100%;
    }

    .userImage{
        border-radius: 50%;
        max-width: 100px;
    }
`;

export const Area2 = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    gap:10px
`;

export const Area3 = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    gap:10px;

    div{
        display: flex;
        justify-content: flex-end;
        gap:10px;
    }
`;

export const CatsBody = styled.div`
`;