import { useState } from 'react';
import GameDetailsModal from './GameDetailsModal';
import styles from "./GameCard.module.css";

const GameCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div
        id="GameCard"
        className={`${styles.gameCard} card`}
        onClick={toggleModal}
      >
        <img
          className={styles.image}
          src={props.imagem}
          alt={props.titulo}
        />
        <div className={styles.cardBody}>
          <h5
            data-bs-toggle="tooltip"
            title={props.titulo}
            className={styles.cardTitle}
          >
            {props.titulo}
          </h5>
          <p className={styles.cardText}>{props.categorias}</p>
          <div className={styles.priceSection}>
            <p className={styles.price}>
              {props.formatarMoeda(props.preco)}
            </p>
            <button
              id="addCarrinho"
              className={styles.addToCartButton}
              onClick={(e) => {
                e.stopPropagation(); // Impede que o clique feche o modal
                props.onAddCarrinho();
              }}
            >
              <i className="bi bi-cart-plus"></i>
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <GameDetailsModal 
          click={toggleModal} 
          gameData={props}
          formatarMoeda={props.formatarMoeda}
        />
      )}
    </>
  );
};

export default GameCard;