import React, { useEffect } from "react";
import { Editar } from "./Editar";
import { useState } from "react";
export const Listado = ({listado,setListado}) => {

  
    const [editar, setEditar] = useState(0);


   const getPeliculas = () => {
        let movie = JSON.parse(localStorage.getItem("datos"));
        setListado(movie);

        return movie;

    };

    useEffect(() => {

        getPeliculas();
    }, []);//cuando cargue una sola la vez componente
    


    const borra = (id) => {
       //conseguir los datos almacenados
       let movie  = getPeliculas()
         //filtrar los datos que no coincidan con el id
         let nuevos_datos = movie.filter(datos => datos.id !== parseInt(id));
         //Actualizar los datos
         setListado(nuevos_datos);
        localStorage.setItem("datos",JSON.stringify(nuevos_datos)); 

    }


      
    return (
        <> 
        {listado && listado.length > 0 ? listado.map((datos) => {
            return (
                <article  key={datos.id} className="peli-item">
                <h3 className="title">{datos.titulo}</h3>
                <p className="description">{datos.descripcion}</p>

                <button className="edit" onClick = { ()=> {
                    setEditar(datos.id);
                    console.log(editar);
                }}>Editar</button>
                <button className="delete" onClick={ () => borra(datos.id)}>Borrar</button>
            
                 {/* Dato curiso con los tenario no me importa
                   con && si me importa la etiqueta  */}

                 {
                 editar === datos.id && (
                    <Editar/>
                 ) 
                 }
            </article>
            );
        }):<h3 className="title">No hay peliculas</h3>
    
    
    }
        
        </>
     )






};