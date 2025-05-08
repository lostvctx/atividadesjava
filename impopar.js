function main() {
    const min = parseInt(prompt(" digite o primeiro numero"));
    const max = parseInt(prompt(" digite um numero menor que o anterior"));


}

function mostrarNumeros(min, max) {
    let resultado = ""
    function parImpar(numero) {
        return numero % 2 === 0 ? "par" : "impar"

    }
    for (let i = min + 1; i < max; < i ++) {
        alert(resultado = + `${i} - ${parImpar(i)} \n`);
        if (min < max) {
            mostrarNumeros(min, max);

        } else {
            alert("digite um numero valido!!")
        }

    }
}


main();