function Calculadora(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;

    delta = eval(parseFloat((b * b) -4 * a * c));
    document.getElementById("mostrar-resultado").innerHTML = "Δ = " + delta;

    if(delta < 0){
        delta = eval(parseFloat((b * b) -4 * a * c));
        document.getElementById("mostrar-resultado").innerHTML = "Δ = " + delta;
        document.getElementById("mostrar-resultado1").innerHTML = "O delta é negativo. Equação não possui raízes reais.";
         


    } else if(delta == 0){
      x1 = eval(parseFloat((-b + Math.sqrt(delta)) / (2 * a)));
      
      document.getElementById("mostrar-resultado1").innerHTML = "X1 e X2 = " + x1;
      
      

    }else{
        x1 = eval(parseFloat((-b + Math.sqrt(delta)) / (2 * a)));
        x2 = eval(parseFloat((-b - Math.sqrt(delta)) / (2 * a)));
        document.getElementById("mostrar-resultado1").innerHTML = "X1 = " + x1;
        document.getElementById("mostrar-resultado2").innerHTML = "X2 = " + x2
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
   function calcular(){
      var resultado = document.getElementById('resultado').innerHTML;
      if(resultado){
         document.getElementById('resultado').innerHTML = eval(resultado);
      }
      else{
       document.getElementById('resultado').innerHTML = "nada..."
      }
   }
   function basicas(){
    num1 = document.getElementById("num1").value;
    
    num2 = document.getElementById("num2").value;

    operador = document.querySelector("input[name=opt]:checked").value;

    resultado = eval(parseInt(num1) + operador + parseInt(num2));

    document.getElementById("mostrar-resultado").innerHTML = resultado;

   }