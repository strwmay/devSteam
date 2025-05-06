import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css' 

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <ul className="list-inline text-center">
          <li className="list-inline-item">
            <hr className="d-inline-block mx-4" style={{ width: '300px' }} />
            <a href="https://www.youtube.com/@Steam" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.svg" alt="YouTube" width="30" height="30" style={{ filter: 'invert(1)' }} />
            </a>
          </li>
          <li className="list-inline-item mx-4">
            <a href="https://www.instagram.com/steam__tr/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" width="30" height="30" style={{ filter: 'invert(1)' }} />
            </a>
          </li>
          <li className="list-inline-item mx-4">
            <a href="https://github.com/strwmay/devSteam" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" width="30" height="30" style={{ filter: 'invert(1)' }} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.figma.com/design/hw3MevGX78GTBJzRzEpISe/Projeto-1---Fernanda?node-id=0-1&t=EudwILF32W1YNhLp-1" target="_blank" rel="noopener noreferrer">
              <img src="/figma.svg" alt="Figma" width="30" height="30" style={{ filter: 'invert(1)' }} />
            </a>
            <hr className="d-inline-block mx-4" style={{ width: '300px' }} />
          </li>
        </ul>
        <div className="pt-4 w-100 d-flex flex-column align-items-center">
          <div id="info" className="d-flex align-items-center gap-3">
            <i className="bi bi-controller fs-1 text-white"></i>
            <span className="navbar-brand fw-bold fs-3 text-white">DevSteam</span>
          </div>
          <p className="mt-2 text-white"><strong>Copyright © 2025 DevSteamSenai</strong></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
