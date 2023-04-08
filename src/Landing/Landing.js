import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import './default.css';
import brush from './images/brush.png';
import monitor from './images/computer-monitor.png';
import pencil from './images/pencil.png';
import paint from './images/paint-brush.png';
import main from './images/Sin título.png';



export default function Landing() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('show');
        
                }
            })
        });
        
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    }, [])


    return(
<body>
    <div className="bg-main h-100">
        <div className="jumbo margin">
            <div id="left">
                <h1 id="tit">
                    PON A TU NEGOCIO EN EL MAPA DIGITAL
                </h1>
                <h3 id="descript">Especializados en páginas web, ponte donde todos te puedan ver.</h3>
                <button className="call-to">CONTÁCTANOS</button>
            </div>
            <div id="right">
                <div className="img-cont">
                    <img src={main} alt=""/>
                </div>
            </div>
        </div>
        
    </div>

    <div style={{paddingBottom: 100}}>
        
        <div className="section-title">
            <h1 className="center-text">Los Números</h1>
            <div className="facts margins">
                
                <div className="fact-box bg-main hidden">
                    
                    <div className="box">
                        <h1 className="big">10%</h1>
                        <h3>De empresas pymes tienen pagina web</h3>
                    </div>
                    <div className="box">
                        <h1 className="big">60%</h1>
                        <h3>En aumento de exposición con una página web</h3>
                    </div>
                    <div className="box" id="none-brd">
                        <h1 className="big">39%</h1>
                        <h3>De usuarios prefieren comprar en línea</h3>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="section-title">
            <h1 className="center-text">¿Qué Hacemos?</h1>
            <div className="services">
                <div className="card hidden">
                    <div className="top">
                        <div className="cont">
                            <img src={paint} alt=""/>
                        </div>
                    </div>
                    <div className="bottom">
                        <h3>DISEÑO</h3>
                        <p>Diseñamos desde cero</p>
                    </div>
                </div>
                
                <div className="card hidden">
                    <div className="top">
                        <div className="cont">
                            <img src={pencil} alt=""/>
                        </div>
                    </div>
                    <div className="bottom">
                        <h3>DESARROLLO</h3>
                        <p>Desarrollamos a tu medida</p>
                    </div>
                </div>
    
                <div className="card hidden">
                    <div className="top">
                        <div className="cont">
                            <img src={monitor} alt=""/>
                        </div>
                    </div>
                    <div className="bottom">
                        <h3>DESPLEGAR</h3>
                        <p>Subimos la página a internet</p>
                    </div>
                </div>
                
                <div className="card hidden">
                    <div className="top">
                        <div className="cont">
                            <img src={brush} alt=""/>
                        </div>
                    </div>
                    <div className="bottom">
                        <h3>MANTENIMIENTO</h3>
                        <p>Damos soporte</p>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="section-title">
            <h1 className="center-text">Tecnologías Que Usamos</h1>
            <div className="card-cont">
                <div className="tec-card hidden">
                    <div className="img-tec">
                        <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
                    </div>
                    <h2>HTML</h2>
                </div>
                <div className="tec-card hidden">
                    <div className="img-tec">
                        <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" />
                    </div>
                    <h2>CSS</h2>
                </div>
                <div className="tec-card hidden">
                    <div className="img-tec">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
                    </div>
                    <h2>JAVASCRIPT</h2>
                </div>
                <div className="tec-card hidden">
                    <div className="img-tec">
                        <img src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png" />
                    </div>
                    <h2>REACT</h2>
                </div>
            </div>

        </div>
        <div className="section-title proyectos">
            <h1 className="center-text">Proyectos Hechos</h1>
            <div className="proy-cont">
                <a className="proyects-links" href="https://charming-starlight-0c691a.netlify.app" target="_blank">

                    <div className="proy-card hidden">
                        <div className="proy-img-cont">
                            <img src="https://charming-starlight-0c691a.netlify.app/static/media/mexCuki.d75d08b50cd1953ea307.png" alt=""/>
                        </div>
                        <div className="proy-text">
                            <h2>Metacuki Cards</h2>
                            <p>Colección NFT</p>
                        </div>
                    </div>
                </a>
                <a className="proyects-links" href="https://bettersteps.pagex.mx" target="_blank">

                    <div className="proy-card hidden">
                        <div className="proy-img-cont">
                            <img src="https://bettersteps.pagex.mx/static/media/thinker.e9a59fa7.jpeg" alt=""/>
                        </div>
                        <div className="proy-text">
                            <h2>BetterSteps</h2>
                            <p>Página Motivacional</p>
                        </div>
                    </div>
                </a>
                <a className="proyects-links" href="https://joshi010.github.io/nombratusHistorias/" target="_blank">

                    <div className="proy-card hidden">
                        <div className="proy-img-cont">
                            <img src="https://joshi010.github.io/nombratusHistorias/imgs/logos/logoEste.jpg" alt=""/>
                        </div>
                        <div className="proy-text">
                            <h2>Nombra Tus Historias</h2>
                            <p>Página de Empoderamiento</p>
                        </div>
                    </div>
                </a>
                <a className="proyects-links" href="https://joshi010.github.io/metacukibooks/index.html" target="_blank">

                    <div className="proy-card hidden">
                        <div className="proy-img-cont">
                            <img src="https://charming-starlight-0c691a.netlify.app/static/media/mbuks.63b754ec9b7402ed7554.png" alt=""/>
                        </div>
                        <div className="proy-text">
                            <h2>Mbuks</h2>
                            <p>Resumenes de Libros</p>
                        </div>
                    </div>
                </a>
            </div>
            <div style={{width: "100%", display: "flex", marginTop: "15px"}}>
                <Link style={{margin: "0 auto", fontSize: 19, fontFamily: "Arial, Helvetica, sans-serif", color: "#01a053"}} className="center-text" to="/plantillas">Ver más ejemplos</Link>

            </div>

        </div>

        <div className="call-to2 hidden">
            <h1 className="center-text">Contáctanos Ya y Crece Tu Negocio.</h1>
            <button className="call-to" id="dos">Contáctanos </button>
        </div>
    </div>
    
    

</body>
    )
}