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
    gap: 30px;
    margin-top: 50px;
    width: 100%;
    align-items: flex-start;
    @media(max-width: 900px) {
        justify-content: space-between;
    }
    @media(max-width: 985px) {
        justify-content: center;
    }
`;
export const SelectMarca = styled.button`
    position: absolute;
    display: none;
    @media(max-width: 985px){
        margin-top: -32px;
        display: flex;
    }
`

export const Filtros = styled.div`
    border-left: solid #fc4b08;
    border-top: solid #fc4b08;
    padding: 10px 15px 10px 15px;
    border-radius: 3px;
    width: 20%;
    display: flex;
    flex-direction: column;
    @media (max-width: 1024px) {
        margin-left: 30px;
    }
    @media(max-width: 985px) {
        display: ${props => props.display ? 'flex' : 'none'};
        position: absolute;
        width: 65%;

    }

    div {
        display: flex;
        gap: 15px;
        @media(max-width: 985px) {
            position: relative;
            width: 170px;
        }    
        @media(max-width: 985px){
            display: flex;
            justify-content: center;
            gap: 50px;
            width: 100%;

            input{
                z-index: 1000;
                background-color: #fff;
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
    border: solid #fc4b08;
    background-color: #fff;
    width: 80%;
    border-radius: 10px;
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
