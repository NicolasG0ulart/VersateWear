import React, {useState} from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Styles"
import SantaCruz from "../../../assets/santacruz.jpeg"
import Nike from "../../../assets/nike.png"
import AntiSocial from "../../../assets/antsocial.png"
import High from "../../../assets/high.PNG"



import { FaTruck } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";





import Card from "../../../Components/Card/Card";

export default function Main(){

    const [produtos] = useState([
        {marca: "Santa Cruz", valor: "49,99", image: SantaCruz },
        {marca: "Nike", valor: "49,99", image: Nike },
        {marca: "Anti Social", valor: "49,99", image: AntiSocial },
        {marca: "High", valor: "49,99", image: High },
        {marca: "Santa Cruz", valor: "49,99", image: SantaCruz },
        {marca: "Nike", valor: "49,99", image: Nike },
        {marca: "Anti Social", valor: "49,99", image: AntiSocial },
        {marca: "High", valor: "49,99", image: High },
    ])

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
  }

    return(
        <>
            <S.Main>
                <S.Destaque>
                    {produtos.map((item) => (
                        <Card marca={item.marca} valor={item.valor} img={item.image}/>
                    ))}
                </S.Destaque>
                
                <S.SectionTwo>
                    <div>
                        <FaTruck size={60} color="#01114c"/>
                        <span>
                            <h5>ENVIO IMEDIATO</h5>
                            <p>Envio imediato, rápido e seguro!</p>
                        </span>
                    </div>

                    <div>
                        <FaMoneyBillAlt size={60} color="#01114c"/>
                        <span>
                            <h5>MEIOS DE PAGAMENTO</h5>
                            <p>Aceitamos os principais meios de pagamento</p>
                        </span>
                    </div>

                    <div>
                        <MdSecurity size={60} color="#01114c"/>
                        <span>
                            <h5>SEGURANÇA</h5>
                            <p>Compra segura e protegida, do pedido à entrega!</p>
                        </span>
                    </div>
                </S.SectionTwo>

                <S.Clientes>
                    <h2>Avaliações</h2>
                    <S.StyledSlider {...settings}>
                        <S.Depoimentos>
                            <AiOutlineLike size={50} color="01114c" />
                            <p>"Amei minha camisa! Tecido confortável e entrega rápida. Vou comprar mais!"</p>
                            <h5>Lucas S.</h5>
                        </S.Depoimentos>

                        <S.Depoimentos>
                            <AiOutlineLike size={50} color="01114c" />
                            <p>""Qualidade incrível! Atendimento rápido e eficiente. Super satisfeita!""</p>
                            <h5>Ana L.</h5>
                        </S.Depoimentos>

                        <S.Depoimentos>
                            <AiOutlineLike size={50} color="01114c" />
                            <p>"Comprei várias camisas e todas chegaram rápido. Adoro as promoções!"</p>
                            <h5>Iohrrana G.</h5>
                        </S.Depoimentos>
                    </S.StyledSlider>
                </S.Clientes>
            </S.Main>
        </>
    )
}