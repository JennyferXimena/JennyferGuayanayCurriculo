import React from "react";

function Datos(){
    return(
        <>
        <div>
            <div class="curriculo">
                <h2>Datos Personales </h2>
            <div>
                <p>
                    Nombre: Jennyfer Ximena Guayanay Torres <br />
                    Dirección: Camal metro politano 18 de octubre <br />
                    Teléfono: 0979951250
                    Correo Electrónico: jennyfer.guayanay@epn.ecu.ec
                </p>
            </div>
            <h2>Lista de estudios realizados </h2>
            <div>
                <ol>
                    <li>Idioma: Ingles, nivel intermedio, un año de estudio </li>
                    <li>Curso de C++: Curso en Udemy</li>
                    <li>Curso de Html: Curso en Udemy</li>
                </ol>
            </div>
            <h2>Lista de herramientas utilizadas</h2>
            <div>
                <ul>
                    <li>Lenguajes de programacion C++, Python, Java</li>
                    <li>Sistemas Operativos Windows, Linux</li>
                    <li>Sistema de gestion de base de datos relacionales MySQL</li>
                    <li>Lenguaje estándar para crear páginas web: Html</li>
                </ul>
            </div>
            <h2>Galería de deportes favoritos: </h2>
            </div>
            <div class="deportes">
                <div class="listas">
                   <h3>Tenis</h3>
                   <img class="img" src="images1.jpg" alt="" />
                </div>
                <div class="listas">
                    <h3>Galopar</h3>
                    <img class="img" src="images2.jpg" alt="" />
                </div>
                <div class="listas">
                    <h3>Esgrima</h3>
                    <img class="img" src="images3.jpg" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Datos; 
