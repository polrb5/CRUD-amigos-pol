export const Form = (props) => {
  const { setFormularioAbierto } = props;
  return (
    <section className="formuario col-12">
      <form className="row">
        <div className="form-group col-3">
          <label htmlFor="nombre">Nombre:</label>
          <input className="form-control" type="text" id="nombre" />
        </div>
        <div className="form-group col-3">
          <label htmlFor="apellido">Apellido:</label>
          <input className="form-control" type="text" id="apellido" />
        </div>
        <div className="form-group col-3">
          <label htmlFor="valoracion">Valoración:</label>
          <select className="form-control" type="text" id="valoracion">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="col-3">
          <button className="btn btn-form">Crear</button>
          <button
            className="btn btn-form"
            onClick={() => setFormularioAbierto(false)}
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
};
