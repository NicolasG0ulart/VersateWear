import React from "react";
import * as S from "./Styles"
import NavBar from "../../Components/Header/NavBar/NavBar"
import camisa from "../../assets/nike.png"

export default function Cart(){

    return(
        <> 
            
            <S.Cart>
                <NavBar/>
                <h1>SEU CARRINHO</h1>
                <S.Content>
                    <S.Left>
                        <S.Item>
                            <section className="image">
                                <img src={camisa} alt="Imagem do produto"/>
                                <h4>Nome produto</h4>
                            </section>
                            <section className="infos">
                                <h4>R$ 10,00</h4>
                                <span><button>-</button>10<button>+</button></span>
                                <h4>R$ 100,00</h4>
                                <button>X</button>
                            </section>
                        </S.Item>
                    </S.Left>

                    <S.Right>

                    </S.Right>
                </S.Content>
            </S.Cart>
        </>
    )
}