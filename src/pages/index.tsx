import '@/styles/index.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CgPill } from 'react-icons/cg'
import {
  FaCalendarAlt,
  FaHeartbeat,
  FaMedkit,
  FaTooth,
  FaVial
} from 'react-icons/fa'
import { FaFlaskVial, FaWifi } from 'react-icons/fa6'
import { GiScalpel } from 'react-icons/gi'
import { IoLocation } from 'react-icons/io5'
import { MdSmartphone } from 'react-icons/md'
import { TbVaccine } from 'react-icons/tb'

import Navbar from '@/components/Navbar'
import { useUser } from '@/contexts/UserContext'

import ImagePage from '../images/ConectaMinhaSaude.png'

export default function Home() {
  const { user, username, isLogged, setIsLogged } = useUser()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_auth, setAuth] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const getToken = localStorage.getItem('user-token')
    const userToken = getToken ? JSON.parse(getToken) : null
    setAuth(!!userToken)
    setIsLogged(!!userToken)
    console.log('Token do Usuário resgatado do local: ', userToken)
  }, [user, setIsLogged])

  return (
    <div className="min-h-screen w-full ">
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
      <main>
        <section className="bg-gray-200 py-20">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="mr-10 w-1/2">
              <h1 className="mb-4 text-4xl font-bold text-[#004651]">
                Cuidar da saúde das pessoas para melhorar o mundo.
              </h1>
              <p className="mb-8 text-lg font-semibold text-[#004651]">
                Sem burocracia, sem fila e sem susto pra pagar. Agende também
                pelo telefone.
              </p>
              <button className="rounded bg-[#00a181] px-4 py-2 font-bold text-white hover:bg-[#004651]">
                Conheça o Conecta Minha Saúde
              </button>
            </div>
            <div className="ml-10 w-2/6">
              <Image
                src={ImagePage}
                alt="conecta minha saude"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="mx-auto mt-8 flex max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-6 gap-4">
              <div className="rounded border-2 border-[#00a181] bg-[#a4e473] bg-white p-4 font-semibold text-[#004651] shadow-md">
                <IoLocation className="size-10" />
                Agendar consulta presencial
                <p className="text-sm font-normal">a partir de R$10,00</p>
              </div>
              <div className="rounded border-2 border-[#00a181] bg-[#a4e473] bg-white p-4 font-semibold text-[#004651] shadow-md">
                <MdSmartphone className="size-10 text-[#004651]" />
                Agendar consulta online
                <p className="text-sm font-normal">a partir de R$10,00</p>
              </div>
              <div className="rounded border-2 border-[#00a181] bg-[#a4e473] bg-white p-4 font-semibold text-[#004651] shadow-md">
                <FaVial className="size-10 text-[#004651]" />
                Agendar exames
                <p className="text-sm font-normal">a partir de R$10,00</p>
              </div>
              <div className="rounded border-2 border-[#00a181] bg-[#a4e473] bg-white p-4 font-semibold text-[#004651] shadow-md">
                <FaTooth className="size-10 text-[#004651]" />
                Agendar dentista
                <p className="text-sm font-normal">a partir de R$10,00</p>
              </div>
              <div className="rounded border-2 border-[#00a181] bg-[#a4e473] bg-white p-4 font-semibold text-[#004651] shadow-md">
                <TbVaccine className="size-10 text-[#004651]" />
                Agendar vacinas
                <p className="text-sm font-normal">a partir de R$10,00</p>
              </div>
              <div className="rounded border-2 border-[#00a181] bg-[#a4e473] bg-white p-4 font-semibold text-[#004651] shadow-md">
                <GiScalpel className="size-10 text-[#004651]" />
                Agendar cirurgias
                <p className="text-sm font-normal">a partir de R$10,00</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#a4e473] py-20">
          <div className="mx-auto flex max-w-7xl justify-between px-4 sm:px-6 lg:px-8">
            <div className="w-2/5 pr-8">
              <h2 className="mb-4 text-3xl font-bold text-[#004651]">
                Conheça o Conecta Minha Saúde
              </h2>
              <p className="mb-8 text-lg font-semibold text-[#004651]">
                Você pode fazer consultas e exames por um preço ainda mais
                acessível.
              </p>
            </div>
            <div className="w-3/5 pl-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center rounded border-2 border-[#00a181] bg-[#00bf63] p-4 text-[#004651] shadow-md">
                  <FaFlaskVial className="size-10 w-1/6 pr-2" />
                  <div className="w-5/6">
                    <h3 className="text-sm font-bold">Exames</h3>
                    <p className="text-sm font-semibold">
                      30% de desconto em qualquer exame.
                    </p>
                  </div>
                </div>
                <div className="flex items-center rounded border-2 border-[#00a181] bg-[#00bf63] p-4 text-[#004651] shadow-md">
                  <FaCalendarAlt className="size-10 w-1/6 pr-2" />
                  <div className="w-5/6">
                    <h3 className="text-sm font-bold">Agendamentos</h3>
                    <p className="text-sm font-semibold">
                      Possibilidade de agendamento até para o mesmo dia.
                    </p>
                  </div>
                </div>
                <div className="flex items-center rounded border-2 border-[#00a181] bg-[#00bf63] p-4 text-[#004651] shadow-md">
                  <FaWifi className="size-10 w-1/6 pr-2" />
                  <div className="w-5/6">
                    <h3 className="text-sm font-bold">
                      Teleconsulta com Clínico Geral sem agendamento e sem
                      custo.
                    </h3>
                    <p className="text-sm font-semibold">
                      30% de desconto em qualquer exame.
                    </p>
                  </div>
                </div>
                <div className="flex items-center rounded border-2 border-[#00a181] bg-[#00bf63] p-4 text-[#004651] shadow-md">
                  <FaMedkit className="size-10 w-1/6 pr-2" />
                  <div className="w-5/6">
                    <h3 className="text-sm font-bold">Consultas</h3>
                    <p className="text-sm font-semibold">
                      Consultas presenciais por R$39 com Clínico Geral e R$59 em
                      qualquer especialidade.
                    </p>
                  </div>
                </div>
                <div className="flex items-center rounded border-2 border-[#00a181] bg-[#00bf63] p-4 text-[#004651] shadow-md">
                  <FaHeartbeat className="size-10 w-1/6 pr-2" />
                  <div className="w-5/6">
                    <h3 className="text-sm font-bold">Dependentes</h3>
                    <p className="text-sm font-semibold">
                      Inclua até 4 dependentes sem precisar de vínculo familiar.
                    </p>
                  </div>
                </div>
                <div className="flex items-center rounded border-2 border-[#00a181] bg-[#00bf63] p-4 text-[#004651] shadow-md">
                  <CgPill className="size-10 w-1/6 pr-2" />
                  <div className="w-5/6">
                    <h3 className="text-sm font-bold">
                      Descontos em medicamentos
                    </h3>
                    <p className="text-sm font-semibold">
                      A partir 15% de desconto na Droga Raia e Drogasil para
                      medicamentos tarjados e com prescrição.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
