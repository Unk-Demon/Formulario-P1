document.getElementById("form").addEventListener('submit', function(e){

    e.preventDefault();

    var peliculas = {
        titulo: document.getElementById("titulo").value,
        anio: document.getElementById("anio").value,
        duracion: document.getElementById("duracion").value,
        genero: document.getElementById("genero").value,
        director: document.getElementById("director").value,
        sinopsis: document.getElementById("sinopsis").value
    };

    addTable(peliculas);

    e.target.reset();
});

function addTable(peliculas){
    const tbody = document.getElementById("cuerpoTabla");
    const fila = document.createElement("tr");

    for(var i in peliculas){
        const td = document.createElement("td");
        td.textContent = peliculas[i];
        fila.appendChild(td);
    }

    const td = document.createElement("td");
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar";
    btnDelete.classList.add("btn", "btn-danger");
    btnDelete.onclick = function(){
        tbody.removeChild(fila).closest;
    }
    td.appendChild(btnDelete);
    fila.appendChild(td);

    const td2 = document.createElement("td");
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Editar";
    btnEdit.classList.add("btn", "btn-success");
    btnEdit.onclick = function(){
        document.getElementById("titulo").value = fila.children[0].innerHTML;
        document.getElementById("anio").value = fila.children[1].innerHTML;
        document.getElementById("duracion").value = fila.children[2].innerHTML;
        document.getElementById("genero").value = fila.children[3].innerHTML;
        document.getElementById("director").value = fila.children[4].innerHTML;
        document.getElementById("sinopsis").value = fila.children[5].innerHTML;
        
        document.getElementById("editBtn").style.display = "inline";
        document.getElementById("addBtn").style.display = "none";

        document.getElementById("editBtn").onclick = function(){
            fila.children[0].innerHTML = document.getElementById("titulo").value;
            fila.children[1].innerHTML = document.getElementById("anio").value;
            fila.children[2].innerHTML = document.getElementById("duracion").value;
            fila.children[3].innerHTML = document.getElementById("genero").value;
            fila.children[4].innerHTML = document.getElementById("director").value;
            fila.children[5].innerHTML = document.getElementById("sinopsis").value;

            document.getElementById("editBtn").style.display = "none";
            document.getElementById("addBtn").style.display = "inline";
        }
    }

    td2.appendChild(btnEdit);
    fila.appendChild(td2);

    tbody.appendChild(fila);
}