const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement("tr");
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
            <li>
                <a
                href="../screens/editar_cliente.html"
                class="simple-button simple-button--edit"
                >Editar</a
                >
            </li>
            <li>
                <button
                class="simple-button simple-button--delete"
                type="button"
                >
                Eliminar
                </button>
            </li>
            </ul>
        </td>`;
        linea.innerHTML = contenido;

        return linea
};

const table = document.querySelector("[data-table]")

const http = new XMLHttpRequest();

// Abrir http (método, url)
http.open('GET', "http://localhost:3000/perfil");

http.send();

http.onload = () => {
    const data = JSON.parse(http.response); // transformar la respuesta http a Json
    console.log(data);
    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
}

console.log(http);