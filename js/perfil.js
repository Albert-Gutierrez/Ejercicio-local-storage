const usuarioCreado = document.getElementById('usuario-creado');


//evento de escucha, aca llamamos al usuario creado en el perfil.html
document.addEventListener('DOMContentLoaded', () => {
    const usuarioGuardado = localStorage.getItem('usuario');

    if (usuarioGuardado) {
        usuarioCreado.textContent = 'Bienvenido de nuevo  ' + usuarioGuardado;
    }
});