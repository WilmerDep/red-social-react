import { createContext } from "react"

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
  return (
    <div>AuthProvider</div>
  )
}
