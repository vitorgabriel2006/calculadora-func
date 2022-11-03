function Calculadora(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;

    delta = eval(parseFloat((b * b) -4 * a * c));
    document.getElementById("mostrar-resultado").innerHTML = delta;

    if(delta < 0){
        document.write("Para delta negativo não existem raizes reais!");
         x1 = eval(parseFloat((-b + Math.sqrt(delta)) / (2 * a)));
         x2 = eval(parseFloat((-b - Math.sqrt(delta)) / (2 * a)));
         document.getElementById("mostrar-resultado1").innerHTML = x1;
         document.getElementById("mostrar-resultado2").innerHTML = x2;
         


    } else if(delta == 0){
      x1 = eval(parseFloat((-b + Math.sqrt(delta)) / (2 * a)));
      
      document.getElementById("mostrar-resultado1").innerHTML = x1;
      
      

    }else{
        x1 = eval(parseFloat((-b + Math.sqrt(delta)) / (2 * a)));
        x2 = eval(parseFloat((-b - Math.sqrt(delta)) / (2 * a)));
        document.getElementById("mostrar-resultado1").innerHTML = x1;
        document.getElementById("mostrar-resultado2").innerHTML = x2
    }
}


function potencia(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    resultado = Math.pow(parseInt(num1), parseInt(num2));

    document.getElementById("mostrar-resultado").innerHTML = resultado;

}

function raiz(){
    num1 = document.getElementById("num1").value;


    resultado = Math.sqrt(parseFloat(num1));

    document.getElementById("mostrar-resultado").innerHTML = resultado;

}

function area(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    resultado = eval(parseFloat(num1) * parseInt(num2))/2;

    document.getElementById("mostrar-resultado").innerHTML = resultado;

    
}

function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num
   }
   
   function clean(){
       document.getElementById('resultado').innerHTML = "";
   }
   
   function back(){
       var resultado = document.getElementById('resultado').innerHTML;
       document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
   }
   
   function calcular(){
      var resultado = document.getElementById('resultado').innerHTML;
      if(resultado){
         document.getElementById('resultado').innerHTML = eval(resultado);
      }
      else{
       document.getElementById('resultado').innerHTML = "nada..."
      }
   }