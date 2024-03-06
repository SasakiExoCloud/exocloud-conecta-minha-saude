import '@/styles/index.scss'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

// import Image from 'next/image';
// import ImagePage from '../../images/ConectaMinhaSaude2.png'

export default function CreateAccount() {
  const [page, setPage] = useState(1)

  const { register, handleSubmit } = useForm()

  const onSubmit = data => console.log(data)

  const handleNextPage = () => {
    setPage(page + 1)
  }

  const handleBackPage = () => {
    setPage(page - 1)
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      {/* <Image src={ImagePage} alt='conecta minha saude' className='size-36' /> */}
      {page === 1 && (
        <div className="flex w-1/2 flex-col items-center justify-center">
          {/* <h6 className="text-gray-800 text-lg  font-semibold tracking-wide">Boas vindas!</h6> */}
          <form
            className="flex w-2/3 flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="Nome"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...register('name')}
            />
            <input
              placeholder="Email"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...register('email')}
            />
            <input
              placeholder="CPF"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...register('document')}
            />
            <input
              placeholder="Telefone"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...register('phone')}
            />
            <button
              className="mt-6 rounded bg-blue-600 p-5 text-white hover:bg-blue-700"
              type="submit"
              onClick={() => {
                handleNextPage()
              }}
            >
              Proximo
            </button>
          </form>
        </div>
      )}
      {page === 2 && (
        <div className="flex w-1/2 flex-col items-center justify-center">
          {/* <h6 className="text-gray-800 text-lg  font-semibold tracking-wide">Boas vindas!</h6> */}
          <form
            className="flex w-2/3 flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="CRM"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...register('crmCode')}
            />
            <input
              placeholder="Especialidade médica"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...register('medicalSpecialty')}
            />
            {/* <input placeholder="Telefone" className='outline-none border-solid border-2 border-gray-300 p-5 mt-6 rounded' {...register('phone')} /> */}
            <div className="flex w-full items-center justify-between ">
              <button
                className="mt-6 w-[48%] rounded bg-zinc-600 p-5 text-white hover:bg-zinc-700"
                type="submit"
                onClick={() => {
                  handleBackPage()
                }}
              >
                Voltar
              </button>
              <button
                className="mt-6 w-[48%] rounded bg-blue-600 p-5 text-white hover:bg-blue-700"
                type="submit"
                onClick={() => {
                  handleNextPage()
                }}
              >
                Proximo
              </button>
            </div>
          </form>
        </div>
      )}
      {page === 3 && (
        <div className="flex w-1/2 flex-col items-center justify-center">
          {/* <h6 className="text-gray-800 text-lg  font-semibold tracking-wide">Boas vindas!</h6> */}
          <form
            className="flex w-2/3 flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="CRM"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...register('crmCode')}
            />
            <input
              placeholder="Especialidade médica"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...register('medicalSpecialty')}
            />
            {/* <input placeholder="Telefone" className='outline-none border-solid border-2 border-gray-300 p-5 mt-6 rounded' {...register('phone')} /> */}
            <button
              className="mt-6 rounded bg-blue-600 p-5 text-white hover:bg-blue-700"
              type="submit"
              onClick={() => {
                console.log('entrei')
              }}
            >
              Criar Conta
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
