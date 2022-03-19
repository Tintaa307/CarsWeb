const nombre = document.getElementById("txtname");
const mail = document.getElementById("txtmail");
const mensaje = document.getElementById("txtmessage");
const btnEnviar = document.getElementById("btn-enviar");
const resultado = document.querySelector('.resultado');

/* VALIDACION CAMPOS */

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    let error = validarDatos();
    if(error[1]){
        resultado.textContent = error[1];
        resultado.classList.add("red");
    } else {
        resultado.textContent = "Su formulario ha sido enviado con exito";
        resultado.classList.add("green");
        resultado.classList.remove("red");
        nombre.value = null;
        mail.value = null;
        mensaje.value = null;
    }
});

//mail.value.length < 5 || mail.value.length > 30 || mail.value.indexOf("@") == -1 || mail.value.indexOf(".") == -1

const validarDatos = () => {
    let error = [];
    if(nombre.value.length < 4 || nombre.value.length > 20) {
        error[0] = true;
        error[1] = "El nombre es inválido.";
        return error;
    } else if(mail.value.length < 5 || mail.value.length > 30 || mail.value.indexOf("@") == -1 || mail.value.indexOf(".") == -1 || mail.value.indexOf("gmail") == -1 || mail.value.indexOf("com") == -1) {
        error[0] = true;
        error[1] = "El Mail es inválido.";
        return error;
    } else if(mensaje.value.length < 0 || mensaje.value.length > 300) {
        error[0] = true;
        error[1] = "El mensaje es demasaido extenso.";
        return error;
    }

    error[0] = false;
    return error;
}





/* SCROLL REVEAL */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,    
})

sr.reveal('.container-header');
sr.reveal('.puntos', {delay: 700});
sr.reveal('.container-info', {delay: 700});
sr.reveal('.lista-redes', {delay: 900});
sr.reveal('.container-nav', {delay: 1100});
sr.reveal('.container-titles', {delay: 700});
sr.reveal('.container-img', {delay: 900});
sr.reveal('.container-bottom-info', {delay: 1100});
sr.reveal('.frontend-container', {delay: 1100});
sr.reveal('.backend-container', {delay: 1100});
sr.reveal('.container-services', {delay: 1100});
sr.reveal('.container-contact-redes', {delay: 1100});
sr.reveal('.form-contact', {delay: 1100});