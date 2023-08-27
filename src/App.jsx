import React from 'react'
import './App.css'

import { Listado } from './components/Listado'
import { Buscar } from './components/Buscar'
import { Crear } from './components/Crear'
function App() {

  return (<div className="layout">
        {/*<!--Cabecera-->*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>MisPelis</h1>
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido principal*/}
        <section id="content" className="content">
            {/*aqui van las peliculas*/}
            <Listado /> 
        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
           <Buscar />
           <Crear />
        </aside>

        {/*Pie de página*/}
        <footer className="footer">
            &copy; Máster en React - <a href="/#">zerohero</a>
        </footer>

    </div>

    


  )
}

export default App
