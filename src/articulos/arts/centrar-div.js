import React from "react";
import { Helmet } from "react-helmet";

export default function CenterDiv(){

    return(
        <div>
                <Helmet>
                    <title>Centrar un div: la búsqueda del Santo Grial del desarrollo web</title>
                </Helmet>
                <h1>Centrar un div: la búsqueda del Santo Grial del desarrollo web</h1>
                <p>¿Alguna vez has intentado centrar un div y has sentido que estás buscando el Santo Grial del desarrollo web? Si es así, no te preocupes, no estás solo. Centrar un div puede ser una tarea frustrante y desafiante, pero no te rindas todavía. Aquí te dejamos algunos consejos (y un poco de humor) para ayudarte a encontrar el camino hacia el centro divino.</p>
                <p>Lo primero que debes saber es que hay muchas maneras de centrar un div. Algunas funcionan mejor que otras, dependiendo de la situación. Pero antes de entrar en detalles técnicos, permíteme compartir una pequeña historia contigo.</p>
                <p>Había una vez un programador llamado Dave. Dave quería centrar un div. Probó todo lo que se le ocurrió: márgenes, paddings, flexboxes, grids, ¡incluso intentó sacrificar un unicornio mágico para conseguir el centrado perfecto! Pero nada funcionaba. Dave estaba desesperado, había perdido toda esperanza. Hasta que un día, en un momento de iluminación divina, se dio cuenta de la verdad.</p>
                <p>¿Listo para escuchar el secreto del centrado divino? ¡Aquí viene!</p>
                <p>El secreto para centrar un div es... (redoble de tambores) ¡no centrarlo en absoluto!</p>
                <p>Sí, lo has leído bien. En lugar de centrar un div, deja que se centre solo. La mayoría de las veces, los divs se centran por defecto. Así que si te encuentras luchando por centrar un div, prueba a quitar todos los estilos y ver qué pasa.</p>
                <p>Pero si eso no funciona, no te preocupes. Aquí te dejamos algunas otras opciones que puedes probar:</p>
                <ul>
                <li>Usa la propiedad <code>display: flex</code> en el contenedor y la propiedad <code>margin: auto</code> en el div interno que deseas centrar. Es simple y efectivo.</li>
                <li>Si prefieres no utilizar flexbox, puedes usar <code>display: table</code> y <code>display: table-cell</code> en el contenedor y el div, respectivamente. A continuación, aplica la propiedad <code>text-align: center</code> al contenedor. Esto también funciona bien.</li>
                <li>Si nada de lo anterior funciona, puedes intentar poner un marcador de posición en el contenedor y aplicar la propiedad <code>position: absolute</code> al div interno que deseas centrar. A continuación, puedes aplicar <code>top: 50%</code> y <code>left: 50%</code> al div interno y, a continuación, usar <code>transform: translate(-50%, -50%)</code> para desplazarlo al centro. Es un poco más complicado, pero funciona.</li>
                </ul>
                <p>En resumen, centrar un div puede ser una tarea complicada, pero no te desanimes. Prueba estas opciones y encuentra la que mejor funcione para ti. Y si todo lo demás falla, siempre puedes sacrificar un unicornio mágico. ¡Es broma! </p>
        </div>

)
}