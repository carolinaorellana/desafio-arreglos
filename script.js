/*1 -Siempre hambriento
Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida" debería mostrar "delicioso"en la consola. Si "comida" no estaba presente en el arreglo, que la consola registre "Tengo hambre" una vez.*/

function siempreHambriento(elemento) {    
    let contador = 0;
    for (i=0; i<elemento.length; i++){
        if(elemento[i]=="comida"){
            contador++;
            console.log("delicioso");
        }
    }
    if (contador==0){
        console.log("tengo hambre");
    }
    //aca no se puede poner un console.log(contador*delicioso) xq no funciona, 
    //mejor ubicarlo en el primer if, la multiplicacion funciona entre elementos numericos (numero*numero), no (numero*funcion);
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
siempreHambriento([4, 1, 5, 7, 2]);


/*2 -Filtro paso alto
Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff.*/
function sobreLimite(arreglo, limite) {
    var  valoresMayores= [];
        for( j=0; j<arreglo.length; j++){
            if (arreglo[j]>limite){
                valoresMayores.push(arreglo[j]);
            }
        }
    return valoresMayores;
}
var resultado = sobreLimite([6, 8, 3, 10, -2, 5, 9], 5);
console.log(resultado); // esperamos de vuelta [6, 8, 10, 9]

/* 3- Mejor que el promedio
Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.*/
function mejorPromedio(notas) {
    var suma = 0;
    //Este for hará la suma TOTAL de las notas
    for( k=0; k<notas.length; k++){
        suma+= notas[k];
    }
    //la var "promedio" hará la division x la cantidad de notas
    var promedio= suma/notas.length;
    //console.log(promedio);
    //agregar una variable para contar:
    var contadorNotas = 0;
    for(l=0; l<notas.length; l++){
        if(notas[l]>promedio){
            contadorNotas++;  
        }
    }
    return contadorNotas;
}
var resultadoMejorProm = mejorPromedio([6, 8, 3, 10, -2, 5, 9]);
console.log(resultadoMejorProm);

/* 4-Arreglo invertido
Escribe una función que invierta los valores de un arreglo y los devuelva.*/
function reverse(arreglito) {
    var arreglitoInvertido=[];
    for(m=arreglito.length-1; m>=0; m--){
        arreglitoInvertido.push(arreglito[m]);
    }
    return arreglitoInvertido;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

/*La manera facil de hacer el ejercicio 4: 
function reverse(arr) {
    arr.reverse();
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);
*/ 

/*Arreglo de Fibonacci
Los números de Fibonacci se han estudiado durante años y aparecen a menudo en la naturaleza. Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n. Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia. Entonces, si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente valor en la secuencia es 5.*/
function fibonacciArreglo(arregloFib) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    for(indice=2; indice<=arregloFib-1; indice++){
        fibArr.push(fibArr[indice-2]+fibArr[indice-1]); 
        }
    return fibArr;
}
var resultadoFib = fibonacciArreglo(10);
console.log(resultadoFib); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
//También funciona con mas cantidad en el arregloFib(30), por ej.
