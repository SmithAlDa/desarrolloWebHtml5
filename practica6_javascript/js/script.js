alert('CEDUK escuela');

function suma(n1,n2){
    var suma, email, n1, n2;
    email = document.getElementById("email").value;
    n1= document.getElementById("numero1");
    n2= document.getElementById("numero2");
    suma = parseint(n1) + parseint(n2);
    document.getElementById("resultadoSuma").innerHTML = suma  ;
}