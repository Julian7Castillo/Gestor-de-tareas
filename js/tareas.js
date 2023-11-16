//fincion de cracion de tareas
function crearTarea(){
    let titulo = document.getElementById("titulo").value;
    // let descripcion = document.getElementById("descripcion").value;
    let fecha = document.getElementById("fecha").value;

    const dtitulo = document.getElementById("t1");
    dtitulo.innerHTML = `${titulo}`;

    const ddescripcion = document.getElementById("d1");
    // ddescripcion.innerHTML = `${descripcion}`;

    const dfecha = document.getElementById("f1");
    dfecha.innerHTML = `${fecha}`;

    const destado = document.getElementById("e1");
    destado.innerHTML = `Pediente`;

    const dconfirmacion = document.getElementById("con1");
    dconfirmacion.innerHTML = `<button class="boton-confirmar">Confirmar</Button>`;

    const deiminar = document.getElementById("eli1");
    deiminar.innerHTML = `<button class="boton-eliminar">Eliminar</Button>`;
};