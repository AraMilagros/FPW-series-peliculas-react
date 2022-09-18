/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Pelicula.css';

function Pelicula(props){
    return (
        <div className="pelicula">
            <img src={props.urlImg} alt=""/>
            <div className="descripcion">
                <label>{props.titulo}</label>
                <p>{props.descripcion}</p>
                <a href="#">TICKET</a>
            </div>
            <div className="critica">
                <img src="./img/star.png" alt=""/>
                <label>DIAS Y HORARIOS</label>
            </div>
        </div>
        
    );
}

export default Pelicula;