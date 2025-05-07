import { useState } from "react";
import styles from "./GameDetailsModal.module.css";

const GameDetailsModal = ({ click, gameData, formatarMoeda }) => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  if (!gameData) return null;

  const precoComDesconto = gameData.precoComDesconto || gameData.preco;

  return (
    <div
      className={`${styles.modalBackdrop} d-flex justify-content-center align-items-center`}
      onClick={click}
    >
      <div
        className={`${styles.gameModal} modal-content`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header d-flex justify-content-between align-items-center w-100">
          <h2 className="modal-title text-uppercase fw-bold">
            {gameData.titulo}
          </h2>
          <i
            type="button"
            className="fs-3 bi bi-x text-light"
            onClick={click}
          ></i>
        </div>
        <hr />
        <div className="modal-body row">
          <div className="col-md-4 text-center">
            <img
              src={gameData.imagem}
              alt={`Capa do jogo ${gameData.titulo}`}
              className="img-fluid rounded mb-3"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="mb-3">
              <strong>Categoria:</strong>{" "}
              {gameData.categoria || "Não informado"}
            </div>
            <div className="mb-3">
              <strong>Desenvolvedor:</strong>{" "}
              {gameData.desenvolvedor || "Não informado"}
            </div>
            <div className="mb-3">
              <strong>Data de Lançamento:</strong>{" "}
              {gameData.dataLancamento || "Não informado"}
            </div>
            <div className="mb-3">
              {gameData.desconto ? (
                <>
                  <span
                    className={`${styles.precoAnterior} text-decoration-line-through small me-2`}
                  >
                    {formatarMoeda(gameData.preco)}
                  </span>{" "}
                  <br />
                  <span className={`${styles.precoAtual} fw-bold fs-3`} >
                    {formatarMoeda(precoComDesconto)}
                  </span>
                </>
              ) : (
                <span className={`${styles.preco} fw-bold fs-3`}>
                  {formatarMoeda(gameData.preco)}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="modal-footer flex-column align-items-start">
          <strong>Sobre o jogo:</strong>
          <p>{gameData.descricao || "Descrição não disponível."}</p> <br />
          <div className="d-flex justify-content-end w-100">
            <button
              id="addCarrinho"
              className="btn btn-success desconto border-0 text-light "
              onClick={(e) => {
                e.stopPropagation();
                gameData.onAddCarrinho();
                click();
              }}
            >
              <i className="bi bi-cart-plus me-2"></i>
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>

      {isTrailerOpen && gameData.trailer && (
        <div
          className={`${styles.trailerBackdrop} d-flex justify-content-center align-items-center`}
          onClick={() => setIsTrailerOpen(false)}
        >
          <div className={`${styles.trailerModal} modal-content`}>
            <i
              className="bi bi-x text-light position-absolute top-0 end-0 m-2"
              onClick={() => setIsTrailerOpen(false)}
            ></i>
            <iframe
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${gameData.trailer}`}
              title={`Trailer do jogo ${gameData.titulo}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetailsModal;
