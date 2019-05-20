function retornar(num){

    var anterior=document.formulario.resultado.value;

    document.getElementById("resultado").value=anterior+num;

}

//para eliminar ultimo caracter

function eliminar(){

    var anterior=document.formulario.resultado.value;

    var nuevovalor=anterior.substring(0,anterior.length-1);

    document.getElementById("resultado").value=nuevovalor;
}

// para eliminar todo

function eliminar_todo(){
    document.formulario.resultado.value="";
}

function comprobar(num){ 
    var anterior = document.formulario.resultado.value;
    if(anterior==""){
        document.formulario.resultado.value="";
    }else{    
        var anterior = document.formulario.resultado.value;
        document.getElementById("resultado").value=anterior+num;
        esto=document.formulario.resultado.value;
    
        record=0; 
        igual=1; 
        var letraRecord 
        var b=0 
        var letra="" 
    
        for (a=1;a<esto.length;a++){      
        if (esto.charAt(a)=="+" || esto.charAt(a)=="-" || esto.charAt(a)=="*" || esto.charAt(a)=="/" || esto.charAt(a)=="Math.sqrt" || esto.charAt(a)=="%" ){ 
        igual=igual+1; 
        letra=esto.charAt(a);
        }else{ 
             if(igual>record){record=igual;letraRecord=letra} 
                igual=1 
             } 
             b=a 
        }
        
        if(igual>record){
          record=igual;
          letraRecord=letra;
        } 
    
        if (record>2){
            var anterior = esto;
            var nuevovalor = anterior.substring(0, anterior.length-1);
            document.getElementById("resultado").value=nuevovalor;
            record=0;b=0;igual=1;letra="";letraRecord="";
        }     
    } 
    
    }

    function raiz(){
        var inic=document.getElementById("resultado").value;
        document.getElementById("resultado").value="Math.sqrt("+ inic +")";
    }

    function porcentaje(){
        var inic=document.getElementById("resultado").value;
        document.getElementById("resultado").value=inic/100;
    }

    function masmenos(){
		var masmenos = document.formulario.resultado.value;
		if (masmenos > 0){
			document.formulario.resultado.value = "(-" + masmenos + ")";
		}
		else{
			cajaplus = masmenos.replace(/[-|(|)]/g, "");
			document.formulario.resultado.value = cajaplus;
		}
	}

//realizar las operacionesmatematicas


function calcular(){
    var resultado=eval(document.formulario.resultado.value);

    if(resultado=="Infinity"){
        document.formulario.resultado.value="No se puede dividir entre cero";

    }else{
        document.formulario.resultado.value=resultado;
    }
    
}







/*
//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init(){
    var flecha = document.getElementById('flecha');
    var reset = document.getElementById('ce');
    var reset1 = document.getElementById('c');
    var masmenos = document.getElementById('masmenos');
    var raiz = document.getElementById('raiz');
    var porcentaje = document.getElementById('porcentaje');
    var fraccion = document.getElementById('fraccion');
    var coma = document.getElementById('coma');
    var resultado = document.getElementById('resultado');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //Eventos de click
  uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    raiz.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "&#8730;";
        limpiar();
    }

    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }
}


function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
      case "/":
        res = "Math.sqrt("+parseFloat(operandoa) + parseFloat(operandob)+")";
        break;

    }
    resetear();
    resultado.textContent = res;
}*/