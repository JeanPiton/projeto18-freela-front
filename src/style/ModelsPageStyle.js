import { styled } from "styled-components";

export const ModelsBody = styled.div`
    position:relative;
    min-height: 100vh;
    padding: 0 30px;
`;

export const SearchDiv = styled.div`
    padding: 20px;
    padding-top: 140px;
`;

export const ModelsArea = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    grid-gap:30px;
    align-items: center;
    justify-items: center;
    padding-bottom: 60px;
`;

export const ControllerArea = styled.div`
    position: absolute;
    display: flex;
    bottom: 0px;
    left: 0;
    right: 0;
    padding: 20px;
`;