//declaracion de variables de referencia a objetos
const nombre = document.getElementsById('name');
const email = document.getElementsById('email');
const user = document.getElementsById('user');
const pass = document.getElementsById('pass');
const formulario = document.getElementById('formRegistro');

formulario.addEventListener('submit', registro);

function registro(e);{
    e.preventDefault();

    let nombreVal = nombre.value;
    let emailVal = email.value;
    let userVal = user.value;
    let passVal = pass.value;

    if(nombreVal == '' || emailVal == '' || userVal == '' || passVal == '');
}