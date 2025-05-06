import { useState } from "react";
import GameDetailsModal from "./GameDetailsModal";

const PromoCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const precoComDesconto = props.preco - (props.preco * props.desconto) / 100;

  return (
    <>
      <div 
        id="PromoCard" 
        className="promoCard card border-0 overflow-hidden" 
        onClick={toggleModal}
        style={{ cursor: 'pointer' }}
      >
        <img
          className="card-img-top object-fit-cover"
          src={props.imagem}
          height={300}
          alt="Titulo do jogo"
        />
        <div className="card-body d-flex flex-column gap-1">
          <h5
            data-bs-toggle="tooltip"
            title={props.titulo}
            className="card-title text-uppercase text-truncate mw-100 h-100 fw-bold text-light text-nowrap mb-0"
          >
            {props.titulo}
          </h5>
          <p className="card-text small mt-0 mb-1">{props.categoria}</p>
          <div className="m-0 row h-100 align-items-center justify-content-center">
            <span className="desconto col-4 h-100 fw-bold h5 m-0 d-flex align-items-center">
              -{props.desconto}%
            </span>
            <div className="col h-100 card-text bg-dark">
              <p className="m-0 p-0 text-end text-secondary text-decoration-line-through small">
                <small>{props.precoFormatado}</small>
              </p>
              <p className="corValor m-0 p-0 fs-4 text-end fw-bolder">
                {props.formatarMoeda(precoComDesconto)}
              </p>
            </div>
          </div>
          <button
            id="addCarrinho"
            className="btn btn-success desconto text-light w-100 border-0"
            onClick={(e) => {
              e.stopPropagation(); // Impede que o clique feche o modal
              props.onAddCarrinho();
            }}
          >
            <i className="bi bi-cart-plus me-2"></i>
            Adicionar ao carrinho
          </button>
        </div>
      </div>

      {isModalOpen && (
        <GameDetailsModal 
          click={toggleModal} 
          gameData={{
            ...props,
            precoComDesconto,
            desenvolvedor: props.desenvolvedor || "Desenvolvedor desconhecido",
            dataLancamento: props.dataLancamento || "Data não informada"
          }}
          formatarMoeda={props.formatarMoeda}
        />
      )}
    </>
  );
};

export default PromoCard;