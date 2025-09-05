const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const usuario = document.getElementById("usuario");
const clave1 = document.getElementById("clave1");
const clave2 = document.getElementById("clave2");
const cumpleanios = document.getElementById("cumpleanios");
const form = document.getElementById('formulario');
const errores = document.getElementById('errores');

const set = new Set();


nombre.addEventListener('keyup', function (e) {
    if (nombre.value.length == 0) {
        nombre.classList.add("error");
        set.add("<p>Completa el campo nombre.</p>");
    } else {
        nombre.classList.remove("error");
        set.delete("<p>Completa el campo nombre.</p>");
    }
});
mail.addEventListener('keyup', function (e) {
    if (!mail.value.includes("@")) {
        mail.classList.add("error");
        set.add("<p>Añade un signo arroba (@).</p>");
    } else {
        mail.classList.remove("error");
        set.delete("<p>Añade un signo arroba (@).</p>");
    }
});
usuario.addEventListener('keyup', function (e) {
    if (usuario.value.length == 0) {
        usuario.classList.add("error");
        set.add("<p>Completa el campo usuario.</p>");
    } else {
        usuario.classList.remove("error");
        set.delete("<p>Completa el campo usuario.</p>");
    }
});
clave1.addEventListener('keyup', function (e) {
    if (clave1.value.length == 0) {
        clave1.classList.add("error");
        set.add("<p>Contraseña no puede estar vacio.</p>");
    } else {
        clave1.classList.remove("error");
        set.delete("<p>Contraseña no puede estar vacio.</p>");
    }
});
clave2.addEventListener('keyup', function (e) {
    if (clave1.value != clave2.value) {
        clave2.classList.add("error");
        set.add("<p>Las contraseñas no coinciden.</p>");
    } else {
        clave2.classList.remove("error");
        set.delete("<p>Las contraseñas no coinciden.</p>");
    }
});

form.addEventListener('submit', function (e) {
    errores.innerHTML = "";

    document.querySelectorAll("input").forEach(element => {
        if (element.classList.contains("error")) {
            e.preventDefault();
            set.add("<p>Error, revisa los campos en rojo!.</p>");
        }
    });
    set.forEach(p => {
        errores.innerHTML += p;
    })
});