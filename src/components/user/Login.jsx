import { useState } from "react";
import { Global } from "../../helpers/Global";
import { useForm } from "../../hooks/useForm";

export const Login = () => {
  const { form, changed } = useForm({});
  const [logined, setLogined] = useState ("no_enviado");

  const userLogin = async (e) =>{
    e.preventDefault();

    let userToLogin = form;
     // Guardar usuario en la base de datos.
     const request = await fetch(Global.url + "user/inicio-de-sesion", {
      method: "POST",
      body: JSON.stringify(userToLogin),
      headers: {
        "Content-Type": "application/json",
      },
    });

    
    const data = await request.json();
    console.log(data);

    if (data.status == "success") {
      // Persistir los datos en el navegador.  
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.usersLogin));

      setLogined("login");
    } else {
      setLogined("error");
    }
  }

  /*----------------*/
  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Iniciar Sesion</h1>
      </header>

      <div className="content__posts">
      {logined == "login" ? (
          <h1 className="alert alert-success">Has Iniciado Sesion con Exito!!</h1>
        ) : (
          ""
        )}
        {logined == "error" ? (
          <h1 className="alert alert-danger">Erro al Iniciado Sesion!!</h1>
        ) : (
          ""
        )}

          <form className="login-form" onSubmit={userLogin}>
            <div className="form-group">
              <label htmlFor="email">Correo</label>
              <input type="email" name="email"  onChange={changed} /> 
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" onChange={changed} /> 
            </div>
            <input type="submit" value="Identificate" className="btn btn-success" />
          </form>
      </div>
    </>
  )
}
