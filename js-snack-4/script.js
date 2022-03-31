/**
    *  Dato un array, genera randomicamente due numeri:
    *   il primo numero che dovrà essere sempre minore del numero degli elementi dell'array
    *   il secondo numero che dovrà essere sempre minore del primo numero
    *
    * Scrivi una funzione che accetti tre argomenti: l'array e i due numeri nell'ordine scritto prima.
    * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra il primo numero e il secondo numero
*/

const myArray = [3,4,5,6,7,33,56,87,2,1];
const newArray =[];

funzione(newArray, 5, 48 );

const funzione = function (array, num1, num2) {

for (let i=0; i<myArray; i++ ){
   num1 = Math.random(myArray[i]);
   num2 = Math.random(myArray[i]);
   if (num1 <= num2 && num2 < myArray.length){
      array.push(num1, num2);
   }
}
console.log (funzione (newArray, 5, 48 ));