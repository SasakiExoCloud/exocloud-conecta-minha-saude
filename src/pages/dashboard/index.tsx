import '@/styles/index.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { useUser } from '@/contexts/UserContext'

import ImagePage from '../../images/ConectaMinhaSaude2.png'

export default function Login() {
  const { user } = useUser()
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    setAuth(!!user)
  }, [user])

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      {auth ? (
        <div>
          <Image
            src={ImagePage}
            alt="conecta minha saude"
            className="size-72"
          />
          <div className="flex w-1/2 flex-col items-center justify-center">
            <button
              className="mt-6 rounded bg-blue-600 p-5 text-white hover:bg-blue-700"
              type="button"
            >
              Autenticado
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
