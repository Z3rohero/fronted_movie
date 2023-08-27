import { useState } from "react";
import React from "react";

export const Crear = () => {

    const [datos,setDatos ] = useState({
        id: "", 
        titulo: "",
        descripcion:""

    });

    const {id,titulo,descripcion} = datos;
    //const titulo = "Añadir pelicula"

    const conseguirDatosForm = (e) => {
        e.preventDefault();
        let target = e.target;
        let titulo =  target.title.value;
        let descripcion = target.description.value;


        /* crear objeto */

        const datostate = {
            id: new Date().getTime(), /* para que sea unico se coja la funcion de gettime  */
            titulo,
            descripcion
        };

        console.log(datostate);
        setDatos(datostate);

    

    };

    return(
    <div className="add">
        <h3 className="title">Añadir pelicula</h3>
        <p>
        {(titulo && descripcion) ?? "Has creado la pelicula" + datos.titulo  }

        </p>

        <form onSubmit={conseguirDatosForm}>
            <input 
            type="text" 
            id="title" 
            name="title"
            placeholder="Titulo" />
            <textarea 
            id="description"
            name="description" 
            placeholder="Descripción">
            </textarea>
            <input 
            type="submit"
            id="save"
            name="save"
            value="Guardar" 
            />
        </form>
    </div>
   
    )
};

