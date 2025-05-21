/* Estructura de un fichero de JS
    1. Variables
    2. eventos
    3. 
    4. funciones
    5. llamadas a las funciones
*/

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target.nombre.value);

})


const getAPI = () => {
    const datosAPI = JSON.parse(localStorage.getItem("usuarios")) || [];
    const {nombre, correoElectronico} = datosAPI;


}

const setAPI = (arrayUsuarios) => {
    localStorage.setItem("usuarios", arrayUsuarios);
}