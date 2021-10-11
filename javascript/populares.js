var titulo = document.getElementById('titulo-principal');

function escreverTxt01(elemento){

  const  textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';

  textoArray.forEach((letra, i) =>{
    setTimeout(function(){
      elemento.innerHTML += letra
    }, 75 * i )
  });

}
escreverTxt01(titulo)



var titulo02 = document.getElementById('titulo-principal02');

function escreverTxt02(elemento02){

  const  textoArray = elemento02.innerHTML.split('');
  elemento02.innerHTML = '';

  textoArray.forEach((letra, i) =>{
    setTimeout(function(){
      elemento02.innerHTML += letra
    }, 75 * i )
  });

}

escreverTxt02(titulo02)