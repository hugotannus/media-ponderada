// function verificaSituacao(n1, n2, n3, n4, p1 = 1, p2 = 1, p3 = 1, p4 = 1, presenca = 0.75) {
//     let media = calculaMedia(n1, n2, n3, n4, p1, p2, p3, p4);
//     let situacao = verificaAprovacao(media, presenca);

//     return situacao
// }

const button = document.querySelector("#botao_verificar");
button.addEventListener("click", verificaSituacao);


function verificaSituacao() {
  let n1 = document.querySelector("#n1").value;
  let n2 = document.querySelector("#n2").value;
  let n3 = document.querySelector("#n3").value;
  let n4 = document.querySelector("#n4").value;
  let p1 = document.querySelector("#p1").value;
  let p2 = document.querySelector("#p2").value;
  let p3 = document.querySelector("#p3").value;
  let p4 = document.querySelector("#p4").value;

  let presenca = document.querySelector("#presenca").value;

  let notas = [n1, n2, n3, n4]
  let pesos = [p1, p2, p3, p4]

  // console.log("notas:", notas)
  // console.log("pesos:", pesos)

  let media = calculaMedia(...notas, ...pesos);
  let resultado = verificaAprovacao(media, presenca);

  document.getElementById("resultado").innerText = resultado;
  document.getElementById("media").innerText = media;
}