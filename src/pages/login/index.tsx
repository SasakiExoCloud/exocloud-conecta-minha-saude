import '@/styles/index.scss'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import * as yup from 'yup'

import { useUser } from '@/contexts/UserContext'
import { yupResolver } from '@hookform/resolvers/yup'

import ImagePage from '../../images/ConectaMinhaSaude2.png'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('Digite seu e-mail'),
  password: yup.string().required('Digite a senha')
})

export default function Login() {
  const { setUser, setUsername } = useUser()
  const router = useRouter()
  const [visiblePassword, setVisiblePassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    try {
      const response = await axios.post(
        'https://wgr816ve35.execute-api.us-east-2.amazonaws.com/prod/auth',
        data
      )
      setUser(data)
      setUsername(response.data.user.name)
      localStorage.setItem('user-token', JSON.stringify(response.data.token))
      router.back()
    } catch (error) {
      console.error('Erro ao enviar os dados: ', error)
    }
  }

  const handlePassword = () => {
    setVisiblePassword(!visiblePassword)
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Image src={ImagePage} alt="conecta minha saude" className="size-72 cursor-pointer" onClick={() => router.back()} />
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
          {errors.email && <p>{errors.email.message}</p>}
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
          {errors.password && <p>{errors.password.message}</p>}
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
            Não tem uma conta?
            <Link
              href={'/create-account'}
              className="text-blue-500 underline hover:text-blue-700"
            >
              Crie agora
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}
