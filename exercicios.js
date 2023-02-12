// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt(`Digite a altura`));
  const largura = Number(prompt(`Digite a largura`));
  const areaRetangulo = altura * largura;
  console.log(areaRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt(`Digite o ano atual`));
  const anodeNascimento = Number(prompt(`Digite o ano de nascimento`));
  const imprimaIdade = anoAtual - anodeNascimento;
  console.log(imprimaIdade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura);
  return  imc.toFixed(2)
  

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt(`Digite o seu nome`);
  const idade =prompt(`Digite o ano de nascimento`);
  const email =prompt(`Digite seu email`);
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
    const cor1 = prompt(`Digite a sua primeira cor`);
    const cor2 =prompt(`Digite a sua segunda cor`);
    const cor3 =prompt(`Digite a sua terceira cor`);
    const coresFavoritas = [cor1, cor2, cor3];
    console.log(coresFavoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const menssagemString = "oi";
  return (string.toUpperCase());
 

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const ingressosVendidos = custo / valorIngresso;
  return(ingressosVendidos);
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanhoString1 = string1.length;
  const tamanhoString2 =string2.length;
  const comparaTamanho = tamanhoString1 === tamanhoString2;
  return(comparaTamanho);

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const arr =  [];
  return (array [0]);

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return(array[array.length -1])


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
    const primeiro = array[0];
    array[0] = array[array.length -1];
    array[array.length -1] = primeiro;
    return array



}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const igualString1 = string1.toUpperCase() ; 
  const igualString2 = string2.toUpperCase() ;
  return  (igualString1 === igualString2);
   
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt(`Qual o ano atual?`));
  const anoNascimento = Number(prompt(`Qual o ano de nascimento?`));
  const anoRg = Number(prompt(`Qual o ano do seu RG?`));
  const idade = anoAtual - anoNascimento;
  const tempoEmissao= anoAtual - anoRg;

  //condições
  if(idade <= 20){
    console.log(tempoEmissao >= 5);
  }else if (idade <= 50) {
    console.log(tempoEmissao >= 10);
  }else{
    console.log(tempoEmissao >= 15);
  }
}

// EXERCÍCIO 14

  
  function checaAnoBissexto(ano) {
    // implemente sua lógica aqui
  
    const multiplosQuatro = ano % 4 === 0;
    const multiplosCem = ano % 100 === 0;
    const multiplosQuatrocentos = ano % 400 === 0;
  
    //condições
    return (multiplosQuatro && !multiplosCem) || multiplosQuatrocentos;
  } 
  



// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const primeiraPergunta = prompt(`Você tem mais de 18 anos?`);
  const segundaPergunta = prompt(`Você possue ensino médio completo?`);
  const terceiraPergunta = prompt(`Você possui disponibilidade excliusiva durante os horários do curso?`);

  const resposta = primeiraPergunta === "sim" && segundaPergunta === "sim" && terceiraPergunta === "sim";

  console.log(resposta);


}