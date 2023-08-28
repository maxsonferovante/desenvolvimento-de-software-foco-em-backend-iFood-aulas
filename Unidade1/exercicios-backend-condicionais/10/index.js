const caractere = "9";

if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log(`O caractere ${caractere} é uma vogal minúscula`);
}
else if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log(`O caractere ${caractere} é uma vogal maiúscula`);
}
else if (caractere == 1 || caractere == 2 || caractere == 3 || caractere == 4 || caractere == 5 || caractere == 6 || caractere == 7 || caractere == 8 || caractere == 9 || caractere == 0) {
    console.log(`O caractere ${caractere} é um número`);
}
else {
    console.log(`O caractere ${caractere} é uma consoante`);
}