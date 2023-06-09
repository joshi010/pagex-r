import React from "react";
import { Adsense } from '@ctrl/react-adsense';
import { Helmet } from "react-helmet";
import '../specialNav.css';
import './articulos.css';
import routeData from "./routeData";
import ContenidoDinamico from "./contenidodinamico";
import { Link } from "react-router-dom";

export default function Articulos () {
    

    return (
        <div className="page-content margins barra-art">
            <Helmet>
                <title>Preguntas Frecuentes sobre Desarrollo Web: Respuestas para Programadores Jr y No Programadores</title>
            </Helmet>
            <div className="ads-and-stuff">
                <div className="articulos-barra">
                    <h2>Artículos</h2>
                    <ul>
                        {
                            routeData.map((x,i) => {
                                return(

                                    <Link style={{textDecoration:'none', color:'purple'}} to={`/articulos/${x.link}`} title={x.name}>
                                        <li key={i}>
                                            {x.name}
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
                <Adsense 
                    className="no-show"
                    client="ca-pub-8147046340459290"
                    slot="1553707869"
                    style={{width:'300px', height:'430px'}}
                    format=""
                />
                <Adsense
                    className="no-show"
                    id="no-show"
                    client="ca-pub-8147046340459290"
                    slot="3367931532"
                    format="fluid"
                />
                <div className="line">

                </div>
            </div>
            <div className="contenido-contenedor">
                <div className="contenido">
                    <ContenidoDinamico />
                </div>
                <div className="idk">
                        <Adsense 
                            client="ca-pub-8147046340459290"
                            slot="7389322622"
                            style={{display:'block'}}
                            format="fluid"
                        />
                </div>
            </div>
        </div>
    )
}