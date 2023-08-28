const jogada1 = "pedra"
const jogada2 = "tesoura"

if (jogada1 === jogada2) {
    console.log("Empate!")
}
else if (jogada1 === "pedra" && jogada2 === "tesoura") {
    console.log("pedra ganhou")
}
else if (jogada1 == "pedra" && jogada2 === "papel") {
    console.log("papel ganhou")
}
else if (jogada1 === "tesoura" && jogada2 === "papel") {
    console.log("tesoura ganhou")
}
else if (jogada1 === "tesoura" && jogada2 === "pedra") {
    console.log("pedra ganhou")
}
else if (jogada1 === "papel" && jogada2 === "tesoura") {
    console.log("tesoura ganhou")
}
else if (jogada1 === "papel" && jogada2 === "pedra") {
    console.log("papel ganhou")
}
else {
    console.log("Jogada inválida!")
}