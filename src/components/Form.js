import { useState } from "react";

export const Form = (props) => {
  const {
    toggleForm,
    accion,
    nuevoAmigo,
    setFormularioAbierto,
    editarAmigo,
    amigos,
    IdAmigo,
  } = props;
  const [amigo, setAmigo] = useState({
    id: "",
    nombre: "",
    apellido: "",
    valoracion: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (accion === "crear") {
      nuevoAmigo(amigo);
      setFormularioAbierto(false);
    } else if (accion === "modificar") {
      editarAmigo(amigo);
      setFormularioAbierto(false);
    }
  };

  return (
    <section className="formuario col-12">
      <form className="row" onSubmit={submitForm}>
        <div className="form-group col-3">
          <label htmlFor="nombre">Nombre:</label>
          <input
            className="form-control"
            type="text"
            id="nombre"
            value={amigo.nombre}
            onChange={(e) => setAmigo({ ...amigo, nombre: e.target.value })}
            maxLength="20"
            minLength="1"
          />
        </div>
        <div className="form-group col-3">
          <label htmlFor="apellido">Apellido:</label>
          <input
            className="form-control"
            type="text"
            id="apellido"
            value={amigo.apellido}
            onChange={(e) => setAmigo({ ...amigo, apellido: e.target.value })}
            maxLength="20"
            minLength="1"
          />
        </div>
        <div className="form-group col-3">
          <label htmlFor="valoracion">Valoración:</label>
          <select
            className="form-control"
            type="text"
            id="valoracion"
            value={amigo.valoracion}
            onChange={(e) => setAmigo({ ...amigo, valoracion: e.target.value })}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="col-3">
          <button className="btn btn-block btn-form" type="submit">
            {accion === "modificar" ? "Modificar" : "Crear"}
          </button>
          <button
            className="btn btn-block btn-form"
            type="button"
            onClick={toggleForm}
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
};
