import styled from "styled-components";
import Slider from "react-slick";

export const Main = styled.main`
    
`
export const Destaque = styled.section`
    padding-inline: 150px;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    @media(max-width: 1440px){
        padding-inline: 100px;
    }
    @media(max-width: 1024px){
      padding-inline: 30px;
    }
`
export const SectionTwo = styled.section`
    padding-inline: 150px;
    margin-top: 150px;
    padding-bottom: 30px;
    border-bottom: #fc4b08 solid;
    display: flex;
    justify-content: space-between;

    div{
        display: flex;
        align-items: start;
        gap: 20px;
        width: 200px;

        span{
            h5{ 
                font-size: 1.5rem;
                color: #01114c;
            }
            p{
                font-size: 1rem;
                color: #01114c;
            }
            
        }
        @media(max-width: 768px){
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }
    @media(max-width: 1440px){
    padding-inline: 100px;
  }
  @media(max-width: 1024px){
    padding-inline: 30px;
  }
@media(max-width: 768px){
    margin-top: 100px;
    flex-direction: column;
    gap: 50px;
    align-items: center;
  }
`
export const Clientes = styled.section`
    overflow: hidden;
    background-color: #01114c;
    height: 500px;
    margin-top: 100px;
    h2{
        margin-top: 50px;
        text-align: center;
        font-size: 2.5rem;
        color: #fc4b08;
    }
    img{
        width: 50px;
    }
`
export const StyledSlider = styled(Slider)`
.slick-slide {
    margin-top: 50px;
    display: flex;
    justify-content:center;
  }
  .slick-list {
    margin-right: -20px;
  }
    
`
export const Depoimentos = styled.section`
    padding: 20px;
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    box-shadow: 13px 13px 20px -6px rgba(0,0,0,0.51);
    background-color: #1A285D;
    height: 250px !important;
    width: 500px !important;

    p{
        color: #fff;
        font-size: 1rem;
    }
    h5{
        color: #fff;
        font-size: 1.5rem;
    }
    &:hover{
        cursor: pointer;
    }
`