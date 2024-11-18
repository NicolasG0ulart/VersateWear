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
    justify-content: space-between;
    margin-top: 50px;
    width: 100%;
    align-items: flex-start;
    @media(max-width: 1050px) {
        justify-content: center;
        flex-direction: column;
    }
`;
export const SelectMarca = styled.div`
    display: none;
    justify-content: center;
    width: 100%;
    height: auto;
    button{
        width: 120px;
        color: #f24200;
        height: 45px;
        border-style: none;
        border-radius: 3px;
        background-color: #01114c;
        transition: 0.4s;
        font-size: 1.3rem;
        &:hover {
            color: #fa4400;
            cursor: pointer;
            background-color: #000c3a;
            }
    }
    @media(max-width: 1050px){
        display: flex;
    }
`

export const Filtros = styled.div`
    border-left: solid #fc4b08;
    border-top: solid #fc4b08;
    padding: 10px 15px 10px 15px;
    border-radius: 3px;
    width: 13%;
    display: flex;
    flex-direction: column;
    @media(max-width: 1450px){
      width: 200px;
    }
    @media(max-width: 1050px) {
        border: solid blue 1px;
        display: ${props => props.display ? 'flex' : 'none'};
        width: 100%;
        padding: 150px;
        border: 0;
        padding: 0;
        align-items: center;
        section{
            margin-top: 1px;
            width: 400px;
            border: 2px solid #01114c;
            border-radius: 5px;
            background-color: #fff;
            padding: 10px;
            @media(max-width: 600px){
                width: 70%;
            }
        }

    }
    @media(max-width: 900px){
        width: 100%;
    }

    div {
        display: flex;
        gap: 15px;
        @media(max-width: 1050px){
            position: relative;
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
    border-radius: 10px;
    max-width: 80%;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
    min-height: 300px;
    align-items: center;

    @media(max-width: 1440px) {
        gap: 20px;
    }
    @media(max-width: 1050px) {
        margin-top: 30px;
        max-width: 100%;
        justify-content: center;
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
