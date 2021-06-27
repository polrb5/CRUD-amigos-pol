export const Boton = (props) => {
  const { toggleForm, setAccion } = props;
  return (
    <section className="btn-crear col-12">
      <button
        className="btn"
        onClick={() => {
          toggleForm();
          setAccion("crear");
        }}
      >
        Crear amigo
      </button>
    </section>
  );
};
