export const Boton = (props) => {
  const { setFormularioAbierto } = props;
  return (
    <section className="btn-crear col-12">
      <button className="btn" onClick={() => setFormularioAbierto(true)}>
        Crear amigo
      </button>
    </section>
  );
};
