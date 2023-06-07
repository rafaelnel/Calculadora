
function soma(n1, n2, op) {
    resul = n1 + n2;
    document.getElementById("resul").innerHTML = n1 + " " + op + " " + n2 + " = " + resul;
}
function sub(n1, n2, op) {
    resul = n1 - n2
    document.getElementById("resul").innerHTML = n1 + " " + op + " " + n2 + " = " + resul;
}
function mult(n1, n2, op) {
    resul = n1 * n2
    document.getElementById("resul").innerHTML = n1 + " " + op + " " + n2 + " = " + resul;
}
function divi(n1, n2, op) {
    resul = n1 / n2
    document.getElementById("resul").innerHTML = n1 + " " + op + " " + n2 + " = " + resul;
}

function Calcular() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let op = document.getElementById("op").value;
    switch (op) {
        case '+':
            soma(n1, n2, op)
            break
        case '-':
            sub(n1, n2, op)
            break
        case '*':
            mult(n1, n2, op)
            break
        case '/':
            if (n2 == 0) {
                document.getElementById("resul").innerHTML = "Não Existe divisão por 0"
            } else {
                divi(n1, n2, op)
            }
            break
        default:
            document.getElementById("resul").innerHTML = "Opção Inválida!"

    }
}

function troca1() {
    document.getElementById("op").value = "+"
}

function troca2() {
    document.getElementById("op").value = "-"
}
function troca3() {
    document.getElementById("op").value = "*"
}
function troca4() {
    document.getElementById("op").value = "/"
}