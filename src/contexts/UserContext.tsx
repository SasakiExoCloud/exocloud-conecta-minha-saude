import React, { ReactNode, createContext, useContext, useState } from 'react'

interface User {
  email: string
  password: string
}

interface UserContextType {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  username: string
  setUsername: React.Dispatch<React.SetStateAction<string>>
  isLogged: boolean
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  username: '',
  setUsername: () => {},
  isLogged: false,
  setIsLogged: () => {}
})

interface UserProviderProps {
  children: ReactNode
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [username, setUsername] = useState<string>('')
  const [isLogged, setIsLogged] = useState<boolean>(false)

  return (
    <UserContext.Provider
      value={{ user, setUser, username, setUsername, isLogged, setIsLogged }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUser = (): UserContextType => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser deve ser usado dentro de um UserProvider')
  }
  return context
}

export { UserContext, UserProvider, useUser }
