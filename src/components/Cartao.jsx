import React, { useState } from "react";
import ModelCartao from "./ModelCartao";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const Cartao = () => {
  const [editando, setEditando] = useState(false);
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const salvarAlteracoes = () => {
    if (state.number.length !== 16) {
      alert("Número do cartão inválido. Deve conter 16 dígitos.");
      return;
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(state.expiry)) {
      alert("Validade inválida. Use o formato MM/AA.");
      return;
    }
    if (state.cvc.length !== 3) {
      alert("Código de segurança inválido. Deve conter 3 dígitos.");
      return;
    }

    console.log("Alterações salvas:", state);
    setEditando(false);
  };

  return (
    <div className="card flex-grow-1 rounded-4">
      <h3 className="mt-3 fw-bold text-center">Cartão</h3>
  
      <div className="card-body d-flex justify-content-between align-items-start">
        {/* Inputs do Cartão */}
        <div className="w-50">
          {editando ? (
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold " htmlFor="number">
                  Número do Cartão
                </label>
                <input
                  type="tel"
                  name="number"
                  className="rounded-5 form-control"
                  placeholder="Número do Cartão"
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength={16}
                />
              </div>
              <hr />

              <div className="mb-3">
                <label className="form-label fw-bold" htmlFor="name">
                  Nome Impresso
                </label>
                <input
                  type="text"
                  name="name"
                  className="rounded-5 form-control"
                  placeholder="Nome Impresso"
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <hr />
              <div className="mb-3">
                <label className="form-label fw-bold" htmlFor="expiry">
                  Validade
                </label>
                <input
                  type="text"
                  name="expiry"
                  className="rounded-5 form-control"
                  placeholder="MM/AA"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength={5}
                />
              </div>
              <hr />
              <div className="mb-3">
                <label className="form-label fw-bold" htmlFor="cvc">
                  Código de Segurança
                </label>
                <input
                  type="tel"
                  name="cvc"
                  className="rounded-5 form-control"
                  placeholder="CVC"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength={3}
                />
              </div>
              <hr />
            </form>
          ) : (
            <div>
              <p>
                <h5 className="fw-bold">Número do Cartão:</h5>{state.number || "**** **** **** ****"}
              </p>
              <hr />
              <p>
                <h5 className="fw-bold">Nome Impresso:</h5> {state.name || "NOME IMPRESSO"}
              </p>
              <hr />
              <p>
                <h5 className="fw-bold">Validade:</h5> {state.expiry || "MM/AA"}
              </p>
              <hr />
              <p>
                <h5 className="fw-bold">Código de Segurança:</h5> {state.cvc || "***"}
              </p>
              <hr />
            </div>
          )}
  
          {/* Botões */}
          <div className="d-flex justify-content-end gap-3 mt-3">
            {editando ? (
              <>
                <button
                  className="btn btn-success px-4 rounded-3"
                  onClick={salvarAlteracoes}
                >
                  Salvar
                </button>
                <button
                  className="btn btn-secondary px-4 rounded-3"
                  onClick={() => setEditando(false)}
                >
                  Cancelar
                </button>
              </>
            ) : (
              <button
                className="btn btn-success px-4 rounded-3"
                onClick={() => setEditando(true)}
              >
                Editar
              </button>
            )}
          </div>
        </div>
  
        {/* Visualização do Cartão */}
        <div className="w-50 d-flex justify-content-center">
          <Cards
            number={state.number}
            name={state.name}
            expiry={state.expiry}
            cvc={state.cvc}
            focused={state.focus}
          />
        </div>
      </div>
    </div>
  );
};

export default Cartao;