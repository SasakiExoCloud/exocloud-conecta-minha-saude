import { NextPage } from 'next'
import '@/styles/index.scss'

const HomePage: NextPage = () => {
  return (
    <main className="flex h-screen w-screen items-start justify-center">
      <h1 className="text-5xl">Hello World</h1>
    </main>
  )
}

export default HomePage
