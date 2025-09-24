//creamos las constantes globales
const form = document.getElementById('formulario');
const input = document.getElementById('nombre');
const saludo = document.getElementById('saludo');
const btnBorrar = document.getElementById('borrar');


//aca evitamos q la pagina se recargue y verificamos que hayan ingresado un nombre
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = input.value.trim();

    if (nombre == "") {
        alert('ingrese su nombre');
        return;
    }
    //aca aparece el nombre que ingresamos  en el navegador
    localStorage.setItem('usuario', nombre);
    saludo.textContent = 'Bienvenido   ' + nombre;
    input.value = "";
});



//aca aparece el usuario nuevo que se eguardo
document.addEventListener('DOMContentLoaded', () => {
    const usuarioGuardado = localStorage.getItem('usuario');

    if (usuarioGuardado) {
        saludo.textContent = 'Bienvenido de nuevo  ' + usuarioGuardado;
    }
});



//aca se elimina el nombre que el usuario coloco
btnBorrar.addEventListener('click', () => {
    localStorage.removeItem('usuario'); // elimina el nombre de ususario
    saludo.textContent = 'Bienvenido ususario Indefinido';
});






