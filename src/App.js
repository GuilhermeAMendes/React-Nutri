import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    const loadApi = async () => {
      try {
        let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
        const res = await fetch(url);
        const data = await res.json();
        setNutri(data);
      } catch (e) {
        console.log("Ocorreu um erro ao tentar buscar os dados na API", e);
      }
    };
    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <h1>{item.categoria}</h1>
            <strong className="titulo">{item.subtitulo}</strong>
            <img src={item.capa} alt={item.subtitulo} className="capa" />
            <p className="subtitulo">{item.subtitulo}</p>
            <a className="botao" href="a">
              Acessar
            </a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
