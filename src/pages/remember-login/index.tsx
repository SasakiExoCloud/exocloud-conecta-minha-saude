import '@/styles/index.scss'

import Image from 'next/image'

import ImagePage from '../../images/ConectaMinhaSaude2.png'

export default function RememberLogin() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Image src={ImagePage} alt="conecta minha saude" className="size-72" />
      <div className="flex w-1/3 flex-col">
        <h1 className="py-5 text-4xl font-semibold tracking-wide text-gray-800 ">
          Recuperar senha
        </h1>
        <p className="text-sm text-gray-500">
          Preencha o campo de e-mail abaixo para recuperar sua conta.
        </p>
        <input
          placeholder="Email"
          className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
        />
        <button className="mt-6 rounded bg-blue-600 p-5 font-semibold text-white hover:bg-blue-700">
          Recuperar Conta
        </button>
      </div>
    </div>
  )
}
