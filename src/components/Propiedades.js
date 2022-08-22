import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props){
    return(
        <div>
            <h2>
                {props.porDefecto}
            </h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(",")}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
                <li>{props.arreglo.map(props.funcion).join(",")}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}

// Definir valores por defecto de las propiedades
Propiedades.defaultProps = {
    porDefecto: "Las Props", // Propiedad interna
};

// Validar tipo de dato de las propiedades y si es requerida o no
Propiedades.propTypes = {
    cadena: PropTypes.string.isRequired, //Requerida
    numero: PropTypes.number,
    booleano: PropTypes.bool,
    arreglo: PropTypes.array,
    objeto: PropTypes.object,
    funcion: PropTypes.func,
    componenteReact: PropTypes.element,
};