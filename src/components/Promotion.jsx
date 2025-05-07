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
        titulo: "Stardew Valley",
        preco: 35.48,
        desconto: 10,
        imagem:
          "https://dlc.channel3.gg/img/avi/game-main-stardewvalley-187-20220901091059.webp",
        descricao:
          "Você herdou a antiga fazenda do seu avô, em Stardew Valley. Com ferramentas de segunda-mão e algumas moedas, você parte para dar início a sua nova vida. Será que você vai aprender a viver da terra, a transformar esse matagal em um próspero lar?",
        categoria: "Indie, RPG e Simulação",
        desenvolvedor: "ConcernedApe (Eric Barone)",
        dataLancamento: "26 de fevereiro de 2016",
      },
      {
        id: 2,
        titulo: "The Sims 4 - Completo",
        preco: 999.99,
        desconto: 15,
        imagem:
          "https://www.devarsiv.com/wp-content/uploads/2023/02/The-Sims-4-INDIR-TUM-DLCler-Turkce-YAMA-TORRENT-FULL-INDIR-500x677-1.jpg",
        descricao:
          "Curta o poder de criar e controlar pessoas num mundo virtual onde não há regras. Seja poderoso e livre, divirta-se e jogue com a vida!",
        categoria: "Aventura, Casual e Simulação",
        desenvolvedor: "Maxis EA",
        dataLancamento: "2 de setembro de 2014",
      },
      {
        id: 3,
        titulo: "Party Animals",
        preco: 97.45,
        desconto: 25,
        imagem:
          "https://thaka.bing.com/th/id/OIP.yWbTJCzybQwD-6Sk84m6_QHaLH?rs=1&pid=ImgDetMain",
        descricao:
          "Lute contra seus amigos como cachorrinhos, gatinhos ou outros bixos fofinhos em PARTY ANIMALS! Dê patadas em seus amigos tanto online quanto em casa. Interaja com nosso mundo sob nosso sistema com física realista. Eu mencionei CACHORRINHOS?",
        categoria: "Ação, Casual e Indie",
        desenvolvedor: "Recreate Games",
        dataLancamento: "20 de setembro de 2023",
      },
      {
        id: 4,
        titulo: "Staxel",
        preco: 36.99,
        desconto: 20,
        imagem:
          "https://gpstatic.com/acache/49/94/1/fr/packshot-67082148a14ff5ed2b8839e09301d59b.jpg",
        descricao:
          "Expanda sua fazenda, conheça os habitantes e junte-se a seus amigos on-line para construir o seu mundo.",
        categoria: "Simulação e RPG",
        desenvolvedor: "Plukit",
        dataLancamento: "11 de abril de 2019",
      },
      {
        id: 5,
        titulo: "Stray",
        preco: 79.99,
        desconto: 5,
        imagem:
          "https://th.bing.com/th/id/R.9ad38ac01111c5e8787469a4914a0efb?rik=UIzC5gRb95ZSjw&riu=http%3a%2f%2frogallylife.com%2fstorage%2f2023%2f08%2fstray-rog-ally-game-cover.webp&ehk=SmBq9RBAeqRVbLDXtYpKKlmC3x5mjsB1DOuHrffGG7A%3d&risl=&pid=ImgRaw&r=0",
        descricao:
          "Perdido, sozinho e separado da sua família, um gato de rua deve desvendar um mistério antigo para escapar de uma cidade cibernética esquecida e encontrar o caminho de volta para casa.",
        categoria: "Aventura e Atmosférico",
        desenvolvedor: "BlueTwelve Studio",
        dataLancamento: "19 de julho de 2022",
      },
      {
        id: 6,
        titulo: "Hi-Fi Rush",
        preco: 109.00,
        desconto: 30,
        imagem:
          "https://cdn2.steamgriddb.com/thumb/c4f0dfcf446c4309e4d0663005d8511b.jpg",
        descricao:
          "Sinta a batida enquanto o aspirante a estrela Chai e seu inesperado time de aliados lutam contra uma megacorporação maligna usando um estrondoso combate ritmado!",
        categoria: "Ritmo, Ação e Música",
        desenvolvedor: "Tango Gameworks",
        dataLancamento: "25 de janeiro de 2023",
      }
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
            descricao={jogo.descricao}
            desenvolvedor={jogo.desenvolvedor}
            dataLancamento={jogo.dataLancamento}
            preco={jogo.preco}
            precoFormatado={formatarMoeda(jogo.preco)}
            desconto={jogo.desconto}
            imagem={jogo.imagem}
            categoria={jogo.categoria} // Passando a categoria
            formatarMoeda={formatarMoeda} // Passando a função para o PromoCard
            onAddCarrinho={() => props.onAddCarrinho(jogo)}
          />
        ))}
      </div>
    </div>
  );
};

export default Promotion;
