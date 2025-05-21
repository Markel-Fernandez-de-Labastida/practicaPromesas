/* Estructura de un fichero de JS
    1. Variables
    2. eventos
    3. 
    4. funciones
    5. llamadas a las funciones
*/

const formulario = document.querySelector("#formulario");

let arrAPI = [
    {
        id: 1,
        nombre: "Pepito",
        correoElectronico: "jjj@ddf.com"
    },
    {
        id: 2,
        nombre: "Grillo",
        correoElectronico: "aaa@frre.es"
    },
    {
        id: 3,
        nombre: "lorelei",
        correoElectronico: "ccc@mkjrfd.com"
    },
    {
        id: 4,
        nombre: "Ivan",
        correoElectronico: "mnjh@gfir.mx"
    }
]


formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target.nombre.value);

})


const getAPI = () => {
    const datosAPI = JSON.parse(localStorage.getItem("usuarios")) || [];
    const {nombre, correoElectronico} = datosAPI;


}

const setAPI = (arrayUsuarios) => {
    if (arrayUsuarios == []) arrayUsuarios = arrAPI;
    localStorage.setItem("usuarios", arrayUsuarios);
}