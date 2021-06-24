import { FaPencilAlt, FaStar, FaTimes } from "react-icons/fa";

export const CardsAmigos = (props) => {
  const {
    amigo: { nombre, apellido, valoracion, id },
  } = props;
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
          <FaPencilAlt />
          <FaTimes />
        </div>
      </li>
    </div>
  );
};
