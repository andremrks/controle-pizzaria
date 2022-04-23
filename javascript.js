/*variávels*/
let somaMussarela = 0;
let somaPortuguesa = 0;
let somaPepperoni = 0;
let vendaMussarela = 0.00;
let vendaPortuguesa = 0.00;
let vendaPepperoni = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

/*eventos*/
btnVendas.addEventListener('click',venda,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',planilha,false);

/*funções*/
function venda(e) {
    if(document.getElementById('mussarela').checked) {
      somaMussarela += 1;
      vendaMussarela += 15.00;
      document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
      document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    }
    else if(document.getElementById('portuguesa').checked) {
      somaPortuguesa += 1;
      vendaPortuguesa += 15;
      document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa;
      document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2);
    }
    else if(document.getElementById('pepperoni').checked) {
      somaPepperoni += 1;
      vendaPepperoni += 15;
      document.getElementById('resultadoPepperoni').innerHTML = somaPepperoni;
      document.getElementById('vendaPepperoni').innerHTML = vendaPepperoni.toFixed(2);
    }
}

function estorno(e) {
    if(document.getElementById('mussarela').checked) {
      somaMussarela -= 1;
      vendaMussarela -= 15.00;
      if(somaMussarela < 0) {
        somaMussarela = 0;
        vendaMussarela = 0.00;
      }
      document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
      document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    }
    else if(document.getElementById('portuguesa').checked) {
      somaPortuguesa -= 1;
      vendaPortuguesa -= 15;
      if(somaPortuguesa < 0) {
        somaPortuguesa = 0;
        vendaPortuguesa = 0.00;
      }
      document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa;
      document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2);
    }
    else if(document.getElementById('pepperoni').checked) {
      somaPepperoni -= 1;
      vendaPepperoni -= 15;
      if(somaPepperoni < 0) {
        somaPepperoni = 0;
        vendaPepperoni = 0.00;
      }
      document.getElementById('resultadoPepperoni').innerHTML = somaPepperoni;
      document.getElementById('vendaPepperoni').innerHTML = vendaPepperoni.toFixed(2);
    }
}

/*função extraída do https://github.com/linways/table-to-excel*/
function planilha(e) {
  TableToExcel.convert(document.getElementById('table'));
}
