
const calcular = document.getElementById('calcular');

function imc () {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');
  
  if(!nome || !altura || !peso){
    resultado.textContent = "Preencha todos os valores!";
  }else {
    const calculado = (peso / (altura/100 * altura/100)).toFixed(2);
    
    let classe = '';

    if(calculado < 17.5 ) {
      classe = 'Magreza tipo I';
    }else if ( calculado < 25){
      classe = 'Adequado';
    }else if ( calculado < 27 ){
      classe = 'Pre-obeso';
    }else if ( calculado < 30 ){
      classe = 'Obesidade grau I';
    }else {
      classe = 'Obesidade grau II';
    }

    resultado.textContent = `${nome}
    , seu é IMC = ${calculado}
    e sua classificação = ${classe}`;
  }
  
}

calcular.addEventListener('click', imc);
alert('Preencha todos os campos para calcular o IMC!')
