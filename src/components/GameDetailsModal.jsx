import { useState } from "react";
import styles from "./GameDetailsModal.module.css";

const GameDetailsModal = ({ click, gameData, formatarMoeda }) => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  if (!gameData) return null;

  const precoComDesconto = gameData.precoComDesconto || gameData.preco;

  return (
    <div className={`${styles.modalBackdrop} d-flex justify-content-center align-items-center`} onClick={click}>
      <div className={`${styles.gameModal} modal-content`} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h5 className="modal-title">{gameData.titulo}</h5>
          <button type="button" className="btn-close text-light" onClick={click}></button>
        </div>
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
              <strong>Categoria:</strong> {gameData.categoria || "Não informado"}
            </div>
            <div className="mb-3">
              <strong>Desenvolvedor:</strong> {gameData.desenvolvedor || "Não informado"}
            </div>
            <div className="mb-3">
              <strong>Data de Lançamento:</strong> {gameData.dataLancamento || "Não informado"}
            </div>
            <div className="mb-3">
              {gameData.desconto ? (
                <>
                  <span className="precoAnterior text-decoration-line-through small me-2">
                    {formatarMoeda(gameData.preco)}
                  </span> <br />
                  <span className="precoAtual fw-bold fs-3">
                    {formatarMoeda(precoComDesconto)}
                  </span>
                </>
              ) : (
                <span>{formatarMoeda(gameData.preco)}</span>
              )}
            </div>
          </div>
        </div>
        <div className="modal-footer flex-column align-items-start">
          <strong>Sobre o jogo:</strong>
          <p>{gameData.descricao || "Descrição não disponível."}</p>
          <button
            className="btn text-light w-100"
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

      {isTrailerOpen && gameData.trailer && (
        <div
          className={`${styles.trailerBackdrop} d-flex justify-content-center align-items-center`}
          onClick={() => setIsTrailerOpen(false)}
        >
          <div className={`${styles.trailerModal} modal-content`}>
            <button
              className="btn-close text-light position-absolute top-0 end-0 m-2"
              onClick={() => setIsTrailerOpen(false)}
            ></button>
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