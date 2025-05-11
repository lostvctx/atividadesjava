function main() {
    let min = parseInt(prompt("Digite um número..."));
    let max = parseInt(prompt("Digite um número maior que o anterior..."));

    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Digite um número válido...");
        return;
    }

    calculos(min, max);
}

function calculos(inicio, fim) {
    let i = inicio;
    while (i < fim) {
        if (i % 2 == 0) {
            alert(i + " - par");
        } else {
            alert(i + " - ímpar");
        }
        i++;
    }
}

main();