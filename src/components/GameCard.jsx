import React from 'react';

const GameCard = (props) => {
  return (
    <div
      id="GameCard"
      className="gameCard card border-0 d-flex flex-row align-items-center"
      style={{ width: '1164px', height: '145px' }}
    >
      <img
        className="object-fit-cover"
        src={props.imagem}
        alt={props.titulo}
        style={{ width: '305px', height: '145px' }}
      />
      <div className="card-body d-flex flex-column justify-content-between ms-3">
        <h5
          data-bs-toggle="tooltip"
          title={props.titulo}
          className="card-title text-uppercase fw-bold text-truncate text-light"
        >
          {props.titulo}
        </h5>
        <p className="card-text small">{props.categorias}</p>
        <div className="d-flex justify-content-between align-items-end">
          <p className="corValor m-0 p-0 fs-5 fw-bolder">
            {props.formatarMoeda(props.preco)}
          </p>
          <button
            id="addCarrinho"
            className="btn text-light border-0"
            onClick={props.onAddCarrinho}
          >
            <i className="bi bi-cart-plus me-2"></i>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;