//creamos las constantes globales
const form = document.getElementById('formulario-curso');
const inputCurso = document.getElementById('nombre-curso');
const inputProfesor = document.getElementById('nombre-profesor');
const inputPrecio = document.getElementById('precio-curso');
const inputCiudad = document.getElementById('ciudad-curso');
const inputCupo = document.getElementById('cupo-curso');
const mensajeCurso = document.getElementById('mensaje-curso');
const btnBorrarCurso = document.getElementById('borrar');



//aca evitamos q la pagina se recargue y verificamos que hayan ingresado un nombre
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const curso = inputCurso.value.trim();
    const profesor = inputProfesor.value.trim();
    const precio = inputPrecio.value.trim();
    const ciudad = inputCiudad.value.trim();
    const cupo = inputCupo.value.trim();


    if (curso == "" || profesor == "" || precio == "" || ciudad == "" || cupo == "") {
        alert('ingrese todos los datos solicitados');
        return;
    }

    //en este ejercico se construye un  objeto con caracteristicas sus diferentes claves y valores
    const nuevoCurso = {
        nombre: curso,
        profesor: profesor,
        precio: precio,
        ciudad: ciudad,
        cupo: cupo
    }

    //capturamos el arreglo existente en el localStorage o lo creamos vacio si no existe previamente 
    const cursosGuardados = JSON.parse(localStorage.getItem("cursos")) || [];
    //agregamos al arreglo [] cursos guardados, el nuevo curso {}
    cursosGuardados.push(nuevoCurso);

    localStorage.setItem('cursos', JSON.stringify(cursosGuardados));
    form.reset();
});

//aca aparece el curso nuevo que se eguardo
document.addEventListener('DOMContentLoaded', () => {
    const cursoCreado = localStorage.getItem('cursos');

    if (cursoCreado) {
        const objetoCurso = JSON.parse(cursoCreado)//sirve para convertir un texto en formato JSON a un objeto de JavaScript. 

        mensajeCurso.textContent = ' curso: ' + objetoCurso.nombre + ' profesor: ' + objetoCurso.profesor + ' precio: ' + objetoCurso.precio + ' ciudad: ' + objetoCurso.ciudad + ' cupo: ' + objetoCurso.cupo;
    }
});

//aca se elimina el nombre que el usuario coloco
btnBorrarCurso.addEventListener('click', () => {
    localStorage.removeItem('cursos'); // elimina el nombre de ususario
    mensajeCurso.textContent = 'Curso eliminado';
});



