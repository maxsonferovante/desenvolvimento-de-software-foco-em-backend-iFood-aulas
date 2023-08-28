const numeros = [10, 987, -886, 0, 12, 199, -45, -67]


const numerosPositivos = numeros.filter((valor) => {
    return valor > 0
});

console.log(numerosPositivos)