import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css' 

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <ul className="list-inline text-center d-flex justify-content-center align-items-center gap-3">
          <li className="list-inline-item d-flex align-items-center">
            <hr className="d-none d-md-inline-block mx-4" style={{ width: '700px' }} />
            <a href="https://www.youtube.com/@Steam" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.svg" alt="YouTube" width="24" height="24" style={{ filter: 'invert(1)' }} />
            </a>
          </li>
          <li className="list-inline-item d-flex align-items-center">
            <a href="https://www.instagram.com/steam__tr/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" width="24" height="24" style={{ filter: 'invert(1)' }} />
            </a>
          </li>
          <li className="list-inline-item d-flex align-items-center">
            <a href="https://github.com/strwmay/devSteam" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" width="24" height="24" style={{ filter: 'invert(1)' }} />
            </a>
          </li>
          <li className="list-inline-item d-flex align-items-center">
            <a href="https://www.figma.com/design/hw3MevGX78GTBJzRzEpISe/Projeto-1---Fernanda?node-id=0-1&t=EudwILF32W1YNhLp-1" target="_blank" rel="noopener noreferrer">
              <img src="/figma.svg" alt="Figma" width="24" height="24" style={{ filter: 'invert(1)' }} />
            </a>
            <hr className="d-none d-md-inline-block mx-4" style={{ width: '700px' }} />
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
