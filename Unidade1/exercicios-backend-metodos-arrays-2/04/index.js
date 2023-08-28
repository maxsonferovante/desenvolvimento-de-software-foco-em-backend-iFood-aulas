const numeros = [0, 122, 4, 6, 7, 8, 44]

const resultado = numeros.every((valor) => {
    return valor % 2 === 0
});

if (resultado) {
    console.log("Array validado")
    console.log('Todos os números são pares')
} else {
    console.log("Array invalido")
    console.log('Nem todos os números são pares')
}