import React from "react";
import GameCard from "./GameCard";
import Footer from './Footer';

const OutrosJogos = (props) => {
  const games = React.useMemo(
    () => [
      {
        id: 7,
        titulo: "Life is Strange - Completo",
        preco: 36.99,
        imagem:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/319630/header.jpg?t=1724158918",
        descricao:
          "Siga a história de Max Caulfield, uma estudante de fotografia que descobre ser capaz de rebobinar o tempo ao salvar a melhor amiga, Chloe Price.",
        categoria: "Ação e Aventura",
        desenvolvedor: "Dontnod Entertainment",
        dataLancamento: "30 de Janeiro de 2015",
      },
      {
        id: 8,
        titulo: "Detroit: Become Human",
        preco: 119.99,
        imagem:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222140/header.jpg?t=1667468479",
        descricao:
          "Detroit: Become Human coloca o destino da humanidade e dos androides em suas mãos. Todas as suas escolhas afetam o resultado do jogo, com uma das narrativas mais intrinsecamente ramificadas já criadas.",
        categoria: "Ação e Aventura",
        desenvolvedor: "Quantic Dream",
        dataLancamento: "25 de maio de 2018",
      },
      {
        id: 9,
        titulo: "The Quarry",
        preco: 349.90,
        imagem:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1577120/header.jpg?t=1730303267",
        descricao:
          "Ao anoitecer do último dia do acampamento de verão, os monitores adolescentes de Hackett's Quarry decidem comemorar com uma festa. Sem crianças. Sem adultos. Sem regras.",
        categoria: "Aventura e Terror",
        desenvolvedor: "Supermassive Games",
        dataLancamento: "10 de junho de 2022",
      },
      {
        id: 10,
        titulo: "Red Dead Redemption 2",
        preco: 199.9,
        imagem:
          "https://i0.wp.com/www.portaldonerd.com.br/wp-content/uploads/2018/11/red-dead-redemption-2-hero-banner-03-ps4-us-07jun18.jpg",
        descricao:
          "Viva o Velho Oeste como Arthur Morgan em uma jornada cinematográfica com detalhes incríveis e mundo vivo.",
        categoria: "Ação e Aventura",
        desenvolvedor: "Rockstar Games",
        dataLancamento: "26 de outubro de 2018",
      },
      {
        id: 11,
        titulo: "Resident Evil 4",
        preco: 69.50,
        imagem:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg?t=1736385712",
        descricao:
          "Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes.",
        categoria: "Ação e Aventura",
        desenvolvedor: "Capcom",
        dataLancamento: "24 de março de 2023",
      },
      {
        id: 12,
        titulo: "The Last of Us",
        preco: 249.90,
        imagem:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1741209545",
        descricao:
          "Descubra o jogo premiado que inspirou a série de TV aclamada pela crítica. Desbrave a América pós-apocalíptica com Joel e Ellie e conheça aliados e inimigos inesquecíveis em The Last of Us.",
        categoria: "Ação e Aventura",
        desenvolvedor: "Naughty Dog",
        dataLancamento: "14 de junho de 2013",
      },
      {
        id: 13,
        titulo: "Final Fantasy VII Rebirth",
        preco: 223.93,
        imagem:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2909400/header.jpg?t=1740049902",
        descricao:
          "A jornada rumo ao desconhecido continua... Cloud e seus amigos escapam da distópica cidade de Midgar e partem em uma aventura pelo planeta. Um mundo vasto e cheio de vida está à sua espera nessa aventura independente da trilogia do remake de FFVII!",
        categoria: "Ação, Aventura e RPG",
        desenvolvedor: "Square Enix",
        dataLancamento: "29 de fevereiro de 2024",
      },
      {
        id: 14,
        titulo: "Until Dawn",
        preco: 299.99,
        imagem:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2172010/header.jpg?t=1745495247",
        descricao:
          "Recriado e aprimorado para PC, Until Dawn convida você a reviver o pesadelo e mergulhar no terror envolvente e esquartejador em que cada decisão pode fazer a diferença entre a vida e a morte.",
        categoria: "Aventura e Terror",
        desenvolvedor: "Supermassive Games",
        dataLancamento: "25 de agosto de 2015",
      },
    ],
    []
  );



  return (
    <div id="outrosJogos" className="container w-75 my-5">
      <h2 className="text-uppercase text-center text-md-start ms-md-5 ps-md-3 mb-4">
        Outros Jogos
      </h2>
      <div id="itensJogos" className="d-flex flex-column ms-md-5 ps-md-3 gap-4">
        {games.map((item) => (
          <GameCard
            key={item.id}
            id={item.id}
            titulo={item.titulo}
            categoria={item.categoria}
            descricao={item.descricao}
            desenvolvedor={item.desenvolvedor}
            dataLancamento={item.dataLancamento}
            preco={item.preco}
            imagem={item.imagem}
            categorias={item.categoria}
            desconto={0} // Adiciona desconto padrão como 0
            formatarMoeda={(valor) =>
              `R$ ${valor.toFixed(2).replace('.', ',')}`
            }
            onAddCarrinho={() => props.onAddCarrinho(item)}
          />
        ))}
      </div>

    </div>
  );
};

export default OutrosJogos;
