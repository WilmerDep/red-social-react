/*IMPORTACION DE HOOK*/
import { useState } from "react";
import { Global } from "../../helpers/Global";
import { useForm } from "../../hooks/useForm";

export const Register = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("no_enviado");
  
  const saveUser = async (e) => {
    e.preventDefault(); // prevenir actualización de pantalla.

    // Recoger datos del formulario.
    let newUser = form;

    try {
      // Guardar usuario en la base de datos.
      const request = await fetch(Global.url + "user/registrar-usuario", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await request.json();
      if (data.status == "success") {
        setSaved("saved");
      } else {
        setSaved("error");
      }
    } catch (error) {
      console.error("Error al guardar usuario:", error.message);
      // Aquí podrías mostrar un mensaje de error al usuario o realizar alguna acción apropiada.
    }
  };

  return (
    <>
      <header className="content__header">
        <h1 className="content__title">Registrate</h1>
      </header>

      <div className="content__posts">
        {saved == "saved" ? (
          <h1 className="alert alert-success">Usuario guardado con Exito!!</h1>
        ) : (
          ""
        )}
        {saved == "error" ? (
          <h1 className="alert alert-danger">Erro al guardar Usuario!!</h1>
        ) : (
          ""
        )}

        <form action="register-form" onSubmit={saveUser}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="surname">Apellidos</label>
            <input type="text" name="surname" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="nick">Apodo</label>
            <input type="text" name="nick" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" name="email" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" onChange={changed} />
          </div>

          <input type="submit" value="Registrate" className="btn btn-success" />
        </form>
      </div>
    </>
  );
};
