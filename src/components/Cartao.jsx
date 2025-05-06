import React from "react";

const Cartao = (props) => {
  return (
    <div className="card flex-grow-1">
      <div className="card-body">
        <div className="d-flex justify-content-around">
          <h5 className="card-title">Nome</h5>
          <p className="card-text">
            {props.usuario ? props.usuario.nome : "Seu nome aqui"}
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-around">
          <h5 className="card-title">E-mail</h5>
          <p className="card-text">
            {props.usuario ? props.usuario.email : "Seu e-mail aqui"}
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-around">
          <h5 className="card-title">Telefone</h5>
          <p className="card-text">Seu telefone aqui</p>
        </div>
        <hr />
        <div className="d-flex justify-content-around">
          <h5 className="card-title">CPF</h5>
          <p className="card-text">Seu CPF aqui</p>
        </div>
      </div>
    </div>
  );
};

export default Cartao;
