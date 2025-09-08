const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const usuario = document.getElementById("usuario");
const clave1 = document.getElementById("clave1");
const clave2 = document.getElementById("clave2");
const cumpleanios = document.getElementById("cumpleanios");
const form = document.getElementById('formulario');
const errores = document.getElementById('errores');

const set = new Set();


function mostrarErrores() {
    errores.innerHTML = "";
    if (set.size > 0) {
        errores.style.display = "block";
        const primerError = set.values().next().value;
        errores.innerHTML = `<p>${primerError}</p>`;
    } else {
        errores.style.display = "none";
    }
}

nombre.addEventListener('keyup', function (e) {
    if (nombre.value.length == 0) {
        nombre.classList.add("error");
        set.add("Completa el campo nombre.");
    } else {
        nombre.classList.remove("error");
        set.delete("Completa el campo nombre.");
    } mostrarErrores();
});
mail.addEventListener('keyup', function (e) {
    if (!mail.value.includes("@")) {
        mail.classList.add("error");
        set.add("Añade un signo arroba (@).");
    } else {
        mail.classList.remove("error");
        set.delete("Añade un signo arroba (@).");
    } mostrarErrores();
});
usuario.addEventListener('keyup', function (e) {
    if (usuario.value.length == 0) {
        usuario.classList.add("error");
        set.add("Completa el campo usuario.");
    } else {
        usuario.classList.remove("error");
        set.delete("Completa el campo usuario.");
    } mostrarErrores();
});
clave1.addEventListener('keyup', function (e) {
    if (clave1.value.length == 0) {
        clave1.classList.add("error");
        set.add("Contraseña no puede estar vacio.");
    } else {
        clave1.classList.remove("error");
        set.delete("Contraseña no puede estar vacio.");
    } mostrarErrores();
});
clave2.addEventListener('keyup', function (e) {
    if (clave1.value != clave2.value) {
        clave2.classList.add("error");
        set.add("Las contraseñas no coinciden.");
    } else {
        clave2.classList.remove("error");
        set.delete("Las contraseñas no coinciden.");
    } mostrarErrores();
});

form.addEventListener('submit', function (e) {
    document.querySelectorAll("input").forEach(element => {
        if (element.classList.contains("error")) {
            e.preventDefault();
            set.add("Error, revisa los campos en rojo!");
        }
    });
    mostrarErrores();
});

// Registro código promocional
document.addEventListener("DOMContentLoaded", () => {
    const btnCodigo = document.getElementById("btn-codigo");
    const campoCodigo = document.getElementById("codigo-promocional");

    btnCodigo.addEventListener("click", () => {
        if (campoCodigo.style.display === "none") {
            campoCodigo.style.display = "block";
            btnCodigo.textContent = "Ocultar código promocional";
        } else {
            campoCodigo.style.display = "none";
            btnCodigo.textContent = "¿Tienes un código promocional?";
        }
    });
});