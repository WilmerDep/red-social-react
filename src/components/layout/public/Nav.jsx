import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar__container-lists">
      <ul className="container-lists__menu-list">
        <li className="menu-list__item">
          <NavLink to="/inicio-de-sesion"  className="menu-list__link">
            <i className="fa-solid fa-user"></i>
            <span className="menu-list__title">Inicio de Sesion</span>
          </NavLink>
        </li>

        <li className="list-end__item">
          <NavLink to="/registrate" className="list-end__link">
            <i className="fa-solid fa-user-plus"></i>
            <span className="list-end__name">Registrate</span>
          </NavLink>
        </li>
      
      </ul>
    </nav>
  );
};
