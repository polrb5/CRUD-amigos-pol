import { useEffect, useState } from "react";
import { Boton } from "./components/Boton";
import { CardsAmigos } from "./components/CardsAmigos";
import { Form } from "./components/Form";

function App() {
  const [amigos, setAmigos] = useState([]);
  const [formularioAbierto, setFormularioAbierto] = useState(false);
  const [accion, setAccion] = useState(null);
  const [idAmigo, setIdAmigo] = useState(null);

  const toggleForm = () => {
    setFormularioAbierto(!formularioAbierto);
  };

  const urlAPI = "http://localhost:3001/amigos/";
  const amigosAPI = async () => {
    const response = await fetch(urlAPI);
    if (!response.ok) {
      return;
    }
    const datos = await response.json();
    setAmigos(datos);
  };
  useEffect(() => {
    amigosAPI();
  }, []);

  const nuevoAmigo = async (amigoACrear) => {
    const amigoCreado = await fetch(urlAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(amigoACrear),
    });
    if (amigoCreado) {
      setAmigos([...amigos, amigoACrear]);
    }
  };

  const borrarAmigo = async (amigoABorrar) => {
    const response = await fetch(urlAPI + amigoABorrar.id, {
      method: "DELETE",
    });
    if (response) {
      setAmigos(amigos.filter((amigo) => amigo.id !== amigoABorrar.id));
    }
  };
  const editarAmigo = async (amigoAEditar) => {
    const amigoModificado = await fetch(urlAPI + amigoAEditar.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(amigoAEditar),
    });
    if (amigoModificado) {
      setAmigos(
        amigos.map((amigo) => {
          if (amigo.id === amigoModificado.id) {
            return amigoModificado;
          } else {
            return amigo;
          }
        })
      );
    }
  };

  return (
    <div className="container">
      <header className="row">
        <h1 className="col">Gestión de mis {amigos.length} amigos</h1>
      </header>
      <main className="row">
        {!formularioAbierto && (
          <Boton toggleForm={toggleForm} setAccion={setAccion} />
        )}
        {formularioAbierto && (
          <Form
            toggleForm={toggleForm}
            accion={accion}
            nuevoAmigo={nuevoAmigo}
            setFormularioAbierto={setFormularioAbierto}
            editarAmigo={editarAmigo}
            amigos={amigos}
            setIdAmigo={setIdAmigo}
          />
        )}
        <section className="cards-amigos col">
          <ul className="row list-unstyled">
            {amigos.map((amigo) => (
              <CardsAmigos
                amigo={amigo}
                key={amigo.id}
                toggleForm={toggleForm}
                setAccion={setAccion}
                borrarAmigo={borrarAmigo}
                idAmigo={idAmigo}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
