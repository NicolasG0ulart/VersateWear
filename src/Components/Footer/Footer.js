import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png"

const FooterSection = styled.div`
    margin-top: 100px;
    height: 80px;
    width: 100%;
    background-color: #01114c;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        height: 40px;
        width: 300px;
    }
`
export default function Footer(){

    return(

        <FooterSection>
            <img src={Logo} alt="Logo do site"/>
        </FooterSection>
    )
}