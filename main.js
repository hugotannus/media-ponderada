let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let n3 = document.querySelector("#n3");
let n4 = document.querySelector("#n4");

let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");

let presenca = document.querySelector("#presenca");

let button = document.querySelector("#botao_verificar");
button.addEventListener("click", verificar);

function verificar() {
  let aluno = verificaSituacao(
    n1.value, n2.value, n3.value, n4.value,
    presenca.value,
    p1.value, p2.value, p3.value, p4.value
  )

  let resultado = aluno.aprovado ? "Aprovado" : "Reprovado";

  document.querySelector("#media").textContent = aluno.media;
  document.querySelector("#resultado").textContent = resultado;
}