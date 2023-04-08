import React from "react";
import { useSelector } from "react-redux";
import { selectedData, filterData } from "./slice";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import './contenidoPlantilla.css';


export default function ContenidoPlantilla(){
    const data = useSelector(selectedData);
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);

    const section = queryParams.get('section');
    const filteredData = section ? filterData(section, data) : Object.values(data);


    return(
        <div className="normal-grid" style={{marginTop:100}}>
            {
            
            filteredData[0] ? filteredData.map((temp, i) => {
                
                return(
                    <div className="normal-grid-card" key={i}>
                        <div className="image-cont-normal-card">
                            <img src={temp.image} />
                        </div>
                        <div>
                            <h3>{temp.title}</h3>
                            
                        </div>
                    </div>
                )
            }): 'No se encontraron plantillas'}
       </div>
    )
}