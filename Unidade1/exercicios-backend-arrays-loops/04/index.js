const intervaloMinimo = 0;
const intervaloMaximo = 500;
const multiplo = 3;

for (let i = intervaloMinimo; i <= intervaloMaximo; i++) {
    if (i % multiplo == 0) {
        console.log(`${i} é múltiplo de ${multiplo}`)
        /*    0 é múltiplo de 3
           3 é múltiplo de 3
           6 é múltiplo de 3
           9 é múltiplo de 3
           ...
           492 é múltiplo de 3
           495 é múltiplo de 3
           498 é múltiplo de 3 */

    }
}