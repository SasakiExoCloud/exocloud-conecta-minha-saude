import '@/styles/index.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Navbar from '@/components/Navbar'
import { useUser } from '@/contexts/UserContext'

import ImagePage from '../images/ConectaMinhaSaude2.png'

export default function Home() {
  const { user, username, isLogged, setIsLogged } = useUser()
  const [auth, setAuth] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const getToken = localStorage.getItem('user-token')
    const userToken = getToken ? JSON.parse(getToken) : null
    setAuth(!!userToken)
    setIsLogged(!!userToken)
    console.log('Token do Usuário resgatado do local: ', userToken)
  }, [user, setIsLogged])

  return (
    <div className="min-h-screen w-full">
      <Navbar
        name={username}
        loggedIn={isLogged}
        onLogin={() => {
          router.push('/login')
        }}
        onRegister={() => {
          router.push('/create-account')
        }}
      />
      {/* {auth ? (
        <div>
          <div className="flex w-1/2 flex-col items-center justify-center">
            <button
              className="mt-6 rounded bg-blue-600 p-5 text-white hover:bg-blue-700"
              type="button"
            >
              Autenticado
            </button>
          </div>
        </div>
      ) : null} */}
    </div>
  )
}
