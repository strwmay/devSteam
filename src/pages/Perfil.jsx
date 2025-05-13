import React, { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Cadastro from "../components/Cadastro";
import Cartao from "../components/Cartao";
import { Link } from "react-router";

const Perfil = () => {
  const [usuario, setUsuario] = useState("");
  const [mostrarItem, setMostrarItem] = useState(""); // Estado para controlar a exibição do perfil

  useEffect(() => {
    const salvaUsuario = localStorage.getItem("devlogin");
    salvaUsuario && setUsuario(JSON.parse(salvaUsuario));
  }, []);

  useEffect(() => {
    setMostrarItem("Perfil"); // Define o item padrão a ser exibido
  }, []);

  // Função para atualizar o estado do usuário
  const atualizarUsuario = (novoUsuario) => {
    setUsuario(novoUsuario);
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      {/* Saudação com o nome do usuário */}
      <Link to={"/"}>
        <i
          className=" bi bi-arrow-left-short fs-1 mt-2"
          // style={{ cursor: "pointer" }}
        ></i>
      </Link>

      {/* Botão de Cadastro */}
      <div className="d-flex flex-column align-items-start gap-3 me-4">
        <div className="d-flex align-items-center">
          <img
            className="rounded-5 mb-4"
            src={`https://ui-avatars.com/api/?name=${usuario.nome}&background=2b87ae&color=fff`}
            alt=""
          />
          {usuario && (
            <h2 className="ms-3 fs-4">Olá, {usuario.nome.split(" ")[0]}!</h2>
          )}
        </div>
        <Botao
          titulo="Cadastro"
          desc="Ver e alternar seus dados"
          click={() => setMostrarItem("Perfil")} // Alterna a exibição do perfil
        />

        <Botao
          titulo="Cartões"
          desc="Ver e alternar seus dados do cartão"
          click={() => setMostrarItem("Cartao")} // Alterna a exibição do perfil
        />

        {usuario.tipo == "admin" && (
          <>
            <Botao titulo="Cadastro Jogos" desc="Ver e alternar seus dados" />
          </>
        )}
      </div>

      {/* Conteúdo do Perfil */}
      {mostrarItem == "Perfil" && (
        <Cadastro
          usuario={usuario} // Passa o usuário para o componente Cadastro
          onAtualizarUsuario={atualizarUsuario} // Passa a função de atualização
        />
      )}
      {mostrarItem == "Cartao" && <Cartao />}

      {/* ----------------------------------------------------------------------------- */}
    </div>
  );
};

export default Perfil;
