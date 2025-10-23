
alert("Control asistencia")
alert("Si el alumno está presente ingrese 'si', de lo contrario ingrese 'no'.")

const alumnos = [
  "Bart Simpson",
  "Marge Simpson",
  "Homero Simpson",
  "Maggie Simpson",
  "Lisa Simpson"
];

let presentes = []
let ausentes = []

// Función 1: registrar asistencia de un alumno
function registrarAsistencia(nombre) {
  let respuesta = ""

  //Bucle que espera si/no como respuesta mediante prompt, de no ser asi muestra un alert
  while (respuesta !== "si" && respuesta !== "no") {
    respuesta = prompt("¿" + nombre + " está presente? (si/no)")

    //Si el usuario cancela, el alumno se cuenta como ausente.
     if (respuesta === null) {
    alert("Asistencia cancelada. Se registrará como ausente.")
    respuesta = "no"
  } else {
    respuesta = respuesta.toLowerCase();
  }

    respuesta !== "si" && respuesta !== "no" ?
      alert("Por favor, ingrese solo 'si' o 'no'.") :
    


  //Si la respuesta es "si" agrega el alumno a array de presentes, si es "no" al array de ausentes
  respuesta === "si" ? presentes.push(nombre) : ausentes.push(nombre)
}
}

// Función 2: ordena las listas alfabeticamente y las muestra mediante alert y console.log, tambien el total de presentes y ausentes
function mostrarResultados(listaPresentes, listaAusentes) {
  listaPresentes = ordenarAlfabeticamente(listaPresentes)
  listaAusentes = ordenarAlfabeticamente(listaAusentes)

  const totalPresentes = listaPresentes.length;
  const totalAusentes = listaAusentes.length;

  console.log("Cantidad de presentes: "+ totalPresentes, listaPresentes)
  console.log("Cantidad de ausentes: " + totalAusentes, listaAusentes)

  alert(
    "=== Asistencias ===\n\n" +
    "Presentes:\n" + (listaPresentes.join("\n") || "(ninguno)") + "\n\n" +
    "Ausentes:\n" + (listaAusentes.join("\n") || "(ninguno)") + "\n\n" +
    "=== RESUMEN FINAL ===\n" +
    "Presentes: " + totalPresentes + "\n" +
    "Ausentes: " + totalAusentes
  );
}

//Función 3: Ordena una lista alfabéticamente
function ordenarAlfabeticamente(lista) {
  return lista.slice().sort() // slice() para no modificar el array original
}

// Bucle principal: registrar asistencia de cada alumno
for (const alumno of alumnos) {
  registrarAsistencia(alumno)
}

// LLamada de función para mostrar resultados y resumen
mostrarResultados(presentes, ausentes)