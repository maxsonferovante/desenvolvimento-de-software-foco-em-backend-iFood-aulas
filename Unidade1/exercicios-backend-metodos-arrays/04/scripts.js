const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];


function visualizarFila(pacientes) {
    let fila = pacientes.join(", ");
    console.log(fila);
}


function organizadorDeFila(pacientes, operacao, nomeDoPaciente) {

    if (operacao === "atender") {
        pacientes.shift();
        visualizarFila(pacientes);
    }
    else if (operacao === "agendar") {
        pacientes.push(nomeDoPaciente);
        visualizarFila(pacientes);
    }
    else {
        console.log("Operação inválida");
    }
}

visualizarFila(pacientes);
organizadorDeFila(pacientes, "atender");
organizadorDeFila(pacientes, "agendar", "Marcos");