import React from "react";

const Botao = (props) => {
  return (
    <button
      className="btn btn-secondary d-flex flex-column align-items-center p-3 rounded-3 shadow"
      style={{ width: "200px", height: "110px" }}
      onClick={props.click} // Chama a função passada como prop ao clicar no botão
    >
      <span className="fw-bold fs-5">{props.titulo}</span>
      <span className="text-white-50 mt-1">{props.desc}</span>
    </button>
  );
};

export default Botao;
