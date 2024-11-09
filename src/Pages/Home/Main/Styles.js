import styled from "styled-components";

export const Main = styled.main`
    padding-inline: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: 1440px){
        padding-inline: 50px;
    }
    @media(max-width: 1024px){
      padding-inline: 10px;
    }
`
export const Content = styled.section`
    display: flex;
    margin-top: 200px;
    width: 100%;
    align-items: flex-start;
    @media(max-width: 900px) {
        justify-content: space-between;
    }
    @media(max-width: 620px) {
        justify-content: center;
    }
`;
export const SelectMarca = styled.button`
    position: absolute;
    display: none;
    @media(max-width: 620px){
        display: flex;
    }
`

export const Filtros = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    @media (max-width: 1024px) {
        padding-inline: 30px;
    }
    @media(max-width: 620px) {
        display: ${props => props.display ? 'flex' : 'none'};
        margin-top: 30px;
        position: absolute;
        width: 65%;

    }


    div {
        display: flex;
        gap: 15px;
        @media(max-width: 900px) {
            position: relative;
            background-color: ghostwhite;
            width: 170px;
        }    
        @media(max-width: 620px){
            display: flex;
            justify-content: center;
            gap: 50px;
            width: 100%;

            input{
                position: absolute;
                left: 10px;
                top: 4px;
            }
        }
        label {
            font-size: 1.2rem;
            color: #020c32;
        }
    }
`;

export const Destaque = styled.section`
    width: 80%;
    border-radius: 10px;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 300px;
    align-items: center;

    @media(max-width: 1440px) {
        gap: 30px;
    }
    @media(max-width: 900px) {
        width: 65%;
    }
`;
export const LoadingSpinner = styled.div`
    border: 6px solid #01114c;
    border-top: 6px solid #f24200;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin-top: 50px;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
