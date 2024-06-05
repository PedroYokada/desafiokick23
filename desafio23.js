const prompt = require("prompt-sync")({ sigint: true });

let compra = {
  1: 5.54,
  2: 8.55,
  3: 10.78,
  4: 15.66,
};

function venda(fruta) {
  return compra[fruta];
}

while (produto !== 5) {
  var produto = parseInt(
    prompt(
      "Qual produto você deseja ? 1:ABACAXI - 2:BETERRABA - 3:COCO - 4:DAMASCO - 5:SAIR "
    )
  );

  switch (produto) {
    case 1:
      console.log(`O valor do abacaxi é: R$${venda(1)}`);
      break;
    case 2:
      console.log(`O valor da beterraba é: R$${venda(2)}`);
      break;
    case 3:
      console.log(`O valor do coco é: R$${venda(3)}`);
      break;
    case 4:
      console.log(`O valor do damasco é: R$${venda(4)}`);
      break;
    case 5:
      console.log("Obrigado e volte sempre!");
      break;
    default:
      console.log("Opção Inválida!");
  }
}
