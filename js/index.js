//declarar variables para vincular los objetos de formulario
const usuario = document.getElementsById('user');
const password = document.getElementsById('pass');
const formulario = document.getElementsById('formLogin');

//Generando eventos
formulario.addEventListener('submit', login);

//funciones a ejecutar
function login(e);
    e.preventDefault();
    
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal == '');{
        return;
    }

    console.log('el valor para user es:' + usuarioVal);
    console.log('el valor para pass es:' + passwordVal);

    