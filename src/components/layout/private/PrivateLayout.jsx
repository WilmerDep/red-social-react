import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const PrivateLayout = () => {
  return (
    <>
    {/*CABECERA PRIVADA*/}
    <Header />
     
     {/*CONTENIDO PRINCIPAL PRIVADO*/}
     <section className="layout__content">
        <Outlet />
     </section>

     {/* CARGAR BARRA LATERAL */}
     <aside className="layout__aside">
        <Sidebar />
     </aside>
    </>
  )
}
