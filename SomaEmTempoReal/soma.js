var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var r = document.getElementById("r");

function calcula() {
  var resultado = n1.valueAsNumber + n2.valueAsNumber;
  if (isNaN(n1.valueAsNumber)) {
    r.textContent = n2.valueAsNumber;
  } else if (isNaN(n2.valueAsNumber)) {
    r.textContent = n1.valueAsNumber;
  } else {
    r.textContent = resultado;
  }
}

function limpa() {
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  r.textContent = "";
  //location.reload();
}

//esse comando dispara o conteúdo do input sem precisar do botão
document.addEventListener("input", calcula);
