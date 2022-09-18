/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Cabecera.css';

function Cabecera(){
    return(
        <header class="header">
            <a href="#">CINE AR</a>
            <div class="iconos">
                {/* <i className="fa-brands fa-facebook icon"></i> */}
                <ion-icon clasName="iconos-f" name="logo-facebook"></ion-icon>
                <ion-icon clasName="iconos-i" name="logo-instagram"></ion-icon>
                <ion-icon clasName="iconos-t" name="logo-twitter"></ion-icon>
            </div>
        </header>
    );
}

export default Cabecera;