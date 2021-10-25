// Função seta =>

// var sum = (param1,param2) => {
//   return param1 + param2
// }
// sum(10, 15)

// estruturas de decisão
// if significa SE 
// else significa SENÃO

var tamanhoDeImagem = 50

if (tamanhoDeImagem > 100){
  console.log('Imagem grande')
}else if(10 < tamanhoDeImagem && tamanhoDeImagem <100 ){
  console.log('Imagem de tamanho meio')
}
else{
  console.log('Imagem pequena')
}

// loops ou laços de repetição

//loop for (para)

for (var i = 0; i<4; i+= 1){
  console.log(i)
}
// printando a taboada do 2

console.log("Taboada do 2")

for (var i = 2; i<21; i+= 2){
  console.log(i)
}

// loop while (enquanto)
console.log('loop while')

var numero = 0;

while (numero<=10){
  console.log(numero)
  numero++
}
