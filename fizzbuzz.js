'use strict';
const startNumber = 0;
const lastNumber = 100;
for (let i = startNumber; i < lastNumber; i++) {
    if(i%3 == 0 || i%5 == 0){
        if(i%3 == 0 && i%5 == 0){
            console.log('FizzBuzz');
        }
        if(i%3 == 0){
            console.log('Fizz');
        }
        if(i%5 == 0){
            console.log('Buzz');
        }
    }else{
        console.log(i);
    } 
}