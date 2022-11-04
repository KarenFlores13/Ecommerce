/* eventos boton enviar */

/* const btnEnviar = document.querySelector('.boton_agregar');
btnEnviar.addEventListener('click', function(event) {
    console.log(event);

    console.log('agregando producto');
}); */

/* eventos de teclado rellenar inputs y textarea */

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto); 
email.addEventListener('input', leerTexto); 
mensaje.addEventListener('input', leerTexto); 

//El evento de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //validar el formulario

    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);

        return;
    }

    //enviar al formulario
    mostrarAlerta('Mensaje enviado correctamente');

});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;

    /* console.log(datos); */

}

// muestra una alerta de que se envió correctamente

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);


}

