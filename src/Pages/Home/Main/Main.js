import React, { useState } from "react";
import * as S from "./Styles";

import Camisas from "../../../catalog.json";
import Card from "../../../Components/Card/Card";
import Footer from "../../../Components/Footer/Footer";

export default function Main() {
  const infosCamisas = Camisas.camisa;
  const [filteredInfos, setFilteredInfos] = useState(infosCamisas);
  const [searchText] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [marcas, setMarcas] = useState(false);

  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    let updatedSelectedBrands;

    if (checked) {
      updatedSelectedBrands = [...selectedBrands, value];
    } else {
      updatedSelectedBrands = selectedBrands.filter((brand) => brand !== value);
    }

    setSelectedBrands(updatedSelectedBrands);
    setIsLoading(true);

    setTimeout(() => {
      const filtered = infosCamisas.filter((item) =>
        item.nomeCamisa.toLowerCase().includes(searchText)
      );

      const brandFiltered = updatedSelectedBrands.length > 0
        ? filtered.filter((item) => updatedSelectedBrands.includes(item.marca))
        : filtered;

      setFilteredInfos(brandFiltered);
      setIsLoading(false);
    }, 700);
  };

  const uniqueBrands = [...new Set(infosCamisas.map((item) => item.marca))];

  return (
    <>
      <S.Main>
        <S.Content>

          <S.SelectMarca>
            <button onClick={() => setMarcas(!marcas)}>Filtrar</button>
          </S.SelectMarca>
          <S.Filtros display={marcas}>

            <section>
              {uniqueBrands.map((brand) => (
                <div key={brand}>
                  <input
                    onClick={() => setMarcas(false)}
                    type="checkbox"
                    id={brand}
                    value={brand}
                    onChange={handleBrandChange}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </section>
          </S.Filtros>
          <S.Destaque>
            {isLoading ? (
              <S.LoadingSpinner />
            ) : (
              filteredInfos.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  marca={item.nomeCamisa}
                  valor={item.valor}
                  img={item.linkUrl[0]} // Exibe apenas o primeiro link de imagem
                />
              ))
            )}
          </S.Destaque>
        </S.Content>
      </S.Main>
      <Footer />
    </>
  );
}
