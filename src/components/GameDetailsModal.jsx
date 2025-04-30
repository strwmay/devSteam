import { useState } from "react";
import styles from "./GameDetailsModal.module.css";

const GameDetailsModal = ({ click, gameData, formatarMoeda }) => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  if (!gameData) return null;

  // Calcula preço com desconto se houver promoção
  const precoComDesconto = gameData.precoComDesconto || gameData.preco;

  return (
    <div className={styles.modalBackdrop} onClick={click}>
      <div className={styles.gameModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.gameInfo}>
          <img
            src={gameData.imagem}
            alt={`Capa do jogo ${gameData.titulo}`}
            className={styles.gameImage}
          />
          <button className={styles.btnClose} onClick={click}>
            ╳
          </button>
          <div className={styles.gameHeader}>
            <h1>{gameData.titulo}</h1>
            {gameData.trailer && (
              <button
                className={styles.trailerButton}
                onClick={() => setIsTrailerOpen(true)}
              >
                ▶ Ver Trailer
              </button>
            )}
          </div>
        </div>

        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
            <p>
              <strong>Categoria:</strong> {gameData.categoria || gameData.categorias || "Não informado"}
            </p>
            <p>
              <strong>Desenvolvedor:</strong> {gameData.desenvolvedor || "Não informado"}
            </p>
            <p>
              <strong>Data de Lançamento:</strong> {gameData.dataLancamento || "Não informado"}
            </p>
          </div>
          
          <div className={styles.priceSection}>
            {gameData.desconto ? (
              <>
                <span className={styles.discountTag}>-{gameData.desconto}%</span>
                <span className={styles.originalPrice}>{formatarMoeda(gameData.preco)}</span>
                <span className={styles.discountedPrice}>{formatarMoeda(precoComDesconto)}</span>
              </>
            ) : (
              <span className={styles.normalPrice}>{formatarMoeda(gameData.preco)}</span>
            )}
          </div>
        </div>
        
        <div className={styles.desc}>
          <h3>Sobre o jogo</h3>
          <p>{gameData.descricao || "Descrição não disponível."}</p>
        </div>
        
        <div className={styles.actions}>
          <button
            className={styles.addToCart}
            onClick={(e) => {
              e.stopPropagation(); // Impede que o clique feche o modal
              gameData.onAddCarrinho();
              click();
            }}
          >
            <i className="bi bi-cart-plus me-2"></i>
            Adicionar ao carrinho
          </button>
        </div>
      </div>

      {/* POP-UP DO TRAILER */}
      {isTrailerOpen && gameData.trailer && (
        <div
          className={styles.trailerBackdrop}
          onClick={() => setIsTrailerOpen(false)}
        >
          <div
            className={styles.trailerModal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.btnClose}
              onClick={() => setIsTrailerOpen(false)}
            >
              ╳
            </button>
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