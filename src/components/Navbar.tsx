import '@/styles/index.scss'
import './Navbar.css'
import Image from 'next/image'
import React, { useState } from 'react'
import { CgMenu } from 'react-icons/cg'

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
    <nav className="navbar mx-auto flex flex-row items-center justify-between  bg-[#00BF63] px-8 text-white">
      <div className="navbar-left">
        <div className="dropdown" onClick={toggleDropdown}>
          <CgMenu className="size-6 text-black cursor-pointer" />
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
          <button
            className="rounded bg-[#00a181] px-4 py-1 font-bold text-white hover:bg-[#004651]"
            onClick={onLogin}
          >
            Entrar
          </button>
          <button
            className="rounded bg-[#00a181] px-4 py-1 font-bold text-white hover:bg-[#004651]"
            onClick={onRegister}
          >
            Registrar
          </button>
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
