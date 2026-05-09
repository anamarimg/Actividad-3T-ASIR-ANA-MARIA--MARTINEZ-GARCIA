// Capturar: Coger los datos del HTML (.value)
// Crear: Fabricar las nuevas etiquetas (createElement y .textContent)
// Colocar: Pegar las etiquetas en el html (append)

// 1. Ponemos variables para los contadores del resumen
let totalIT = 0;
let totalMarket = 0;
let totalVent = 0;
let totalAdmin = 0;

// 2. Capturamos el botón y le añadimos el evento 'click' para que ejecute cuando escuche
document.getElementById('btnGuardarDatos').addEventListener('click', function() {
    
    // 3. Leer con v.value los valores que el usuario ha escrito en los inputs y lo guardamos en let
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let departamento = document.getElementById('departamento').value;

    // Validamos, si falta nombre o apellido, no hacemos nada
    if(nombre == "" || apellido == "") {
        alert("Por favor, introduce al menos nombre y apellido.");
        return; // Se detiene la ejecución
    }

    // 4. Crear el nuevo elemento (nodo) para la lista dinámica
    let lista = document.getElementById('ListadeTrabajadores'); //localiza donde se mete (el ul)
    let nuevoItem = document.createElement('li'); // Crea la etiqueta <li>
    nuevoItem.className = 'list-group-item'; // Le damos estilo Bootstrap
    nuevoItem.textContent = nombre + " " + apellido + " (" + departamento + ")"; // Mete el texto
    
    // Añadimos el <li> a la lista<ul>
    lista.append(nuevoItem);

    // 5. Actualizar los contadores según el departamento elegido
    if (departamento === "IT") {
        totalIT++;
        document.getElementById('contIT').textContent = totalIT;
    } else if (departamento === "Marketing") {
        totalMarket++;
        document.getElementById('contMarket').textContent = totalMarket;
    } else if (departamento === "Ventas") {
        totalVent++;
        document.getElementById('contVent').textContent = totalVent;
    } else if (departamento === "Administracion") {
        totalAdmin++;
        document.getElementById('contAdmin').textContent = totalAdmin;
    }

    // 6. Limpiar los inputs para el siguiente trabajador 
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('correo').value = "";
    document.getElementById('departamento').value = "IT"; // vuelve a la opcion por defecto que es IT
});