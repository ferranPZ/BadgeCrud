// const element = document.createElement("h1")
// element.innerHTML = "hola mundo esto es un encabezado"

// const container = document.getElementById("app")
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

import './global.css'
import 'bootstrap/dist/css/bootstrap.css'

import App from '../src/components/App.js'

const container = document.getElementById("app");
ReactDOM.render(<App />,container)














// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

// import React from 'react';
// import ReactDOM from 'react-dom';

// const element = <h1>Hello, Platzi Badges!</h1>;

// const container = document.getElementById('app');

// // ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(element, container);
