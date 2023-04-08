import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import '../specialNav.css';
import './plantillas.css';
import ContenidoPlantilla from "../contenidoPlantilla/contenidoPlantilla";

export default function Plantillas(){
    const searchInputRef = useRef();
    const history = useNavigate('');

    useState(() => {
        history('/plantillas');
    }, [])

    const handleClick = (lel) => {
        console.log(lel);
        const query = {
            section: lel
        }

        const queryString = new URLSearchParams(query).toString();
        history('/plantillas?' + queryString);
    }

    return(
        <body className="page-content margins">
            <Helmet>
                <title>Plantillas HTML para Sitios Web: Facilita la Creación de tu Página con Nuestras Plantillas</title>
            </Helmet>
            <div id="tep">
                <h1 className="center-text">Elige lo que más te Convenga</h1>
                <div className="big-grid">
                    <div className="big-grid-card" onClick={() => handleClick('freelance')}>
                        <div className="big-grid-img">
                            <img src="https://cdn-icons-png.flaticon.com/512/6104/6104656.png" />
                        </div>
                        <h2>Freelancer</h2>
                    </div>

                    <div className="big-grid-card" onClick={() => handleClick('negocio')}>
                        <div className="big-grid-img">
                            <img src="https://cdn-icons-png.flaticon.com/512/2210/2210201.png"/>
                        </div>
                        <h2>Negocio</h2>
                    </div>

                    <div className="big-grid-card" onClick={() => handleClick('musica')}>
                        <div className="big-grid-img">
                            <img src="https://cdn-icons-png.flaticon.com/512/10123/10123072.png" />
                        </div>
                        <h2>Músico</h2>
                    </div>

                    <div className="big-grid-card" onClick={() => handleClick('restaurante')}>
                        <div className="big-grid-img">
                            <img src="https://cdn-icons-png.flaticon.com/512/7687/7687453.png"/>
                        </div>
                        <h2>Restaurante</h2>
                    </div>
                </div>
            </div>

            <ContenidoPlantilla />
        </body>
    )
}