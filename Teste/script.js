var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");

function passa() {
  document.getElementById("n2").value = n1.value.toUpperCase();
}

function limpa() {
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
}
