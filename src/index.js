import React from "react";
import ReactDOM from "react-dom";

const nombre = "Brandon Argel";

const jsx = (
  <div>
    <h1>Hola, soy {nombre}</h1>
    <p>Soy desarrollador web</p>
  </div>
);

const container = document.getElementById("app");

// ReactDOM.render(_qué_, _dónde_)
ReactDOM.render(jsx, container);
