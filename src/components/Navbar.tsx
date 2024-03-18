import '@/styles/index.scss'
import './Navbar.css'
import Image from 'next/image'
import React, { useState } from 'react'


import ImagePage from '../images/ConectaMinhaSaude2.png'

interface NavbarProps {
  name: string
  loggedIn: boolean
  onLogin: () => void
  onRegister: () => void
}

const Navbar: React.FC<NavbarProps> = ({
  name,
  loggedIn,
  onLogin,
  onRegister
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const userName = `${name.split(' ')[0]} ${name.split(' ')[1]}`

  return (
    <nav className="navbar flex flex-row items-center justify-between px-10 container mx-auto">
      <div className="navbar-left">
        <div className="dropdown" onClick={toggleDropdown}>
          <button className="dropbtn">Dropdown</button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="#">Área do Doutor</a>
              <a href="#">Ajuda e FAQ</a>
              <a href="#">Portal de privacidade</a>
            </div>
          )}
        </div>
      </div>
      <div className="navbar-center">
        <Image src={ImagePage} alt="conecta minha saude" className="size-12" />
      </div>
      {!loggedIn ? (
        <div className="navbar-right space-x-4">
          <button onClick={onLogin}>Entrar</button>
          <button onClick={onRegister}>Registrar</button>
        </div>
      ) : (
        <div className="navbar-right space-x-4">
          <h2>Bem vindo, {userName}</h2>
        </div>
      )}
    </nav>
  )
}

export default Navbar
