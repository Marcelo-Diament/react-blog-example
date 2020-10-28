import React, { useState } from 'react'
import bars from '../../bars-solid.svg'
import times from '../../times-solid.svg'
import './style.css'

const Header = ({ currentDevice }) => {
  let isMobile = currentDevice === 'mobile',
    isTablet = currentDevice === 'tablet'

  const [visitor, setVisitor] = useState('Login')
  const [activeMenu, setActiveMenu] = useState(false)

  const toggleActiveMenu = () => {
    setActiveMenu(!activeMenu)
  }

  const authenticateVisitor = () => {
    let userName = prompt('Qual o seu nome?')
    let user = {
      name: userName
    }
    return setVisitor(`${user.name}`)
  }

  return (
    <header className={`header ${currentDevice}`}>
      <img
        src={activeMenu ? times : bars}
        className={`header-bars ${currentDevice} ${activeMenu ? 'active' : ''}`}
        onClick={toggleActiveMenu}
        alt={`${!activeMenu ? 'Abrir Menu' : 'Fechar Menu'}`}
      />

      <h1 className="header-title">header</h1>

      <nav className={`header-nav ${activeMenu && (isMobile || isTablet) ? 'active-menu' : ''}`}>
        <ul className="header-nav-ul">
          <li className="header-nav-ul-li">
            <a href="#top" title="Home">Home</a>
          </li>
          <li className="header-nav-ul-li">
            <a href="#top" title="Sobre">Sobre</a>
          </li>
          <li className="header-nav-ul-li">
            <a href="#top" title="Serviços">Serviços</a>
          </li>
          <li className="header-nav-ul-li">
            <a href="#top" title="Contato">Contato</a>
          </li>
        </ul>
      </nav>
      
      <button
        onClick={() => authenticateVisitor()}
      >
        {visitor}
      </button>
    </header>
  )
}

export default Header;