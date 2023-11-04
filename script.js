document.getElementById("form").addEventListener('submit', function(e){

    e.preventDefault();

    var estudiantes = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        correo: document.getElementById("correo").value,
        edad: document.getElementById("edad").value,
        hobbies: document.getElementById("hobbies").value
    };

    addTable(estudiantes);
});

function addTable(estudiantes){
    var tbody = document.getElementById("cuerpoTabla");
    var fila = document.createElement("tr");

    for(var i in estudiantes){
        var td = document.createElement("td");
        td.textContent = estudiantes[i];
        fila.appendChild(td);
    }

    var td = document.createElement("td");
    var btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar";
    btnDelete.onclick = function(){
        tbody.removeChild(fila).closest;
    }
    td.appendChild(btnDelete);
    fila.appendChild(td);

    tbody.appendChild(fila);
}