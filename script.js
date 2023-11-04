document.getElementById("form").addEventListener('submit', function(e){
    var estudiantes = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        correo: document.getElementById("correo").value,
        edad: document.getElementById("edad").value,
        hobbies: document.getElementById("hobbies").value
    };
});