import React, { useEffect, useState, useContext } from "react";
import PromoCard from "./PromoCard";
import { GlobalContext } from "../main.jsx";

const Promotion = (props) => {
  const [aleatorio, setAleatorio] = useState([]);
  const { formatarMoeda } = useContext(GlobalContext);

  const games = React.useMemo(
    () => [
      {
        id: 1,
        titulo: "Counter-Strike 2",
        preco: 0.0,
        desconto: 0,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
        descricao:
          "O clássico FPS competitivo retorna com gráficos renovados e jogabilidade ainda mais precisa. Perfeito para amantes de tiro tático.",
        categoria: "FPS",
      },
      {
        id: 2,
        titulo: "Cyberpunk 2077",
        preco: 129.99,
        desconto: 20,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
        descricao:
          "Explore Night City como um mercenário em um futuro distópico, com narrativa profunda e visuais impressionantes.",
        categoria: "RPG de Ação",
      },
      {
        id: 3,
        titulo: "Elden Ring",
        preco: 249.9,
        desconto: 35,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
        descricao:
          "Uma aventura épica em mundo aberto criada por Hidetaka Miyazaki e George R. R. Martin. Desafios intensos e lore profundo.",
        categoria: "RPG",
      },
      {
        id: 4,
        titulo: "Red Dead Redemption 2",
        preco: 199.9,
        desconto: 40,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
        descricao:
          "Viva o Velho Oeste como Arthur Morgan em uma jornada cinematográfica com detalhes incríveis e mundo vivo.",
        categoria: "Ação e Aventura",
      },
      {
        id: 5,
        titulo: "Hogwarts Legacy",
        preco: 229.99,
        desconto: 10,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
        descricao:
          "Mergulhe no mundo bruxo de Hogwarts no século XIX. Crie seu próprio bruxo e descubra segredos mágicos.",
        categoria: "RPG de Ação",
      },
      {
        id: 6,
        titulo: "The Witcher 3: Wild Hunt",
        preco: 89.99,
        desconto: 60,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
        descricao:
          "Acompanhe Geralt de Rívia em sua busca épica por Ciri. Combate envolvente, escolhas impactantes e um dos melhores RPGs já feitos.",
        categoria: "RPG",
      },
      {
        id: 7,
        titulo: "God of War",
        preco: 159.99,
        desconto: 25,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",
        descricao:
          "Kratos retorna em uma jornada emocional com seu filho Atreus. Uma releitura nórdica da lenda do Deus da Guerra.",
        categoria: "Ação e Aventura",
      },
      {
        id: 8,
        titulo: "FIFA 24",
        preco: 299.9,
        desconto: 15,
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg",
        descricao:
          "O mais recente simulador de futebol da EA Sports, com gráficos realistas e modo carreira renovado.",
        categoria: "Esportes",
      },
    ],
    []
  );

  useEffect(() => {
    const aleatorioJogos = games
      .filter((jogo) => jogo.desconto > 0)
      //.sort((a, b) => b.desconto - a.desconto) //ordenação por desconto decrescente
      .sort(() => Math.random() - 0.5) //ordenação aleatória
      .slice(0, 3);

    setAleatorio(aleatorioJogos);
  }, [games]);

  return (
    <div id="promotion" className="container w-75 my-4">
      <h2 className="text-uppercase text-center text-md-start ms-md-5 ps-md-3 mb-4">
        Promoções
      </h2>
      <div
        id="itensPromo"
        className="d-flex flex-wrap gap-4 justify-content-around"
      >
        {/* mapeando um array com react */}
        {aleatorio.map((jogo) => (
          <PromoCard
            key={jogo.id}
            titulo={jogo.titulo}
            preco={jogo.preco}
            precoFormatado={formatarMoeda(jogo.preco)}
            desconto={jogo.desconto}
            imagem={jogo.imagem}
            formatarMoeda={formatarMoeda} // Passando a função para o PromoCard
            onAddCarrinho={() => props.onAddCarrinho(jogo)}
          />
        ))}
      </div>
    </div>
  );
};

export default Promotion;
