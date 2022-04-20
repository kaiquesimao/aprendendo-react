function pedir(){
  var valor = prompt("digite um valor de 1 a 4")

  switch (Number(valor)) {
    case 1:
      alert("você escolheu 1 = suco")
      break;
    
    case 2:
      alert("vc escolheu 2")
      break;
      
    case 3:
      alert("vc escolheu o 3")
      break;

    case 4:
      alert("voce escolheu 4")
      break;

    default:
      alert("vc não escolheu os numeros certos")
  }
}