import React from 'react';
import { Link } from 'react-router-dom';
import './Portada.css';

function Portada(props){
    return(
        <>

            <div className="header">
                <img className="imgHeader" src="./img/ticket.jpg" alt=""/>

                <div className="texto">
                    <label>LAS MEJORES PELÍCULAS DEL MOMENTO</label>
                    <Link to={`${props.url}`}> VER LISTADO </Link>
                </div>
            </div>

            
        </>
        
    );
}

export default Portada;