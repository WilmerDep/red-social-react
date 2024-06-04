import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { PublicLayout } from "../components/layout/public/PublicLayout";
import { Login } from "../components/user/Login";
import { Register } from "../components/user/Register";
import { PrivateLayout } from "../components/layout/private/PrivateLayout";
import { Feed } from "../components/publication/Feed";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />} />
          <Route path="inicio-de-sesion" element={<Login />} />
          <Route path="registrate" element={<Register />} />
        </Route>

        <Route path="/admin" element={<PrivateLayout />}>
          <Route index element={<Feed />} />
          <Route path="feed" element={<Feed />} />
        </Route>

        <Route
          path="*"
          element={
            <>
              <p>
                <h1> Error 404 </h1>
                <h3> La pagina que busca no existe </h3>
                <Link to="/"> Volver al Inicio</Link>
              </p>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
