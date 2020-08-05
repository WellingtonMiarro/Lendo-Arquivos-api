const readline = require('readline');
const fs = require('fs');
// iniciamos com um stream de leitura no arquivo:
const rl = readline.createInterface({
  input: fs.createReadStream('paises.txt') //documento que vc  quer ler, passa o caminho
});
// função que é executada a cada linha:
rl.on('line', (line) => {
if(!line) return;
let dados = line.split('|');
  console.log('O pais é '+dados[1]+' e tem a sigla '+ dados[0]);
 // console.log('Line from file:', line);
});
// evento executado após ler todas as linhas do arquivo:
rl.on('close', () => {
  console.log('acabou!');
});