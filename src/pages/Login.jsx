import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState(""); // Estado para a senha
  const [mostrarSenha, setMostrarSenha] = useState(false); // Estado para controlar a visibilidade da senha

  
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (nome && email) {
      localStorage.setItem(
        "devlogin",
        JSON.stringify({ nome, email, tipo: "admin" })
      );

      navigate("/");
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 w-50 rounded-4">
        <h3 className="text-center mb-4 fw-bold">LOGIN</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-bold" htmlFor="frmNome">
              Nome
            </label>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="form-control rounded-3"
              type="text"
              name="frmNome"
              id="frmNome"
              placeholder="Digite seu nome"
            />
          </div>
  
          <div className="mb-3">
            <label className="form-label fw-bold" htmlFor="frmEmail">
              E-mail
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control rounded-3"
              type="email"
              name="frmEmail"
              id="frmEmail"
              placeholder="Digite seu e-mail"
            />
          </div>

          {/* Campo de Senha */}
          <div className="mb-3">
            <label className="form-label fw-bold" htmlFor="frmSenha">
              Senha
            </label>
            <div className="input-group">
              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="form-control rounded-3"
                type={mostrarSenha ? "text" : "password"} // Alterna entre "password" e "text"
                name="frmSenha"
                id="frmSenha"
                placeholder="Digite sua senha"
              />
              <button
                type="button"
                className="btn bg-transparent border-3 rounded-3"
                onClick={() => setMostrarSenha(!mostrarSenha)} // Alterna visibilidade
              >
                {mostrarSenha ? <i class="bi bi-eye-slash-fill"></i> : <i class="bi bi-eye-fill"></i>}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 rounded-3 fw-bold"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
