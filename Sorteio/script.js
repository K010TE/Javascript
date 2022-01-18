var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var lista = [];

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && n1.value != "" && n1.value != isNaN) {
    var btn = document.querySelector("#btn");

    btn.click();
  }
});

function newUser() {
  var newInput = document.createElement("input");
  newInput.className = "inputs";
  newInput.value = n1.value;
  n1.value = "";
  var div = document.createElement("div");
  div.className = "divs";
  var newBtn = document.createElement("button");
  newBtn.textContent = "remover";
  newBtn.className = "btns";
  newBtn.click = "remove()";
  document.body.appendChild(div);
  document.body.appendChild(newInput);
  document.body.appendChild(newBtn);

  newBtn.addEventListener("click", function () {
    div.remove();
    newInput.remove();
    newBtn.remove();
  });
}

// for (i = 0; i < fslist.length; i++) {
//   init_fs(fslist[i]);
// }

//criar vetor que recebe cada elemento novo de n2

function passa() {
  if (n1.value != "" && n1.value != isNaN) {
    newUser();
    for (i = 0; i < lista.length; i++) {
      lista[i] = newInput.value;
    }
  }
}

function limpa() {
  n1.value = "";
  var lista = document.getElementsByClassName("divs");
  for (var i = lista.length - 1; i >= 0; i--) {
    lista[i].remove();
  }

  var lista = document.getElementsByClassName("inputs");
  for (var i = lista.length - 1; i >= 0; i--) {
    lista[i].remove();
  }

  var lista = document.getElementsByClassName("btns");
  for (var i = lista.length - 1; i >= 0; i--) {
    lista[i].remove();
  }
}
