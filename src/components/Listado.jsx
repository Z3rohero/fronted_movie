import React, { useEffect } from "react";
import { useState } from "react";
export const Listado = ({listado,setListado}) => {

  
    //const [listado, setListado] = useState([]);


   const getPeliculas = () => {
        let movie = JSON.parse(localStorage.getItem("datos"));
        setListado(movie);

    };

    useEffect(() => {

        getPeliculas();
    }, []);//cuando cargue una sola la vez componente
    


      
    return (
        <> 
        {listado && listado.length > 0 ? listado.map((datos) => {
            return (
                <article  key={datos.id} className="peli-item">
                <h3 className="title">{datos.titulo}</h3>
                <p className="description">{datos.descripcion}</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            );
        }):<h3 className="title">No hay peliculas</h3>
    
    
    }
        
        </>
     )






};