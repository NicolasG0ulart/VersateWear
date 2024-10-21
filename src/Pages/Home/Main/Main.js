import React, { useState } from "react";
import * as S from "./Styles"


import Camisas from "../../../catalog.json"
import Card from "../../../Components/Card/Card";
import Footer from "../../../Components/Footer/Footer"

export default function Main() {

    const infosCamisas = Camisas.camisa
    const [filteredInfos, setFilteredInfos] = useState(infosCamisas)
    const [searchText, setSearchText] = useState("");

    const handleSearch = (event) => {
        const text = event.target.value.toLowerCase();
        setSearchText(text);

        const filtered = infosCamisas.filter((item) =>
            item.nomeCamisa.toLowerCase().includes(text)
        );

        setFilteredInfos(filtered);
    };

    return (
        <>
            <S.Main>
                <S.PesquisaMarca
                    type="text"
                    placeholder="Pesquise a marca"
                    value={searchText}
                    onChange={handleSearch}
                    id= "pesquisa"
                />
                <S.Destaque>
                    {filteredInfos.map((item) => (
                        <Card marca={item.nomeCamisa} valor={item.valor} img={item.linkUrl} />
                    ))}
                </S.Destaque>
            </S.Main>
            <Footer/>
        </>
    )
}