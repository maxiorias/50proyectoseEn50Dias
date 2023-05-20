const generarContrasena = () => {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let contrasena = '';
    
    for (let i=0; i < 8; i++){
        const indice = Math.floor(Math.random()* caracteres.length);
        contrasena += caracteres.charAt(indice);
    }
    

    return contrasena;
}

const nuevaContrasena = generarContrasena();
console.log(nuevaContrasena);

