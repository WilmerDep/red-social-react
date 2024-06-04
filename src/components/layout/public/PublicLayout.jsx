import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const PublicLayout = () => {
  return (
   <>
   {/*CABECERA PRIVADA*/}
    <Header />
    
    {/*CONTENIDO PRINCIPAL PUBLICO*/}
    <section className="layout__content">
        <Outlet />
    </section>
   </>
  )
}
