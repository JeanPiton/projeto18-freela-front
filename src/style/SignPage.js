import { styled } from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >img{
        width: 200px;
        margin: 30px;
    }

    >form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        gap: 10px;

        >img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
`;