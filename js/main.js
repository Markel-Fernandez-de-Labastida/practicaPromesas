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
    const nombreUsuario = event.target.nombre.value;
    console.log("Nombre introducido: ",nombreUsuario)
    getAPI(nombreUsuario)
    .then((respuesta) => {
        //console.log(respuesta);
        const mostrarError = document.querySelector("#mostrarError");
        mostrarError.innerHTML = "";
        return showUsers(respuesta);
    })
    .catch((error) => {
        //console.log(error);
        return showError(error);
    })

})

const showUsers = (usuario) => {
    const tabla = document.querySelector("#tabla");
    const bodyTabla = document.querySelector("#tablaBody");
    bodyTabla.innerHTML = "";
    const tr = document.createElement("TR");
    const tdId = document.createElement("TD");
    const tdNombre = document.createElement("TD");
    const tdCorreo = document.createElement("TD");

    tdId.innerHTML = usuario.id;
    tdNombre.innerHTML = usuario.nombre;
    tdCorreo.innerHTML = usuario.correoElectronico;

    tr.append(tdId, tdNombre, tdCorreo);
    bodyTabla.append(tr);

}

const showError = (mensaje) => {
    
    const mostrarError = document.querySelector("#mostrarError");
    mostrarError.innerHTML = "";
    const mensajeError = document.createElement("P");
    mensajeError.innerHTML = mensaje;

    mostrarError.append(mensajeError);
}

const getAPI = (nombreUsuario) => {

const datosAPI = JSON.parse(localStorage.getItem("usuarios")) || [];
const promesa = new Promise((resolve, reject) => {
setTimeout(() => {
if (datosAPI != []){
    const nombre = datosAPI.find((item) => item.nombre === nombreUsuario);
    //console.log("item encontrado: ", nombre)
    if (nombre) resolve(nombre);
    else reject(`El alumno con el nombre ${nombreUsuario} no existe`);
}
})

}, 1000);
return promesa;
} 


const setAPI = (arrayUsuarios) => {
    if (arrayUsuarios == []) arrayUsuarios = arrAPI;
    localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios));
}

setAPI(arrAPI);