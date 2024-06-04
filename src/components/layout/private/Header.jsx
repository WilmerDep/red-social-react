import { NavLink } from "react-router-dom";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <>
      <header className="layout__navbar">
        <div className="navbar__header">
           <NavLink to="/inicio-de-sesion"  className="navbar__title">
            REACTSOCIAL
            </NavLink>
        </div>
        <Nav/>
      </header>
    </>
  );
};
