import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Nav(){
    return(
        <nav>
            <Link to="/" style={{color:"#fff", textDecoration:"none"}}>PAGEX</Link>

            <ul className="Nav-options">
                <li><NavLink style={{color:"#e7e7e7", textDecoration:"none"}} to={"/plantillas"}>Plantillas</NavLink></li>
                <li><NavLink style={{color:"#e7e7e7", textDecoration:"none"}} to={"/articulos"}>Artículos</NavLink></li>
            </ul>
        </nav>
    )
}