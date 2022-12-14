import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>

        <section>
          
          <hr/>

          <Componente msg="Hola soy un Componente Funcional Expresado desde una prop"/>
          
          <hr/>
          
          <Propiedades 
            cadena="String" 
            numero={5}
            booleano={true}
            arreglo={[1,2,3]}
            objeto={
              {
                nombre:"Adelaid", 
                correo:"a@gmail.com"
              }
            }
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento react (JSX)</i>}
            componenteReact={<Componente msg="Soy un componente pasado como Prop"/>}
          />

          <hr/>

          <Estado/>

          <hr/>

          <RenderizadoCondicional/>

          <hr/>

          <RenderizadoElementos/>

        </section>
      </header>
    </div>
  );
}

export default App;
