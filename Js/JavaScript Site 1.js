
//Calculadora
function Insert(Num){
    let Numero = document.getElementById("Painel").innerHTML;
    let LenghtPainel = Painel.innerHTML.length;
    if(LenghtPainel < 24){
        document.getElementById("Painel").innerHTML = Numero + Num;  
    }
}
function Clear(){
    Painel.innerHTML = "";
}
function Resolver(){
    var Resolver = document.getElementById("Painel").innerHTML;
    if(Resolver){
        document.getElementById("Painel").innerHTML = eval(Resolver);
    }
}
function Apagar(){
    var Resultado = document.getElementById("Painel").innerHTML;
    document.getElementById("Painel").innerHTML = Resultado.substring(0, Resultado.length -1);
}

//Calculadora Média
var ResultadoP1 = document.querySelector("#PrimeiraP")
var ResultadoP2 = document.querySelector("#SegundaP")
var Random1 = document.querySelector("#Random1");
var Random2 = document.querySelector("#Random2");
var Media = document.querySelector("#Media");

//Randons Valores
function getRandomintInclusive(Min, Max) {
    return Math.floor(Math.random() * (parseInt(Max) - parseInt(Min) + 1) + parseInt(Min));
}

function Reset() {
    
    //Random Max
    var RandomMaxName = document.querySelector("#RandomMax");
    var RandomMaxValue = RandomMaxName.value;

    //Random Min
    var RandomMinName = document.querySelector("#RandomMin");
    var RandomMinValue = RandomMinName.value;

    //Ano atual Valor
    var AnoAtualName = document.querySelector("#AnoAtual");
    var AnoAtualValue = AnoAtualName.value;

    Random1.innerHTML = getRandomintInclusive(RandomMinValue, RandomMaxValue);
    Random2.innerHTML = getRandomintInclusive(RandomMinValue, RandomMaxValue);
    const Random1Value = document.getElementById('Random1').innerHTML;
    const Random2Value = document.getElementById("Random2").innerHTML;

    //Resultado
    ResultadoP1.innerHTML = parseInt(AnoAtualValue) - parseInt(Random1Value) + ' anos';
    ResultadoP2.innerHTML = parseInt(AnoAtualValue) - parseInt(Random2Value) + ' anos';

    //Media Valores
    var MediaTotal = parseInt(ResultadoP1.innerHTML) + parseInt(ResultadoP2.innerHTML);
    Media.innerHTML = Math.round(MediaTotal / 2);
    

    //Debug
    console.log(AnoAtualValue + " Ano Atual Valor");
    console.log(RandomMaxValue + " Random Max Valor");
    console.log(RandomMinValue + " Random Min Valor");
    console.log(Random1Value + " Random 1 Valor");
    console.log(Random2Value + " Random 2 Valor");
    console.log(ResultadoP1.innerHTML + " Resultado P1");
    console.log(ResultadoP2.innerHTML + " Resultado P2");
    console.log(MediaTotal + " Media total")
    console.log(Media.innerHTML + " Media Valor");
}