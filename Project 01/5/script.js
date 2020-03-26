window.onload = function () {

  document.getElementById('NomeH1').innerHTML  = getName()
  document.getElementById('IdadeH2').innerHTML  = getIdade()
  document.getElementById('CidadeP').innerHTML  = getCidade()


  document.getElementById('input1').value  = getName()
  document.getElementById('input2').value  = getColor()
  document.getElementById('input3').value  = getIdade()
  document.getElementById('input4').value  = getCidade()
  document.body.style.backgroundColor  = getColor();

    document.getElementById('salvar').addEventListener('click', function () {
      localStorage.setItem("Nome", document.getElementById('input1').value);
      console.log(getName())

      localStorage.setItem("Cor", document.getElementById('input2').value);
      document.body.style.backgroundColor  = getColor();

      localStorage.setItem("Idade", document.getElementById('input3').value);

      localStorage.setItem("Cidade", document.getElementById('input4').value);
    });
};

function getName() {
  return localStorage.getItem("Nome");
}

function getColor(){
  return localStorage.getItem("Cor");
}

function getIdade(){
  return localStorage.getItem("Idade")
}

function getCidade(){
  return localStorage.getItem("Cidade")
}