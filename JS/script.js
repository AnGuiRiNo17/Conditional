/*
// if else
let isRaining = true
 if(isRaining) {
    console.log('You need a rain coad')
  } else{
    console.log('You dont need a rain coad')
 }

 //if else if else
 let weather = 'sunny'
 if (weather === 'rainy'){
    console.log('no salgas hermano')
 }else if (weather === 'cloudy'){
    console.log('Podria estar frio afuera, no salgas')
 }else if (weather === 'sunny'){
    console.log('Ya sal cabezon')
 }else{
    console.log('haz lo que quieras pero no uses una unbrella')
 }


 //swicht

 let dayUserInput = prompt('What day is today?')
 let day = dayUserInput.toLowerCase()

 switch(day) {
    case 'Monday':
        console.log('Today is Monday');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday');
        break;
    case 'Wednesday':
        console.log('Today is Wednesday');
        break;
    case 'Thursday':
        console.log('Today is Thursday');
        break;
    case 'Friday':
        console.log('Today is Friday');
        break;
    case 'Saturday':
        console.log('Today is Saturday');
        break;
    case 'Sunday':
        console.log('Today is Sunday');
        break;
    default:
        console.log('Invalid day');
}


//condiciones en los cases
let num = prompt('Enter number')
switch(true){

    case num > 0:
        console.log('Number is positive')
        break
    case num == 0:
        console.log('Number is zero')
        break
    case num < 0:
        console.log('Number is negative')
}

*/


//Exercise 4

//swicht
/*
let age = prompt('How old r u?')
switch(true){
    case age >= 18:
        console.log('Tas bien viejo, si puedes manejar')
        break
    case age < 18:
        console.log('no puedes hermano,echale ganas y crece mas rapido')
        break
    default:
        console.log('Pregunte tu edad cabezon')

}



//if
let age = prompt('How old r u?');
if (age >= 18 ) 
    {
    console.log('Puedes conducir :)');
} else if (age < 18){
    console.log(`No puedes hermano, echale ganas y crece ${age * -1 + 18} años`)
}else{
    console.log('Pregunte tu edad cara de pek y en digitos numericos');
}




//compare
let myAge = 18;
let urAge = prompt('How old R U?');
urAge = Number(urAge); 

if (urAge === myAge) {
    console.log('Yei! Tenemos la misma edad :)');
} else if (urAge < myAge) {
    console.log(`You're ${myAge - urAge} years younger than me.`);
} else if (urAge > myAge) {
    console.log(`You're ${urAge - myAge} years older than me.`);
} else {
    console.log('your age pekface');
}



//mayor que
let a = 49
let b = 6

let message = a >= b ? 'a es mayor que b' : 'a es menor que b'
console.log(message)

if (a > b){
    console.log('a es mayor que b' )
}else{
    console.log('a es menor que b')
}




//Consultar temporada
let monthUserInput = prompt('¿En qué mes estamos?');
let month = monthUserInput.toLowerCase(); // Convertimos a minúsculas

switch (month) {
    case 'septiembre':
    case 'octubre':
    case 'noviembre':
        console.log('Autumn');
        break;
    case 'diciembre':
    case 'enero':
    case 'febrero':
        console.log('Winter');
        break;
    case 'marzo':
    case 'abril':
    case 'mayo':
        console.log('Spring');
        break;
    case 'junio':
    case 'julio':
    case 'agosto':
        console.log('Summer');
        break;
    default:
        console.log('Mes inválido');
}

*/



//asignar calificaciones
let gradeUserInput = prompt('Cual es tu puntaje?');
let grade = gradeUserInput;

if (grade >= 80 && grade <= 100) {
    console.log('Calificación: A');
} else if (grade >= 70 && grade < 80) {
    console.log('Calificación: B');
} else if (grade >= 60 && grade < 70) {
    console.log('Calificación: C');
} else if (grade >= 50 && grade < 60) {
    console.log('Calificación: D');
} else if (grade >= 0 && grade < 50) {
    console.log('Calificación: F');
} else {
    console.log('Prueba usar una puntuacion de 0 a 100');
}
