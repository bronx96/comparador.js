function comparar(){
  var n1 = Number(document.getElementById('n1').value)
  var n2 = Number(document.getElementById('n2').value)
  var n3 = Number(document.getElementById('n3').value)
  var n4 = Number(document.getElementById('n4').value)
  var n5 = Number(document.getElementById('n5').value)
  var res = document.getElementById('res')
  var maior = n1
  if (maior < n2){
    maior = n2
  }
  else{}
  if (maior < n3 ){
    maior = n3
  }
  else{}
  if (maior < n4){
    maior = n4
  }
  else{}
  if (maior < n5){
    maior = n5
  }
  else{}
  res.innerHTML = maior
}