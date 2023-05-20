const generarContrasena = () => {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!$&#?¿';
    let contrasena = '';
    
    for (let i=0; i < 10; i++){
        const indice = Math.floor(Math.random()* caracteres.length);
        contrasena += caracteres.charAt(indice);
    }
    

    return contrasena;
}

const nuevaContrasena = generarContrasena();
console.log(nuevaContrasena);

document.addEventListener('DOMContentLoaded', () => {
    const contrasenaGenerada = generarContrasena();
    const elementoContrasena = document.getElementById('contrasena-generada');
    elementoContrasena.textContent = contrasenaGenerada;
    const botonCambiar = document.getElementById('cambiar-contrasena');

    const actualizarContrasena = () => {
        const contrasenaGenerada = generarContrasena ();
        elementoContrasena.textContent = contrasenaGenerada;
    }

    botonCambiar.addEventListener('click', actualizarContrasena)

    actualizarContrasena();
  });