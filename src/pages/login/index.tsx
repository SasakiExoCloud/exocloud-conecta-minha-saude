import '@/styles/index.scss'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import { useUser } from '@/contexts/UserContext'

import ImagePage from '../../images/ConectaMinhaSaude2.png'

export default function Login() {
  const { user, setUser } = useUser()
  const router = useRouter()
  const [visiblePassword, setVisiblePassword] = useState(false)

  const { register, handleSubmit } = useForm()

  // const onSubmit = data => console.log(data)

  // Função criada unicamente com a função de debug, chamada pelo botão na tela de login para verificar o estado
  // Tal alternativa foi optada por mim, devido ao UserContext do Typescript não estar atualizando no escopo
  // da função responsável pelo fetch mesmo após aplicar abordagem assíncrona
  const checkUser = () => {
    console.log('Retorno do Context: ', user)
  }

  const onSubmit = async data => {
    // Teste de contexto global
    console.log('O que será colocado no Context: ', data)
    try {
      const response = await axios.post(
        'https://wgr816ve35.execute-api.us-east-2.amazonaws.com/prod/auth',
        data
      )
      console.log('Resposta: ', response.data)
      console.log('Token do usuário: ', response.data.token)
      setUser(data)
      // Teste de local storage (cookie é uma abordagem melhor)
      localStorage.setItem('user-token', JSON.stringify(response.data.token))
      router.push('/dashboard')
    } catch (error) {
      // É apenas para fins de teste que utilizo o push e a alteração do estado global
      // mesmo após o erro para testar se a implementação funciona de maneira adequada
      // Já que tenho limitações no que consigo fazer por falta de conectividade a API.
      console.error('Erro ao enviar os dados: ', error)
      // setUser(data)
      // router.push('/dashboard')
    }
  }

  const handlePassword = () => {
    console.log('entrei na funcao')
    setVisiblePassword(!visiblePassword)
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Image src={ImagePage} alt="conecta minha saude" className="size-72" />
      <div className="flex w-1/2 flex-col items-center justify-center">
        <h1 className="py-5 text-4xl font-semibold tracking-wide text-gray-800">
          Faça seu Login
        </h1>
        <form className="flex w-2/3 flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Email"
            className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
            {...register('email')}
          />
          <div className="mt-6 flex items-center  justify-between rounded border-2 border-solid border-gray-300 p-5 ">
            <input
              placeholder="Senha"
              type={visiblePassword ? 'text' : 'password'}
              className="w-full outline-none"
              {...register('password')}
            />
            {visiblePassword ? (
              <FaEye
                onClick={() => {
                  handlePassword()
                }}
                className="cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => {
                  handlePassword()
                }}
                className="cursor-pointer"
              />
            )}
          </div>
          <span className="mt-6 cursor-pointer text-base text-gray-500 underline hover:text-gray-700">
            <Link href={'/remember-login'}>Esqueceu sua senha? </Link>
          </span>
          <button
            className="mt-6 rounded bg-blue-600 p-5 text-white hover:bg-blue-700"
            type="submit"
          >
            Entrar
          </button>
          <span className="mt-6 text-base text-gray-500">
            Não tem uma conta?{' '}
            <Link
              href={'/create-account'}
              className="text-blue-500 underline hover:text-blue-700"
            >
              Crie agora
            </Link>
          </span>
        </form>
        <button
          className="mt-6 rounded bg-blue-600 p-5 text-white hover:bg-blue-700"
          type="button"
          onClick={checkUser}
        >
          Verificar estado
        </button>
      </div>
    </div>
  )
}
