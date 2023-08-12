import { styled } from "styled-components";

export const ModelBody = styled.div`
    display: flex;
    flex-direction: row;
    gap:10px;

    img{
        max-width: 200px;
    }
`;

export const Area1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;

    img{
        width: 100%;
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