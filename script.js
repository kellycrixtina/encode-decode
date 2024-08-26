let btnCopy = document.querySelector('.copyBtn');
const legend = document.querySelector('.label_one, .label_two, .label_three');
const textArea = document.querySelector('.insert_text');
const copyTextArea = document.querySelector('.copy_text');
const initialDisplay = document.querySelector('.firstDisplay');
const secondDisplay = document.querySelector('.secondDisplay')

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function botaoEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    copyTextArea.value = textoEncriptado;
    initialDisplay.style.display = "none";
    secondDisplay.style.transition = '1s';
    secondDisplay.style.display = "block"
    // textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function botaoDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    copyTextArea.value = textoDesencriptado;
    // textArea.value = "";

}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

btnCopy.addEventListener('click', () => {
    copyTextArea.select();
    document.execCommand('copy');
});



window.onload = function () {
    document.getElementById('insert_text').focus();
}