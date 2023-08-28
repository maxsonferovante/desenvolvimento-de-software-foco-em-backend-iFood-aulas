function validarEmail(email) {
    // Verifica se o e-mail contém o caractere @
    if (!email.includes('@')) {
        return 'E-mail inválido';
    }

    // Verifica se o e-mail contém apenas um @
    if (email.indexOf('@') !== email.lastIndexOf('@')) {
        return 'E-mail inválido';
    }

    // Verifica se o e-mail contém pelo menos um ponto após o @
    const domainPart = email.split('@')[1];
    if (!domainPart.includes('.')) {
        return 'E-mail inválido';
    }

    // Verifica se o e-mail não começa com ponto
    if (email.startsWith('.')) {
        return 'E-mail inválido';
    }

    // Verifica se o e-mail não termina com ponto
    if (email.endsWith('.')) {
        return 'E-mail inválido';
    }

    return 'E-mail válido';
}

// Exemplos de uso:
console.log(validarEmail('jose@cubos.academy')); // Saída: E-mail válido
console.log(validarEmail('jose@cubos.academy.br')); // Saída: E-mail válido
console.log(validarEmail('jose.messias@cubos.academy')); // Saída: E-mail válido
console.log(validarEmail('jose.messias@cubos.io')); // Saída: E-mail válido
console.log(validarEmail('jose@cubos')); // Saída: E-mail inválido
console.log(validarEmail('jose.messias@cubos')); // Saída: E-mail válido
console.log(validarEmail('jose.messias@.')); // Saída: E-mail inválido
console.log(validarEmail('jose.@cubos')); // Saída: E-mail válido
console.log(validarEmail('.@')); // Saída: E-mail inválido
console.log(validarEmail('@.')); // Saída: E-mail inválido
console.log(validarEmail('jose.messias@cubos.')); // Saída: E-mail inválido
console.log(validarEmail('.messias@cubos.')); // Saída: E-mail inválido
console.log(validarEmail('.messias@cubos')); // Saída: E-mail inválido
