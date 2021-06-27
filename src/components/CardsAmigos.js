import { useCallback } from "react";
import { FaPencilAlt, FaStar, FaTimes } from "react-icons/fa";

export const CardsAmigos = (props) => {
  const {
    amigo: { nombre, apellido, valoracion, id },
    toggleForm,
    setAccion,
    borrarAmigo,
    amigo,
    setIdAmigo,
  } = props;

  /*  const getId = useCallback(() => {
    setIdAmigo(id);
  }, [id, setIdAmigo]); */
  return (
    <div className="card-padre col-4">
      <li className="card-amigo">
        <ul className="datos-amigo list-unstyled">
          <li> Nombre: {nombre} </li>
          <li>Apellido: {apellido}</li>
          <li>
            Valoración:
            {valoracion >= 1 && <FaStar />}
            {valoracion >= 2 && <FaStar />}
            {valoracion >= 3 && <FaStar />}
          </li>
        </ul>
        <div className="iconos">
          <FaPencilAlt
            onClick={() => {
              toggleForm();
              setAccion("modificar");
              // getId();
            }}
          />
          <FaTimes onClick={() => borrarAmigo(amigo)} />
        </div>
      </li>
    </div>
  );
};
