import React from "react";


export const Editar = () => {

    let datos = JSON.parse(localStorage.getItem("datos"));
    return (
        <div className="edit_form"> 
            <h3 className="title">Editar pelicula</h3>
            <form>
                <input type="text" id="title" name="title" placeholder="Titulo" 
                />

              {/* defaultValue={datos_map.titulo}*/}
                <textarea name="description"
                 id="description" 
                  placeholder="Descripcion"/>
                  
                <input type="submit" className="editar"  value="Actualizar" />                  
            </form>
               
        </div>
    )
};