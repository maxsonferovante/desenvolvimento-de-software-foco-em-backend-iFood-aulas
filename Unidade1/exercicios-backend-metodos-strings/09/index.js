const nome = 'Maxson Almeida Ferovante';

function createNickName(text) {

    const nickName = "@" + text.replace(/ /g, '').toLowerCase();

    if (nickName.length > 13) {
        return nickName.substring(0, 13);
    }
    return nickName;

}

console.log(createNickName(nome));