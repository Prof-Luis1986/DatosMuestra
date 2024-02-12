// Pide al usuario que ingrese información
const nombre = prompt("Ingresa tu nombre:");
const apellido = prompt("Ingresa tu apellido:");
const edad = prompt("Ingresa tu edad:");
const lugarNacimiento = prompt("Ingresa tu lugar de nacimiento:");
const fecha = prompt("Ingresa tu fecha de nacimiento:");
const comidaFavorita = prompt("Ingresa tu comida favorita:");
const carrera = prompt("Ingresa tu carrera:");
const diaFavorito = prompt("Ingresa tu día favorito de la semana:");

// Construye una lista con la información ingresada
const lista = document.createElement("ul");

// Agrega cada dato como un elemento de lista
const agregarDato = (etiqueta, valor) => {
    const elementoLista = document.createElement("li");
    elementoLista.innerHTML = `<strong>${etiqueta}:</strong> ${valor}`;
    lista.appendChild(elementoLista);
};

agregarDato("Nombre", `${nombre} ${apellido}`);
agregarDato("Edad", edad);
agregarDato("Lugar de Nacimiento", lugarNacimiento);
agregarDato("Fecha de Nacimiento", fecha);
agregarDato("Comida Favorita", comidaFavorita);
agregarDato("Carrera", carrera);
agregarDato("Día Favorito de la Semana", diaFavorito);

// Crea un contenedor div para mostrar la lista
const resultadoDiv = document.createElement("div");
resultadoDiv.appendChild(lista);

// Agrega el nuevo div al cuerpo del documento
document.body.appendChild(resultadoDiv);
