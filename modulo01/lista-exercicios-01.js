const prompt = require('prompt-sync')();

// Exercicio 01
let celsius = parseFloat(prompt('Digite a temperatura em graus Celsius: '));

let f = (celsius * 9/5) + 32;

console.log("A temperatura em F é: " + f.toFixed(2));






// Exercicio 02
const numEleitores = parseInt(prompt("Digite o número total de eleitores: "));
const votosBrancos = parseInt(prompt("Digite o número de votos em branco: "));
const votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
const votosValidos = parseInt(prompt("Digite o número de votos válidos: "));

const percentualBrancos = (votosBrancos / numEleitores) * 100;
const percentualNulos = (votosNulos / numEleitores) * 100;
const percentualValidos = (votosValidos / numEleitores) * 100;

console.log("Percentual de votos em branco: " + percentualBrancos.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");




// Exercicio 03
const num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
const num2 = parseInt(prompt("Digite o segundo número inteiro: "));
const num3 = parseInt(prompt("Digite o terceiro número inteiro: "));

const resultado1 = num1 + 25;
const resultado2 = num2 * 3;
const resultado3 = num3 + (num3 * 0.12);
const resultado4 = num1 + num2 + num3;

console.log("Resultado da operação 1 (primeiro número + 25): " + resultado1);
console.log("Resultado da operação 2 (segundo número * 3): " + resultado2);
console.log("Resultado da operação 3 (terceiro número + 12%): " + resultado3);
console.log("Resultado da operação 4 (soma dos três primeiros números): " + resultado4);


// Exercicio 04
const nota1 = parseFloat(prompt("Digite a nota da primeira avaliação: "));
const nota2 = parseFloat(prompt("Digite a nota da segunda avaliação: "));

const media = (nota1 + nota2) / 2;

if (media >= 6.0) {
    console.log("Média semestral: " + media.toFixed(1));
    console.log("PARABÉNS! Você foi aprovado.");
} else {
    console.log("Média semestral: " + media.toFixed(1));
    console.log("Infelizmente, você não foi aprovado.");
}



// Exercicio 05
const notaB1 = parseFloat(prompt("Digite a nota da primeira avaliação: "));
const notaB2 = parseFloat(prompt("Digite a nota da segunda avaliação: "));

const mediaB = (notaB1 + notaB2) / 2;

if (mediaB >= 6.0) {
    console.log("Média semestral: " + mediaB.toFixed(1));
    console.log("PARABÉNS! Você foi aprovado.");
} else {
    console.log("Média semestral: " + mediaB.toFixed(1));
    console.log("Você foi REPROVADO! Estude mais.");
}



// Exercicio 06
const ladoA = parseFloat(prompt("Digite o valor do lado A do triângulo: "));
const ladoB = parseFloat(prompt("Digite o valor do lado B do triângulo: "));
const ladoC = parseFloat(prompt("Digite o valor do lado C do triângulo: "));

const formaTriangulo = ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;

if (formaTriangulo) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo equilátero");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo isósceles");
    } else {
        console.log("Triângulo escaleno");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo.");
}


// Exercicio 07
const quantidade = parseInt(prompt("Digite o número de maçãs compradas: "));

let precoUnitario;
if (quantidade < 12) {
    precoUnitario = 0.30;
} else {
    precoUnitario = 0.25;
}
const valorTotal = quantidade * precoUnitario;

console.log("Valor total da compra: R$" + valorTotal.toFixed(2));



// Exercicio 08
const valor1 = parseFloat(prompt("Digite o primeiro valor: "));
const valor2 = parseFloat(prompt("Digite o segundo valor: "));

let menor, maior;
if (valor1 < valor2) {
    menor = valor1;
    maior = valor2;
} else {
    menor = valor2;
    maior = valor1;
}

console.log("Valores em ordem crescente: " + menor + ", " + maior);


// Exercicio 09
const codigo = parseInt(prompt("Digite o código de origem do produto: "));

let regiao;
if (codigo === 1) {
    regiao = "sul";
} else if (codigo === 2) {
    regiao = "norte";
} else if (codigo === 3) {
    regiao = "leste";
} else if (codigo === 4) {
    regiao = "oeste";
} else if (codigo === 5 || codigo === 6) {
    regiao = "nordeste";
} else if (codigo >= 7 && codigo <= 9) {
    regiao = "sudeste";
} else if (codigo >= 10 && codigo <= 20) {
    regiao = "centro-oeste";
} else if (codigo >= 25 && codigo <= 50) {
    regiao = "nordeste";
} else {
    regiao = "produto importado";
}

console.log("Região do produto: " + regiao);


// Exercicio 10
const numero = parseInt(prompt("Digite um número inteiro: "));

for (let i = 0; i < 10; i++) {
    console.log(numero);
}


// Exercicio 11
while (true) {
  const valor = parseInt(prompt("Digite um valor inteiro (digite 0 para sair): "));

  if (valor <= 0) {
      break;
  }

  if (valor % 2 === 0) {
      console.log(valor + " é PAR.");
  } else {
      console.log(valor + " é ÍMPAR.");
  }
}



// Exercicio 12
for (let i = 1000; i <= 1999; i++) {
  if (i % 11 === 5) {
      console.log(i);
  }
}



// Exercicio 13
for (let j = 0; j < 5; j++) {
    const N = parseInt(prompt("Digite o valor de N: "));
    
    for (let i = 1; i <= N; i++) {
        console.log(i + " x " + N + " = " + (i * N));
    }
}


// Exercicio 14
let somaB = 0;
let quantidadeB = 0;
let numeroB;

while (true) {
    numeroB = parseFloat(prompt("Digite um número decimal (digite 0 para sair): "));
    
    if (numeroB === 0) {
        break;
    }
    
    somaB += numeroB;
    quantidadeB++;
}

if (quantidadeB !== 0) {
    const media = somaB / quantidadeB;
    console.log("Média aritmética: " + media.toFixed(2));
} else {
    console.log("Nenhum número foi inserido.");
}



// Exercicio 15
let soma = 0;
let somaPesos = 0;
let numeroC, peso;

while (true) {
    numeroC = parseFloat(prompt("Digite um número decimal (digite 0 para sair): "));
    
    if (numeroC === 0) {
        break;
    }
    
    peso = parseFloat(prompt("Digite o peso do número: "));
    
    soma += numeroC * peso;
    somaPesos += peso;
}

if (somaPesos !== 0) {
    const mediaPonderada = soma / somaPesos;
    console.log("Média ponderada: " + mediaPonderada.toFixed(2));
} else {
    console.log("Nenhum número foi inserido.");
}



// Exercicio 16
let contador = 0;
numero = 101;

while (contador < 50) {
    let divisor = 2;
    let ehPrimo = true;

    while (divisor <= Math.sqrt(numero)) {
        if (numero % divisor === 0) {
            ehPrimo = false;
            break;
        }
        divisor++;
    }

    if (ehPrimo) {
        console.log(numero);
        contador++;
    }
    numero++;
}


