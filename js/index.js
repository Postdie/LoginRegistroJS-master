//declarar variables para vincular los objetos de formulario
const usuario = document.getElementsById('user');
const password = document.getElementsById('pass');
const formulario = document.getElementsById('formLogin');

//Generando eventos
formulario.addEventListener('submit', login);

//funciones a ejecutar
function login(e){
    e.preventDefault();
    
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal == ''){
        creaMensaje('verifica tus datos', 'danger');
        return;
    }
    if(localStorage.getItem('usuario')){
        let objeto = JSON.parse(localStorage.getItem('usuario'));

        if(usuarioVal == objeto.user && passwordVal == objeto.pass){
            creaMensaje(`Login Correcto`, 'success');
            localStorage.setItem('sesion', 'activa');
            setTimeout(function(){
                window.open('./inicio.html', '_self');
            }, 2000);
        } else {
            creaMensaje('usuario incorrecto', 'danger');
        }
    } else {
        creaMensaje('No hay usuario registrados', 'danger');
}
    
}   