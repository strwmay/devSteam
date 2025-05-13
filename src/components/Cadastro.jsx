import React, { useState } from "react";

const Cadastro = (props) => {
  const [editando, setEditando] = useState(false);
  const [nome, setNome] = useState(props.usuario?.nome || "");
  const [email, setEmail] = useState(props.usuario?.email || "");
  const [telefone, setTelefone] = useState(props.usuario?.telefone || "");
  const [cpf, setCpf] = useState(props.usuario?.cpf || "");
  const [erroEmail, setErroEmail] = useState("");
  const [erroTelefone, setErroTelefone] = useState("");
  const [erroCpf, setErroCpf] = useState("");

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Verifica se o e-mail tem formato válido
    return regex.test(email);
  };

  const validarTelefone = (telefone) => {
    const regex = /^\d{10,11}$/; // Verifica se o telefone tem 10 ou 11 dígitos
    return regex.test(telefone);
  };

  const validarCpf = (cpf) => {
    const regex = /^\d{11}$/; // Verifica se o CPF tem exatamente 11 dígitos
    return regex.test(cpf);
  };

  const salvarAlteracoes = () => {
    if (!validarEmail(email)) {
      setErroEmail("E-mail inválido.");
      return;
    }
    if (!validarTelefone(telefone)) {
      setErroTelefone("Telefone deve ter 10 ou 11 dígitos.");
      return;
    }
    if (!validarCpf(cpf)) {
      setErroCpf("CPF deve ter exatamente 11 dígitos.");
      return;
    }

    // Atualiza o localStorage
    const novoUsuario = { ...props.usuario, nome, email, telefone, cpf };
    localStorage.setItem("devlogin", JSON.stringify(novoUsuario));

    // Chama a função de atualização passada como prop
    props.onAtualizarUsuario(novoUsuario);

    console.log("Alterações salvas:", { nome, email, telefone, cpf });
    setErroEmail("");
    setErroTelefone("");
    setErroCpf("");
    setEditando(false);
  };

  return (
    <div className="card flex-grow-1 rounded-4 ">
      <h3 className="mt-3 fw-bold text-center">Cadastro</h3>

      <div className="card-body">
        {/* Nome */}
        <div className="d-flex justify-content-between align-items-center gap-4">
          <h5 className="card-title">Nome</h5>
          {editando ? (
            <input
              type="text"
              className="rounded-5 form-control"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          ) : (
            <p className="card-text">{nome || "Seu nome aqui"}</p>
          )}
        </div>
        <hr />

        {/* E-mail */}
        <div className="d-flex justify-content-between align-items-center gap-4">
          <h5 className="card-title text-nowrap">E-mail</h5>
          {editando ? (
            <div className="w-100">
              <input
                type="email"
                className={`rounded-5 form-control ${
                  erroEmail ? "is-invalid" : ""
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  if (!validarEmail(email)) setErroEmail("E-mail inválido.");
                  else setErroEmail("");
                }}
              />
              {erroEmail && <div className="invalid-feedback">{erroEmail}</div>}
            </div>
          ) : (
            <p className="card-text">{email || "Seu e-mail aqui"}</p>
          )}
        </div>
        <hr />

        {/* Telefone */}
        <div className="d-flex justify-content-between align-items-center mb-3 gap-4">
          <h5 className="card-title">Telefone</h5>
          {editando ? (
            <div className="w-100">
              <input
                type="text"
                className={`rounded-5 form-control ${
                  erroTelefone ? "is-invalid" : ""
                }`}
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                onBlur={() => {
                  if (!validarTelefone(telefone))
                    setErroTelefone("Telefone deve ter 10 ou 11 dígitos.");
                  else setErroTelefone("");
                }}
              />
              {erroTelefone && (
                <div className="invalid-feedback">{erroTelefone}</div>
              )}
            </div>
          ) : (
            <p className="card-text">{telefone || "Seu telefone aqui"}</p>
          )}
        </div>
        <hr />

        {/* CPF */}
        <div className="d-flex justify-content-between align-items-center mb-3 gap-4">
          <h5 className="card-title">CPF</h5>
          {editando ? (
            <div className="w-100">
              <input
                type="text"
                className={`rounded-5 form-control ${
                  erroCpf ? "is-invalid" : ""
                }`}
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                onBlur={() => {
                  if (!validarCpf(cpf))
                    setErroCpf("CPF deve ter exatamente 11 dígitos.");
                  else setErroCpf("");
                }}
              />
              {erroCpf && <div className="invalid-feedback">{erroCpf}</div>}
            </div>
          ) : (
            <p className="card-text">{cpf || "Seu CPF aqui"}</p>
          )}
        </div>
        <hr />

        {/* Botões */}
        <div className="d-flex justify-content-end gap-3">
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
              className="mt-2 btn btn-success px-4 rounded-3 mb-2"
              onClick={() => setEditando(true)}
            >
              Editar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
