import { useEffect, useState } from "react";
import { Boton } from "./components/Boton";
import { CardsAmigos } from "./components/CardsAmigos";
import { Form } from "./components/Form";

function App() {
  const [amigos, setAmigos] = useState([]);
  const [formularioAbierto, setFormularioAbierto] = useState(false);

  const urlAPI = "http://localhost:3001/amigos";
  const amigosAPI = async () => {
    const response = await fetch(urlAPI);
    const datos = await response.json();
    setAmigos(datos);
  };
  useEffect(() => {
    amigosAPI();
  }, []);
  return (
    <div className="container">
      <header className="row">
        <h1 className="col">Gestión de mis {amigos.length} amigos</h1>
      </header>
      <main className="row">
        {!formularioAbierto && (
          <Boton setFormularioAbierto={setFormularioAbierto} />
        )}
        {formularioAbierto && (
          <Form setFormularioAbierto={setFormularioAbierto} />
        )}
        <section className="cards-amigos col">
          <ul className="row list-unstyled">
            {amigos.map((amigo) => (
              <CardsAmigos amigo={amigo} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
