function reverterString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString;

}

console.log(`QUESTÃO 5 - O INVERSO DA STRING "THIAGO" é ${reverterString("THIAGO")}`);