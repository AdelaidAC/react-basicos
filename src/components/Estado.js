import React, { Component } from "react";

function EstadoAHijo(props) {
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );
}



export default class Estado extends Component {

    // Se define el State en el Constructor
    constructor(props)
    {
        // Se manda llamar el constructor del objeto del cual hereda (Component)
        super(props);

        // Aqui estamos creando el objeto del State
        this.state = {
            contador: 0,
        }

        // Cada segundo (1000ms) el contador se ira actualizando
        /*setInterval(() => {

            this.setState({
                contador: this.state.contador + 1
            });

            // this.state.contador += 1; ES INCORRECTO porque vuelve a renderizar todo el componente

        }, 1000);*/

    }

    render(){
        return(
            <div>

                <h2>El State</h2>
                <p>{this.state.contador}</p>
                
                <EstadoAHijo contadorHijo={this.state.contador}/> 
            
            </div>
        );
    }

}