import '@/styles/index.scss'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { checkCPF } from '@/utils/checkCPF'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'

import ImagePage from '../../images/ConectaMinhaSaude2.png'

const validateCPF = (value: string | undefined): boolean => {
  if (value !== undefined && checkCPF(value)) {
    return true
  } else {
    return false
  }
}

const schema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('O e-mail é obrigatório'),
  document: yup
    .string()
    .test('CPF válido', 'CPF inválido', value => validateCPF(value))
    .required('O CPF é obrigatório'),
  phone: yup
    .string()
    .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone inválido')
    .required('O telefone é obrigatório'),
  crmCode: yup
    .string()
    .matches(/^\d{2}\.\d{3}\.\d{2}$/, 'CRM inválido')
    .required('O CRM é obrigatório'),
  medicalSpecialty: yup.string().required('A especialidade é obrigatória')
})

export default function CreateAccount() {
  const [page, setPage] = useState(1)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data)

  const handleNextPage = () => {
    setPage(page + 1)
  }

  const handleBackPage = () => {
    setPage(page - 1)
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Image src={ImagePage} alt="conecta minha saude" className="size-60 cursor-pointer" onClick={() => router.back()} />
      {page === 1 && (
        <div className="flex w-1/2 flex-col items-center justify-center">
          <form
            className="flex w-2/3 flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="Nome"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...register('name')}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <input
              placeholder="Email"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...register('email')}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input
              placeholder="CPF"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...register('document')}
            />
            {errors.document && <p>{errors.document.message}</p>}
            <input
              placeholder="Telefone"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...register('phone')}
            />
            {errors.phone && <p>{errors.phone.message}</p>}
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
          <form
            className="flex w-2/3 flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="CRM"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...(errors.crmCode && <p>{errors.crmCode.message}</p>)}
              {...register('crmCode')}
            />
            {errors.crmCode && <p>{errors.crmCode.message}</p>}
            <input
              placeholder="Especialidade médica"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...register('medicalSpecialty')}
            />
            {errors.medicalSpecialty && (
              <p>{errors.medicalSpecialty.message}</p>
            )}
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
            {errors.crmCode && <p>{errors.crmCode.message}</p>}
            <input
              placeholder="Especialidade médica"
              className="mt-6 rounded border-2 border-solid border-gray-300 p-5 outline-none"
              {...register('medicalSpecialty')}
            />
            {errors.medicalSpecialty && (
              <p>{errors.medicalSpecialty.message}</p>
            )}
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
