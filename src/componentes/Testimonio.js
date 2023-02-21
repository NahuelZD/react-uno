import React from "react";

export function Testimonio(props) {
    return(
        <div className="contenedor-testimonio">
            <img 
                className="imagen-testimonio"
                src={require(`../img/testimonio-${props.imagen}.png`)}
                alt='foto-testimonio' />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className="texto-testimonio" dangerouslySetInnerHTML={{__html: props.testimonio}}/>
            </div>
        </div>
    );
}