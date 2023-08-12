import { styled } from "styled-components";

export const ModelBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    padding-top: 140px;
    gap: 20px;
`;

export const Area1 = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    gap:10px;

    img{
        width: 100%;
    }

    p{
        color:${props=>props.$color}
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
    gap:10px
`;
