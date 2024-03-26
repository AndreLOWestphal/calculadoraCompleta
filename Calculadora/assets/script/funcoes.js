
function adicionarNumero(numero){
    valorVisor += numero;
    display.value = valorVisor;
}

function selecionarOperacao(operacao){
    numero1 = parseFloat(valorVisor);
    valorVisor = '';
    operadorSelecionado = operacao;
}

function limparVisor(){
    valorVisor = '';
    numero1 = 0;
    operadorSelecionado = '';
    display.value = valorVisor;
}

function limparTudo(){
    valorVisor = '';
    numero1 = 0;
    operadorSelecionado = '';
    display.value = valorVisor;
}

function apagarUltimo(){
    valorVisor = valorVisor.slice(0,-1);
    display.value = valorVisor;
}

function mudarSinal(){
    if(valorVisor.charAt(0) === '-'){
        valorVisor.slice(1);
    }else{
        valorVisor = '-' + valorVisor;
    }
    display.value = valorVisor;
}

function adicionarMemoria(){
    memoria = numero1;
}

function recuperarMemoria(){
    valorViso = memoria.toString();
    display.value = valorVisor;
}

function calcularResultado(){
    let numero2 = parseFloat(valorVisor);
    let resultado;

    switch(operadorSelecionado){
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if(numero2 === 0){
                alert('A divisão por zero não pode ser feita!');
            }
            resultado = numero1 / numero2;
            break;
        case '%':
            resultado = (numero1/100) * numero2;
            break;
        case '^':
            resultado = Math.pow(numero1, numero2);
            break;
        case '1/x':
            resultado = 1 / numero1;
            break;
        case 'sqrt(x)':
            resultado = Math.sqrt(numero1)
            break;
        default:
            resultado = 'Erro'
    }

    valorVisor = resultado.toString();
    document.getElementById('display').value = valorVisor;

}
