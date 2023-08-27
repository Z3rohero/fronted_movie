export const guardarDatosLocal = (clave,datos) => {

    //Conseguir los elementos que ya estan en el local storage
    let elementos = JSON.parse(localStorage.getItem(clave));
    //comprobar si es un array
    if(Array.isArray(elementos)){
        elementos.push(datos);
    }else{
        //crear un array con la nueva peli
        elementos = [datos];
    }
    //guarda localmente los datos
    localStorage.setItem(clave,JSON.stringify(elementos));

    return datos;

}