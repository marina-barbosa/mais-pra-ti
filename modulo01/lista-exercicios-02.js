const prompt = require('prompt-sync')();




// Exercicio 01 - fumantes

// const cigarrosPorDia = parseFloat(prompt("Quantos cigarros você fuma por dia? "));
// const anosFumados = parseFloat(prompt("Por quantos anos você já fumou? "));

// const totalCigarros = cigarrosPorDia * anosFumados * 365;
// const totalMinutosPerdidos = totalCigarros * 10;
// const totalDiasPerdidos = totalMinutosPerdidos / (24 * 60);

// console.log(`Você perderá aproximadamente ${totalDiasPerdidos.toFixed(2)} dias de vida devido ao tabagismo.`);




// Exercicio 02 - radar de velocidade

// const velocidade = parseFloat(prompt("Qual é a velocidade do carro (em Km/h)? "));

// const limiteVelocidade = 80;
// const valorMultaPorKmExcedido = 5;

// if (velocidade > limiteVelocidade) {
//     const velocidadeExcedida = velocidade - limiteVelocidade;
//     const multa = velocidadeExcedida * valorMultaPorKmExcedido;
//     console.log(`Você foi multado! Velocidade excedida: ${velocidadeExcedida} Km/h`);
//     console.log(`Valor da multa: R$ ${multa.toFixed(2)}`);
// } else {
//     console.log("Você está dentro do limite de velocidade. Dirija com segurança!");
// }




// Exercicio 03

// const distancia = parseFloat(prompt("Qual é a distância que você deseja percorrer (em Km)? "));

// const precoViagemCurta = 0.50;
// const precoViagemLonga = 0.45;

// let precoPassagem;

// if (distancia <= 200) {
//     precoPassagem = distancia * precoViagemCurta;
// } else {
//     precoPassagem = distancia * precoViagemLonga;
// }

// console.log(`O preço da passagem é: R$ ${precoPassagem.toFixed(2)}`);


// Exercicio 04

// function verificarTriangulo(seg1, seg2, seg3) {
//     if (seg1 < seg2 + seg3 && seg2 < seg1 + seg3 && seg3 < seg1 + seg2) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const segmento1 = parseFloat(prompt("Digite o tamanho do primeiro segmento de reta: "));
// const segmento2 = parseFloat(prompt("Digite o tamanho do segundo segmento de reta: "));
// const segmento3 = parseFloat(prompt("Digite o tamanho do terceiro segmento de reta: "));

// if (verificarTriangulo(segmento1, segmento2, segmento3)) {
//     console.log("É possível formar um triângulo com os segmentos de reta fornecidos.");
// } else {
//     console.log("Não é possível formar um triângulo com os segmentos de reta fornecidos.");
// }


// Exercicio 05

// function jogadaComputador() {
//   const jogadas = ['Pedra', 'Papel', 'Tesoura'];
//   const indice = Math.floor(Math.random() * 3);
//   return jogadas[indice];
// }

// function determinarVencedor(jogadaUsuario, jogadaComputador) {
//   if (jogadaUsuario === jogadaComputador) {
//     return "Empate!";
//   } else if (
//     (jogadaUsuario === 'Pedra' && jogadaComputador === 'Tesoura') ||
//     (jogadaUsuario === 'Papel' && jogadaComputador === 'Pedra') ||
//     (jogadaUsuario === 'Tesoura' && jogadaComputador === 'Papel')
//   ) {
//     return "Você ganhou!";
//   } else {
//     return "Você perdeu!";
//   }
// }

// function jogarJoKenPo() {
//   console.log("Bem-vindo ao jogo de Pedra-Papel-Tesoura!");

//   while (true) {
//     const escolhaUsuario = prompt("Escolha sua jogada (Pedra, Papel ou Tesoura): ").toLowerCase();

//     if (escolhaUsuario !== 'pedra' && escolhaUsuario !== 'papel' && escolhaUsuario !== 'tesoura') {
//       console.log("Escolha inválida. Por favor, escolha Pedra, Papel ou Tesoura.");
//       continue;
//     }

//     const escolhaComputador = jogadaComputador();

//     console.log(`Você escolheu: ${escolhaUsuario}`);
//     console.log(`O computador escolheu: ${escolhaComputador}`);

//     const resultado = determinarVencedor(escolhaUsuario, escolhaComputador);
//     console.log(resultado);

//     const jogarNovamente = prompt("Deseja jogar novamente? (s/n): ").toLowerCase();
//     if (jogarNovamente !== 's') {
//       console.log("Obrigado por jogar!");
//       break;
//     }
//   }
// }

// jogarJoKenPo();

// Exercicio 06


// function gerarNumeroAleatorio() {
//     return Math.floor(Math.random() * 5) + 1;
// }


// function jogarAdivinhacao() {
//     console.log("Bem-vindo ao jogo de adivinhação!");

//     while (true) {
//         const numeroSorteado = gerarNumeroAleatorio();
//         console.log("Um número entre 1 e 5 foi sorteado. Tente adivinhar!");

//         let tentativa = parseInt(prompt("Digite seu palpite: "));

//         // Validar a entrada do usuário
//         while (isNaN(tentativa) || tentativa < 1 || tentativa > 5) {
//             console.log("Por favor, digite um número válido entre 1 e 5.");
//             tentativa = parseInt(prompt("Digite seu palpite: "));
//         }

//         console.log(`O número sorteado foi: ${numeroSorteado}`);

//         if (tentativa === numeroSorteado) {
//             console.log("Parabéns! Você acertou!");
//         } else {
//             console.log("Que pena! Você errou.");
//         }

//         const jogarNovamente = prompt("Deseja jogar novamente? (s/n): ").toLowerCase();
//         if (jogarNovamente !== 's') {
//             console.log("Obrigado por jogar!");
//             break;
//         }
//     }
// }

// jogarAdivinhacao();

// Exercicio 07

// function calcularPrecoAluguel(tipoCarro, diasAluguel, kmPercorridos) {
//     let precoDiario;
//     let precoPorKm;

//     if (tipoCarro === 'popular') {
//         precoDiario = 90;
//         precoPorKm = kmPercorridos <= 100 ? 0.20 : 0.10;
//     } else if (tipoCarro === 'luxo') {
//         precoDiario = 150;
//         precoPorKm = kmPercorridos <= 200 ? 0.30 : 0.25;
//     } else {
//         console.log("Tipo de carro inválido!");
//         return;
//     }

//     const precoAluguel = (precoDiario * diasAluguel) + (precoPorKm * kmPercorridos);

//     return precoAluguel;
// }

// const tipoCarro = prompt("Qual é o tipo de carro alugado (popular ou luxo)? ").toLowerCase();
// const diasAluguel = parseInt(prompt("Quantos dias de aluguel? "));
// const kmPercorridos = parseFloat(prompt("Quantos Km foram percorridos? "));

// const precoTotal = calcularPrecoAluguel(tipoCarro, diasAluguel, kmPercorridos);

// if (precoTotal !== undefined) {
//     console.log(`O preço total a ser pago é: R$ ${precoTotal.toFixed(2)}`);
// }

// Exercicio 08

// function calcularPontosEDinheiro(horasAtividade) {
//     let pontos;
//     let dinheiro;

//     if (horasAtividade <= 10) {
//         pontos = horasAtividade * 2;
//     } else if (horasAtividade <= 20) {
//         pontos = 10 * 2 + (horasAtividade - 10) * 5;
//     } else {
//         pontos = 10 * 2 + 10 * 5 + (horasAtividade - 20) * 10;
//     }

//     dinheiro = pontos * 0.05;

//     return { pontos, dinheiro };
// }

// const horasAtividade = parseFloat(prompt("Quantas horas de atividade física você teve no mês? "));

// const { pontos, dinheiro } = calcularPontosEDinheiro(horasAtividade);

// console.log(`Você ganhou ${pontos} pontos.`);
// console.log(`Isso equivale a R$ ${dinheiro.toFixed(2)}.`);

// Exercicio 09

// let totalSalarioHomens = 0;
// let totalSalarioMulheres = 0;

// while (true) {
//     const salario = parseFloat(prompt("Digite o salário do funcionário: "));
//     const sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino): ").toUpperCase();

//     if (sexo === 'M') {
//         totalSalarioHomens += salario;
//     } else if (sexo === 'F') {
//         totalSalarioMulheres += salario;
//     } else {
//         console.log("Sexo inválido. Por favor, digite M para masculino ou F para feminino.");
//         continue;
//     }

//     const continuar = prompt("Deseja continuar? (S/N): ").toUpperCase();
//     if (continuar !== 'S') {
//         break;
//     }
// }

// console.log(`Total de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
// console.log(`Total de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);

// Exercicio 10

// let somatorio = 0;
// let menorValor;
// let quantidadeValores = 0;
// let quantidadePares = 0;

// do {
//     const numero = parseFloat(prompt("Digite um número: "));
//     somatorio += numero;
//     quantidadeValores++;

//     if (menorValor === undefined || numero < menorValor) {
//         menorValor = numero;
//     }

//     if (numero % 2 === 0) {
//         quantidadePares++;
//     }

//     const continuar = prompt("Deseja continuar? (S/N): ").toUpperCase();
//     if (continuar !== 'S') {
//         break;
//     }
// } while (true);

// const media = somatorio / quantidadeValores;

// console.log(`Somatório dos valores: ${somatorio}`);
// console.log(`Menor valor digitado: ${menorValor}`);
// console.log(`Média dos valores: ${media}`);
// console.log(`Quantidade de valores pares: ${quantidadePares}`);

// Exercicio 11

// // Função para calcular a soma dos termos de uma PA
// function calcularSomaPA(primeiroTermo, razao, numeroTermos) {
//     return numeroTermos * (2 * primeiroTermo + (numeroTermos - 1) * razao) / 2;
// }

// // Entrada de dados
// const primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA: "));
// const razao = parseFloat(prompt("Digite a razão da PA: "));

// const numeroTermos = 10; // Vamos mostrar os 10 primeiros elementos da PA

// // Exibir os 10 primeiros elementos da PA
// console.log("Os 10 primeiros elementos da PA são:");
// let termoAtual = primeiroTermo;
// for (let i = 0; i < numeroTermos; i++) {
//     console.log(termoAtual);
//     termoAtual += razao;
// }

// // Calcular e exibir a soma dos termos da PA
// const somaPA = calcularSomaPA(primeiroTermo, razao, numeroTermos);
// console.log(`A soma dos termos da PA é: ${somaPA}`);

// Exercicio 12

// function fibonacci() {
//   let fibonacciArray = [1, 1];

//   for (let i = 2; i < 10; i++) {
//       fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
//   }

//   return fibonacciArray;
// }

// const sequenciaFibonacci = fibonacci();
// console.log("Os 10 primeiros elementos da sequência de Fibonacci são:");
// console.log(sequenciaFibonacci.join(', '));

// Exercicio 13

// function fibonacciArray(n) {
//   let fibonacciArray = [1, 1];

//   for (let i = 2; i < n; i++) {
//       fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
//   }

//   return fibonacciArray;
// }

// const vetorFibonacci = fibonacciArray(15);

// console.log("Vetor com os primeiros 15 elementos da sequência de Fibonacci:");
// console.log(vetorFibonacci);

// Exercicio 14

// let nomes = [];

// for (let i = 0; i < 7; i++) {
//     const nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
//     nomes.push(nome);
// }

// console.log("Listagem dos nomes na ordem inversa:");
// for (let i = nomes.length - 1; i >= 0; i--) {
//     console.log(nomes[i]);
// }


// Exercicio 15

// let numeros = [];

// let posicoesPares = [];

// for (let i = 0; i < 10; i++) {
//     const numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
//     numeros.push(numero);
// }

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0) {
//         posicoesPares.push({numero: numeros[i], posicao: i});
//     }
// }

// console.log("Números pares digitados e suas posições:");
// posicoesPares.forEach(par => {
//     console.log(`Número par: ${par.numero}, Posição: ${par.posicao}`);
// });

// Exercicio 16

// function gerarNumeroAleatorio(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function preencherVetorAleatorio(tamanho) {
//   let vetor = [];
//   for (let i = 0; i < tamanho; i++) {
//       vetor.push(gerarNumeroAleatorio(0, 100));
//   }
//   return vetor;
// }

// function ordenarVetorCrescente(vetor) {
//   return vetor.sort((a, b) => a - b);
// }

// function exibirVetor(vetor) {
//   console.log(vetor.join(', '));
// }

// let vetorAleatorio = preencherVetorAleatorio(20);

// console.log("Números gerados:");
// exibirVetor(vetorAleatorio);

// let vetorOrdenado = ordenarVetorCrescente(vetorAleatorio);

// console.log("Números ordenados:");
// exibirVetor(vetorOrdenado);

// Exercicio 17

// let nomes = [];
// let idades = [];

// for (let i = 0; i < 9; i++) {
//     const nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
//     const idade = parseInt(prompt(`Digite a idade de ${nome}: `));

//     nomes.push(nome);
//     idades.push(idade);
// }

// console.log("Pessoas menores de idade:");
// for (let i = 0; i < nomes.length; i++) {
//     if (idades[i] < 18) {
//         console.log(`${nomes[i]} - ${idades[i]} anos`);
//     }
// }

// Exercicio 18

// let registro = {
//     nome: prompt("Digite o nome do funcionário: "),
//     cargo: prompt("Digite o cargo do funcionário: "),
//     salario: parseFloat(prompt("Digite o salário do funcionário: "))
// };

// console.log("Registro do funcionário:");
// console.log(registro);

// Exercicio 19
// com regex
// function validarHorario(horario) {
//     const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
//     return regex.test(horario);
// }

// let horarios = [];

// for (let i = 0; i < 5; i++) {
//     let horario;
//     do {
//         horario = prompt(`Digite o ${i + 1}º horário (HH:MM:SS): `);
//         if (!validarHorario(horario)) {
//             console.log("Horário inválido. Formato correto: HH:MM:SS");
//         }
//     } while (!validarHorario(horario));

//     horarios.push(horario);
// }

// console.log("Horários digitados:");
// console.log(horarios);

//sem regex
// function validarHorario(horario) {
//     const partes = horario.split(':');
//     if (partes.length !== 3) {
//         return false;
//     }

//     const horas = parseInt(partes[0]);
//     const minutos = parseInt(partes[1]);
//     const segundos = parseInt(partes[2]);

//     if (horas < 0 || horas > 23 || isNaN(horas)) {
//         return false;
//     }

//     if (minutos < 0 || minutos > 59 || isNaN(minutos)) {
//         return false;
//     }

//     if (segundos < 0 || segundos > 59 || isNaN(segundos)) {
//         return false;
//     }

//     return true;
// }

// let horarios = [];

// for (let i = 0; i < 5; i++) {
//     let horario;
//     do {
//         horario = prompt(`Digite o ${i + 1}º horário (HH:MM:SS): `);
//         if (!validarHorario(horario)) {
//             console.log("Horário inválido. Formato correto: HH:MM:SS");
//         }
//     } while (!validarHorario(horario));

//     horarios.push(horario);
// }

// console.log("Horários digitados:");
// console.log(horarios);


// Exercicio 20

// function calcularSalarioLiquido(salarioBruto) {
//   const deducaoINSS = salarioBruto * 0.12;
//   const salarioLiquido = salarioBruto - deducaoINSS;
//   return { deducaoINSS, salarioLiquido };
// }

// let funcionarios = [
//   { matricula: 1, nome: "João", salarioBruto: 2500 },
//   { matricula: 2, nome: "Maria", salarioBruto: 3000 },
//   { matricula: 3, nome: "Pedro", salarioBruto: 3500 }
// ];

// for (let i = 0; i < funcionarios.length; i++) {
//   const funcionario = funcionarios[i];
//   const { deducaoINSS, salarioLiquido } = calcularSalarioLiquido(funcionario.salarioBruto);

//   console.log(`Matrícula: ${funcionario.matricula}`);
//   console.log(`Nome: ${funcionario.nome}`);
//   console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
//   console.log(`Dedução INSS: R$ ${deducaoINSS.toFixed(2)}`);
//   console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}\n`);
// }

// Exercicio 21
// function calcularPesoIdeal(altura, sexo) {
//   if (sexo === 'M') {
//       return 72.7 * altura - 58;
//   } else if (sexo === 'F') {
//       return 62.1 * altura - 44.7;
//   } else {
//       return null;
//   }
// }

// const altura = 1.75;
// const sexo = 'M';
// const pesoIdeal = calcularPesoIdeal(altura, sexo);
// console.log(`O peso ideal para uma pessoa do sexo ${sexo} com altura ${altura}m é ${pesoIdeal}kg`);

// Exercicio 22
// function calcularEstatisticasPopulacao() {
//     let totalSalarios = 0;
//     let totalFilhos = 0;
//     let maiorSalario = -Infinity;
//     let countSalariosAte350 = 0;
//     let totalPessoas = 0;

//     while (true) {
//         const salario = parseFloat(prompt("Digite o salário da pessoa (ou '0' para encerrar): "));
//         if (salario === 0) break;

//         const numFilhos = parseInt(prompt("Digite o número de filhos da pessoa: "));

//         totalSalarios += salario;
//         totalFilhos += numFilhos;
//         totalPessoas++;

//         if (salario > maiorSalario) {
//             maiorSalario = salario;
//         }

//         if (salario <= 350) {
//             countSalariosAte350++;
//         }
//     }

//     const mediaSalarios = totalSalarios / totalPessoas;
//     const mediaFilhos = totalFilhos / totalPessoas;
//     const percentualSalariosAte350 = (countSalariosAte350 / totalPessoas) * 100;

//     return {
//         mediaSalarios,
//         mediaFilhos,
//         maiorSalario,
//         percentualSalariosAte350
//     };
// }

// const estatisticas = calcularEstatisticasPopulacao();
// console.log(`Média de salário da população: ${estatisticas.mediaSalarios}`);
// console.log(`Média de filhos por pessoa: ${estatisticas.mediaFilhos}`);
// console.log(`Maior salário da população: ${estatisticas.maiorSalario}`);
// console.log(`Percentual de pessoas com salário até R$ 350,00: ${estatisticas.percentualSalariosAte350}%`);

// Exercicio 23
// function matrizIdentidade() {
//   const tamanho = 7;
//   let matriz = [];

//   for (let i = 0; i < tamanho; i++) {
//       matriz.push([]);
//       for (let j = 0; j < tamanho; j++) {
//           if (i === j) {
//               matriz[i][j] = 1;
//           } else {
//               matriz[i][j] = 0;
//           }
//       }
//   }

//   for (let i = 0; i < tamanho; i++) {
//       console.log(matriz[i].join(' '));
//   }
// }

// matrizIdentidade();

// Exercicio 24
// function contarNegativosPorLinha(matriz) {
//   let vetorContagemNegativos = [];

//   for (let i = 0; i < matriz.length; i++) {
//       let contagemNegativos = 0;
//       for (let j = 0; j < matriz[i].length; j++) {
//           if (matriz[i][j] < 0) {
//               contagemNegativos++;
//           }
//       }
//       vetorContagemNegativos.push(contagemNegativos);
//   }

//   return vetorContagemNegativos;
// }

// const matrizM = [
//   [1, -2, 3, -4, 5, -6, 7, -8],
//   [-1, 2, -3, 4, -5, 6, -7, 8],
//   [1, -2, 3, -4, 5, -6, 7, -8],
//   [-1, 2, -3, 4, -5, 6, -7, 8],
//   [1, -2, 3, -4, 5, -6, 7, -8],
//   [-1, 2, -3, 4, -5, 6, -7, 8]
// ];

// const vetorC = contarNegativosPorLinha(matrizM);
// console.log("Vetor C:", vetorC);

// Exercicio 25
// function criarMatriz() {
//     let matriz = [];

//     for (let i = 0; i < 15; i++) {
//         matriz.push([]);
//         for (let j = 0; j < 20; j++) {
//             matriz[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
//         }
//     }

//     return matriz;
// }

// function somaColunas(matriz) {
//     let somaColunas = Array.from({ length: matriz[0].length }, () => 0);

//     for (let i = 0; i < matriz.length; i++) {
//         for (let j = 0; j < matriz[i].length; j++) {
//             somaColunas[j] += matriz[i][j];
//         }
//     }

//     return somaColunas;
// }

// const matriz = criarMatriz();
// const somaDasColunas = somaColunas(matriz);
// console.log("Soma de cada coluna:");
// console.log(somaDasColunas);

// Exercicio 26

// function produtoMatrizes(A, B) {
//   const linhasA = A.length;
//   const colunasA = A[0].length;
//   const linhasB = B.length;
//   const colunasB = B[0].length;

//   if (colunasA !== linhasB) {
//       throw new Error("Não é possível multiplicar as matrizes: número de colunas de A diferente do número de linhas de B");
//   }

//   let P = Array.from({ length: linhasA }, () => Array.from({ length: colunasB }, () => 0));

//   for (let i = 0; i < linhasA; i++) {
//       for (let j = 0; j < colunasB; j++) {
//           for (let k = 0; k < colunasA; k++) {
//               P[i][j] += A[i][k] * B[k][j];
//           }
//       }
//   }

//   return P;
// }

// const A = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15]
// ];

// const B = [
//   [1, 1, 1, 1, 1],
//   [2, 2, 2, 2, 2],
//   [3, 3, 3, 3, 3]
// ];

// const P = produtoMatrizes(A, B);
// console.log("Matriz produto P:");
// console.log(P);

// Exercicio 27
// function criarMatriz() {
//     let matriz = [];

//     for (let i = 0; i < 6; i++) {
//         matriz.push([]);
//         for (let j = 0; j < 6; j++) {
//             matriz[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}] da matriz M: `));
//         }
//     }

//     return matriz;
// }

// function multiplicarMatrizPorA(matriz, valorA) {
//     let vetor = [];

//     for (let i = 0; i < matriz.length; i++) {
//         for (let j = 0; j < matriz[i].length; j++) {
//             vetor.push(matriz[i][j] * valorA);
//         }
//     }

//     return vetor;
// }

// const matrizM = criarMatriz();
// const valorA = parseFloat(prompt("Digite o valor de A: "));
// const vetorV = multiplicarMatrizPorA(matrizM, valorA);
// console.log("Vetor V:");
// console.log(vetorV);

// Exercicio 28
// function criarMatriz() {
//     let matriz = [];

//     for (let i = 0; i < 10; i++) {
//         matriz.push([]);
//         for (let j = 0; j < 10; j++) {
//             matriz[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}] da matriz: `));
//         }
//     }

//     return matriz;
// }

// function calcularSomasDiagonal(matriz) {
//     let somaAcimaDiagonal = 0;
//     let somaAbaixoDiagonal = 0;

//     for (let i = 0; i < 10; i++) {
//         for (let j = 0; j < 10; j++) {
//             if (j > i) {
//                 somaAcimaDiagonal += matriz[i][j];
//             } else if (i > j) {
//                 somaAbaixoDiagonal += matriz[i][j];
//             }
//         }
//     }

//     return { somaAcimaDiagonal, somaAbaixoDiagonal };
// }

// const matriz = criarMatriz();
// const { somaAcimaDiagonal, somaAbaixoDiagonal } = calcularSomasDiagonal(matriz);
// console.log("Soma dos elementos acima da diagonal principal:", somaAcimaDiagonal);
// console.log("Soma dos elementos abaixo da diagonal principal:", somaAbaixoDiagonal);

// Exercicio 29
// function calcularSomasEMostrarMatriz(matriz) {
//   let somaLinha4 = 0;
//   let somaColuna2 = 0;
//   let somaDiagonalPrincipal = 0;
//   let somaTotal = 0;

//   for (let i = 0; i < 5; i++) {
//       for (let j = 0; j < 5; j++) {
//           const elemento = matriz[i][j];
//           somaTotal += elemento;

//           if (i === 3) {
//               somaLinha4 += elemento;
//           }

//           if (j === 1) {
//               somaColuna2 += elemento;
//           }

//           if (i === j) {
//               somaDiagonalPrincipal += elemento;
//           }
//       }
//   }

//   console.log("Soma da linha 4:", somaLinha4);
//   console.log("Soma da coluna 2:", somaColuna2);
//   console.log("Soma da diagonal principal:", somaDiagonalPrincipal);
//   console.log("Soma total:", somaTotal);

//   console.log("Matriz:");
//   for (let i = 0; i < 5; i++) {
//       console.log(matriz[i].join(' '));
//   }
// }

// const matrizM = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25]
// ];

// calcularSomasEMostrarMatriz(matrizM);

// Exercicio 30

// function criarMatriz() {
//   let matriz = [];

//   for (let i = 0; i < 5; i++) {
//       matriz.push([]);
//       for (let j = 0; j < 5; j++) {
//           matriz[i][j] = Math.floor(Math.random() * 10);
//       }
//   }

//   return matriz;
// }

// function calcularSomasLinhasColunas(matriz) {
//   let SL = [];
//   let SC = [];

//   for (let i = 0; i < 5; i++) {
//       let somaLinha = 0;
//       let somaColuna = 0;
//       for (let j = 0; j < 5; j++) {
//           somaLinha += matriz[i][j];
//           somaColuna += matriz[j][i];
//       }
//       SL.push(somaLinha);
//       SC.push(somaColuna);
//   }

//   return { SL, SC };
// }

// const matrizM = criarMatriz();
// console.log("Matriz M:");
// for (let i = 0; i < 5; i++) {
//   console.log(matrizM[i].join(' '));
// }

// const { SL, SC } = calcularSomasLinhasColunas(matrizM);
// console.log("Vetor SL:", SL);
// console.log("Vetor SC:", SC);

// Exercicio 31
// function contarElementosDiferentesDeA(matrizV, valorA) {
//   let contadorA = 0;
//   let matrizX = [];

//   for (let i = 0; i < matrizV.length; i++) {
//       matrizX.push([]);
//       for (let j = 0; j < matrizV[i].length; j++) {
//           if (matrizV[i][j] === valorA) {
//               contadorA++;
//           } else {
//               matrizX[i].push(matrizV[i][j]);
//           }
//       }
//   }

//   return { contadorA, matrizX };
// }

// function criarMatrizAleatoria() {
//   let matriz = [];

//   for (let i = 0; i < 30; i++) {
//       matriz.push([]);
//       for (let j = 0; j < 30; j++) {
//           matriz[i][j] = Math.floor(Math.random() * 10);
//       }
//   }

//   return matriz;
// }

// const valorA = parseInt(prompt("Digite um número inteiro A: "));
// const matrizV = criarMatrizAleatoria();
// const { contadorA, matrizX } = contarElementosDiferentesDeA(matrizV, valorA);

// console.log(`Número de ocorrências do número ${valorA} na matriz V: ${contadorA}`);
// console.log("Matriz X:");
// for (let i = 0; i < matrizX.length; i++) {
//   console.log(matrizX[i].join(' '));
// }

// Exercicio 32
// function criarMatriz() {
//   let matriz = [];

//   for (let i = 0; i < 12; i++) {
//       matriz.push([]);
//       for (let j = 0; j < 13; j++) {
//           matriz[i][j] = Math.floor(Math.random() * 21) - 10;
//       }
//   }

//   return matriz;
// }

// function encontrarMaiorElementoModuloLinha(linha) {
//   let maiorElementoModulo = Math.abs(linha[0]);

//   for (let i = 1; i < linha.length; i++) {
//       const elementoModulo = Math.abs(linha[i]);
//       if (elementoModulo > maiorElementoModulo) {
//           maiorElementoModulo = elementoModulo;
//       }
//   }

//   return maiorElementoModulo;
// }

// function dividirPorMaiorElementoModulo(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//       const maiorElementoModuloLinha = encontrarMaiorElementoModuloLinha(matriz[i]);
//       for (let j = 0; j < matriz[i].length; j++) {
//           matriz[i][j] /= maiorElementoModuloLinha;
//       }
//   }
// }

// function imprimirMatriz(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//       console.log(matriz[i].join(' '));
//   }
// }

// const matrizM = criarMatriz();
// console.log("Matriz original M:");
// imprimirMatriz(matrizM);

// dividirPorMaiorElementoModulo(matrizM);
// console.log("\nMatriz modificada M:");
// imprimirMatriz(matrizM);

// Exercicio 33

// function calcularMediaDiagonalSecundaria(matriz) {
//   const tamanho = matriz.length;
//   let soma = 0;
//   let contador = 0;

//   for (let i = 0; i < tamanho; i++) {
//       for (let j = 0; j < tamanho; j++) {
//           if (i + j === tamanho - 1) {
//               soma += matriz[i][j];
//               contador++;
//           }
//       }
//   }

//   return soma / contador;
// }

// function multiplicarDiagonalPelaMedia(matriz) {
//   const tamanho = matriz.length;
//   const mediaDiagonalSecundaria = calcularMediaDiagonalSecundaria(matriz);

//   for (let i = 0; i < tamanho; i++) {
//       matriz[i][i] *= mediaDiagonalSecundaria;
//   }
// }

// const matriz3x3 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// console.log("Matriz original:");
// imprimirMatriz(matriz3x3);

// multiplicarDiagonalPelaMedia(matriz3x3);
// console.log("\nMatriz modificada:");
// imprimirMatriz(matriz3x3);

// Exercicio 34
// function criarMatriz() {
//   let matriz = [];

//   for (let i = 0; i < 50; i++) {
//       matriz.push([]);
//       for (let j = 0; j < 50; j++) {
//           matriz[i][j] = Math.random() * 10;
//       }
//   }

//   return matriz;
// }

// function multiplicarLinhaPelaDiagonal(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//       const elementoDiagonal = matriz[i][i];
//       for (let j = 0; j < matriz[i].length; j++) {
//           matriz[i][j] *= elementoDiagonal;
//       }
//   }
// }

// function imprimirMatriz(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//       console.log(matriz[i].join(' '));
//   }
// }

// const matriz50x50 = criarMatriz();
// console.log("Matriz original:");
// imprimirMatriz(matriz50x50);

// multiplicarLinhaPelaDiagonal(matriz50x50);
// console.log("\nMatriz após as multiplicações:");
// imprimirMatriz(matriz50x50);

// Exercicio 35

// function separarParesEImpares() {
//     let vetorPares = [];
//     let vetorImpares = [];

//     while (true) {
//         for (let i = 0; i < 30; i++) {
//             const numero = parseFloat(prompt(`Digite o ${i + 1}º número: `));
//             if (numero % 2 === 0) {
//                 vetorPares.push(numero);
//             } else {
//                 vetorImpares.push(numero);
//             }

//             if (vetorPares.length === 5) {
//                 console.log("Vetor de pares cheio:", vetorPares);
//                 vetorPares = [];
//             }

//             if (vetorImpares.length === 5) {
//                 console.log("Vetor de ímpares cheio:", vetorImpares);
//                 vetorImpares = [];
//             }
//         }

//         if (vetorPares.length > 0) {
//             console.log("Vetor de pares:", vetorPares);
//         }

//         if (vetorImpares.length > 0) {
//             console.log("Vetor de ímpares:", vetorImpares);
//         }

//         const continuar = prompt("Deseja continuar? (s/n): ");
//         if (continuar.toLowerCase() !== 's') {
//             break;
//         }
//     }
// }

// separarParesEImpares();

// Exercicio 36
// function lerRespostas() {
//     let respostas = [];
//     for (let i = 0; i < 13; i++) {
//         const resposta = parseInt(prompt(`Digite a resposta para a questão ${i + 1}: `));
//         respostas.push(resposta);
//     }
//     return respostas;
// }

// function contarAcertos(gabarito, respostas) {
//     let acertos = 0;
//     for (let i = 0; i < 13; i++) {
//         if (gabarito[i] === respostas[i]) {
//             acertos++;
//         }
//     }
//     return acertos;
// }

// const gabarito = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3];

// for (let apostador = 1; apostador <= 100; apostador++) {
//     console.log(`Apostador ${apostador}:`);
//     const respostas = lerRespostas();
//     const numAcertos = contarAcertos(gabarito, respostas);
//     console.log(`Número de acertos: ${numAcertos}`);
//     if (numAcertos === 13) {
//         console.log("Parabéns, você foi o GANHADOR!");
//     }
//     console.log();
// }

// Exercicio 37

// function contarAcertos(gabarito, respostas) {
//   let acertos = 0;
//   for (let i = 0; i < 20; i++) {
//       if (gabarito[i] === respostas[i]) {
//           acertos++;
//       }
//   }
//   return acertos;
// }

// function verificarAprovacao(numAcertos) {
//   if (numAcertos >= 12) {
//       return "APROVADO";
//   } else {
//       return "REPROVADO";
//   }
// }

// const gabaritoProva = ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'];

// for (let aluno = 1; aluno <= 50; aluno++) {
//   console.log(`Aluno ${aluno}:`);
//   const respostasAluno = lerRespostas();
//   const numAcertosAluno = contarAcertos(gabaritoProva, respostasAluno);
//   console.log(`Número de acertos: ${numAcertosAluno}`);
//   console.log(verificarAprovacao(numAcertosAluno));
//   console.log();
// }

// Exercicio 38

// function lerVetor() {
//     let vetor = [];
//     for (let i = 0; i < 6; i++) {
//         vetor.push(parseFloat(prompt(`Digite o ${i + 1}º número: `)));
//     }
//     return vetor;
// }

// function calcularSoma(vetor) {
//     let soma = 0;
//     for (let i = 0; i < vetor.length; i++) {
//         soma += vetor[i];
//     }
//     return soma;
// }

// function calcularProduto(vetor) {
//     let produto = 1;
//     for (let i = 0; i < vetor.length; i++) {
//         produto *= vetor[i];
//     }
//     return produto;
// }

// function calcularMedia(vetor) {
//     const soma = calcularSoma(vetor);
//     return soma / vetor.length;
// }

// function ordenarCrescente(vetor) {
//     return vetor.sort((a, b) => a - b);
// }

// function mostrarVetor(vetor) {
//     console.log("Vetor:", vetor);
// }

// function operarVetor() {
//     const vetor = lerVetor();
//     const operacao = parseInt(prompt("Escolha a operação desejada:\n1- Soma dos elementos\n2- Produto dos elementos\n3- Média dos elementos\n4- Ordenar os elementos em ordem crescente\n5- Mostrar o vetor\n"));

//     switch (operacao) {
//         case 1:
//             console.log("Soma dos elementos:", calcularSoma(vetor));
//             break;
//         case 2:
//             console.log("Produto dos elementos:", calcularProduto(vetor));
//             break;
//         case 3:
//             console.log("Média dos elementos:", calcularMedia(vetor));
//             break;
//         case 4:
//             console.log("Elementos ordenados em ordem crescente:", ordenarCrescente(vetor));
//             break;
//         case 5:
//             mostrarVetor(vetor);
//             break;
//         default:
//             console.log("Opção inválida.");
//     }
// }

// operarVetor();

// Exercicio 39

// function compactarVetor(vetor) {
//   let vetorCompactado = [];
//   for (let i = 0; i < vetor.length; i++) {
//       if (vetor[i] !== null && vetor[i] >= 0) {
//           vetorCompactado.push(vetor[i]);
//       }
//   }
//   return vetorCompactado;
// }

// const vetorA = [1, -2, 3, 0, null, 5, -6, null, 8, 9, -10];
// const vetorB = compactarVetor(vetorA);
// console.log("Vetor compactado:", vetorB);

// Exercicio 40
// function lerVetor() {
//     let vetor = [];
//     for (let i = 0; i < 5; i++) {
//         vetor.push(parseInt(prompt(`Digite o ${i + 1}º número: `)));
//     }
//     return vetor;
// }

// function verificarAposta(resultadoOficial, aposta) {
//     for (let i = 0; i < resultadoOficial.length; i++) {
//         if (resultadoOficial[i] !== aposta[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log("Digite os números do resultado oficial da Loto:");
// const resultadoOficial = lerVetor();

// let ganhadorEncontrado = false;
// for (let i = 1; i <= 50; i++) {
//     console.log(`Digite os números da aposta ${i}:`);
//     const aposta = lerVetor();
//     if (verificarAposta(resultadoOficial, aposta)) {
//         console.log("Ganhador!");
//         ganhadorEncontrado = true;
//         break;
//     }
// }

// if (!ganhadorEncontrado) {
//     console.log("Nenhum ganhador encontrado.");
// }

// Exercicio 41
// const pessoa = {
//   nome: "João",
//   idade: 30
// };

// console.log("Idade:", pessoa.idade);

// pessoa.email = "joao@example.com";

// console.log("Objeto pessoa atualizado:", pessoa);

// Exercicio 42
// const dados = {
//   numero: 10,
//   string: "Olá",
//   array1: [1, 2, 3],
//   array2: ["a", "b", "c"]
// };

// function filtrarArrays(objeto) {
//   const resultado = {};
//   for (const chave in objeto) {
//       if (Array.isArray(objeto[chave])) {
//           resultado[chave] = objeto[chave];
//       }
//   }
//   return resultado;
// }

// console.log("Objeto apenas com as propriedades que são arrays:", filtrarArrays(dados));

// Exercicio 43
// function combinarObjetos(obj1, obj2) {
//   const novoObjeto = { ...obj1, ...obj2 };
//   return novoObjeto;
// }

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const novoObjeto = combinarObjetos(obj1, obj2);
// console.log("Novo objeto combinado:", novoObjeto);

// Exercicio 44

// function contarPropriedadesString(objeto) {
//   let contador = 0;
//   for (const chave in objeto) {
//       if (typeof objeto[chave] === 'string') {
//           contador++;
//       }
//   }
//   return contador;
// }

// const exemploObjeto = { a: "Olá", b: 123, c: "Mundo", d: true };
// console.log("Número de propriedades do tipo string:", contarPropriedadesString(exemploObjeto));

// Exercicio 45

// function contarStrings(array) {
//   const objeto = {};
//   for (let i = 0; i < array.length; i++) {
//       const chave = array[i];
//       if (!objeto[chave]) {
//           objeto[chave] = 1;
//       } else {
//           objeto[chave]++;
//       }
//   }
//   return objeto;
// }

// const exemploArray = ["a", "b", "a", "c", "b", "a"];
// console.log("Objeto com contagem de strings:", contarStrings(exemploArray));

// Exercicio 46
// function totalVendasPorVendedor(vendas) {
//   const sumario = {};

//   vendas.forEach(venda => {
//       const vendedor = venda.vendedor;
//       const valor = venda.valor;

//       if (sumario[vendedor]) {
//           sumario[vendedor] += valor;
//       } else { 
//           sumario[vendedor] = valor;
//       }
//   });

//   return sumario;
// }

// const vendas = [
//   { vendedor: 'João', valor: 100 },
//   { vendedor: 'Maria', valor: 150 },
//   { vendedor: 'João', valor: 200 },
//   { vendedor: 'Pedro', valor: 120 },
//   { vendedor: 'Maria', valor: 80 }
// ];

// const resultado = totalVendasPorVendedor(vendas);
// console.log(resultado);

// Exercicio 47
// function transformarObjeto(objeto, funcao) {
//   const novoObjeto = {};

//   for (const chave in objeto) {

//       novoObjeto[chave] = funcao(objeto[chave]);
//   }
//   return novoObjeto;
// }

// const objetoEntrada = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// function dobrar(valor) {
//   return valor * 2;
// }

// const novoObjeto = transformarObjeto(objetoEntrada, dobrar);
// console.log(novoObjeto); 

// Exercicio 48
// function combinarInventarios(inventarioLojaA, inventarioLojaB) {
//   const inventarioCombinado = {};

//   for (const item in inventarioLojaA) {

//       inventarioCombinado[item] = inventarioLojaA[item];
//   }

//   for (const item in inventarioLojaB) {

//       if (inventarioCombinado[item]) {
//           inventarioCombinado[item] += inventarioLojaB[item];
//       } else { 
//           inventarioCombinado[item] = inventarioLojaB[item];
//       }
//   }

//   return inventarioCombinado;
// }

// const inventarioLojaA = {
//   "camisetas": 50,
//   "calças": 30,
//   "sapatos": 20
// };

// const inventarioLojaB = {
//   "camisetas": 40,
//   "calças": 25,
//   "meias": 50
// };

// const inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);
// console.log(inventarioCombinado);

// Exercicio 49
// function agruparTransacoesPorCategoria(transacoes) {
//   return transacoes.reduce((resultado, transacao) => {

//       const { categoria, valor } = transacao;

//       if (!resultado[categoria]) {

//           resultado[categoria] = { transacoes: [], subtotal: 0 };
//       }

//       resultado[categoria].transacoes.push(transacao);

//       resultado[categoria].subtotal += valor;

//       return resultado;
//   }, {});
// }

// const transacoes = [
//   { id: 1, valor: 100, data: "2024-05-21", categoria: "Alimentação" },
//   { id: 2, valor: 50, data: "2024-05-20", categoria: "Transporte" },
//   { id: 3, valor: 200, data: "2024-05-19", categoria: "Alimentação" },
//   { id: 4, valor: 150, data: "2024-05-18", categoria: "Lazer" },
//   { id: 5, valor: 120, data: "2024-05-17", categoria: "Transporte" }
// ];

// const transacoesAgrupadas = agruparTransacoesPorCategoria(transacoes);
// console.log(transacoesAgrupadas);

// Exercicio 50
// Definindo a estrutura de dados
const hoteis = [];
const reservas = [];

function cadastrarHotel(id, nome, cidade, quartosTotais) {
  const novoHotel = {
    id,
    nome,
    cidade,
    quartosTotais,
    quartosDisponiveis: quartosTotais
  };
  hoteis.push(novoHotel);
}

function buscarHoteisPorCidade(cidade) {
  const cidadeLowerCase = cidade.toLowerCase();
  return console.log(hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidadeLowerCase));
}

function fazerReserva(idReserva, idHotel, nomeCliente) {
  const hotel = hoteis.find(hotel => hotel.id === idHotel);
  if (hotel && hotel.quartosDisponiveis > 0) {
    reservas.push({ idReserva, idHotel, nomeCliente });
    hotel.quartosDisponiveis--;
    return true;
  }
  return false;
}

function cancelarReserva(idReserva) {
  const reservaIndex = reservas.findIndex(reserva => reserva.idReserva === idReserva);
  if (reservaIndex !== -1) {
    const reserva = reservas[reservaIndex];
    const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
    if (hotel) {
      hotel.quartosDisponiveis++;
      reservas.splice(reservaIndex, 1);
      return true;
    }
  }
  return false;
}

function listarReservas() {
  if (reservas.length > 0) {
    reservas.map(reserva => {
      console.log(reserva)
    });
    return;
  } else {
    return console.log("Nenhuma reserva cadastrada.")
  }
}

function listarHoteis() {
  if (hoteis.length > 1) {
    hoteis.map(hotel => {
      console.log(hotel)
    })
  } else {
    console.log("Nenhum hotel cadastrado.")
  }
}

function mostrarMenu() {
  console.log("Menu:");
  console.log("1. Cadastrar Hotel");
  console.log("2. Buscar Hotéis por Cidade");
  console.log("3. Fazer Reserva");
  console.log("4. Cancelar Reserva");
  console.log("5. Listar Reservas");
  console.log("6. Listar Hotéis");
  console.log("0. Sair");
}

cadastrarHotel(1, "Hotel A", "São Paulo", 10);
cadastrarHotel(2, "Hotel B", "Rio de Janeiro", 20);
cadastrarHotel(3, "Hotel C", "Santos", 15);
cadastrarHotel(4, "Hotel D", "São Paulo", 10);
cadastrarHotel(5, "Hotel E", "Rio de Janeiro", 10);
cadastrarHotel(6, "Hotel F", "Santos", 15);
fazerReserva(1, 4, "Hortência")

while (true) {
  mostrarMenu();
  const opcao = prompt('Escolha uma opção: ');

  switch (opcao) {
    case '1':
      console.log("Cadastrar Hotel");
      const nome = prompt('Digite o nome do hotel: ');
      const cidade = prompt('Digite a cidade do hotel: ');
      const quartosTotais = prompt('Digite o total de quartos: ');
      const id = hoteis.length + 1;
      cadastrarHotel(id, nome, cidade, quartosTotais);
      console.log("Hotel adicionado com sucesso!");
      console.log(hoteis[hoteis.length - 1]);
      break;
    case '2':
      console.log("Buscar Hotéis por Cidade");
      const busca = prompt('Digite a cidade: ');
      buscarHoteisPorCidade(busca)
      break;
    case '3':
      console.log("Fazer Reserva");
      const idHotel = prompt('Digite o ID do hotel: ');
      const nomeCliente = prompt('Digite seu nome: ');
      const idReserva = reservas.length + 1;
      console.log(idReserva)
      res = fazerReserva(idReserva, Number(idHotel), nomeCliente);
      if (res) {
        console.log("Reserva concluida com sucesso!");
        console.log(reservas[reservas.length - 1]);
      } else {
        console.log("Algo deu errado. Reserva cancelada.")
      }
      break;
    case '4':
      console.log("Cancelar Reserva");
      const idRes = prompt('Digite o ID da reserva: ');
      if (cancelarReserva(Number(idRes))) {
        console.log("Reserva cancelada com sucesso!");
      } else {
        console.log("Algo deu errado.")
      }
      break;
    case '5':
      console.log("Listar Reservas");
      listarReservas();
      break;
    case '6':
      console.log("Listar Hotéis");
      listarHoteis();
      break;
    case '0':
      console.log("Saindo...");
      process.exit();
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}




