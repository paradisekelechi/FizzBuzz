'use strict';

const chai = require('chai');
const expect = chai.expect;

let fizzbuzz = (input) => {   
    if(input % 3 == 0 || input % 5 == 0){
        if(input%3 == 0 && input%5 == 0){
            return 'FizzBuzz';
        }
        if(input % 3 == 0){
            return 'Fizz';
        }
        if(input % 5 == 0){
            return 'Buzz';
        }
    }else{
        return input;
    }
}


describe('FizzBuzz', () => {
    it('fizzbuzz(33) should return Fizz', ()=> {
        expect(fizzbuzz(33)).to.equal('Fizz');
    });
});

describe('FizzBuzz', () => {
    it('fizzbuzz(20) should return Buzz', ()=> {
        expect(fizzbuzz(20)).to.equal('Buzz');
    });
});

describe('FizzBuzz', () => {
    it('fizzbuzz(0) should return FizzBuzz', ()=> {
        expect(fizzbuzz(0)).to.equal('FizzBuzz');
    });
});

describe('FizzBuzz', () => {
    it('fizzbuzz(99) should return Fizz', ()=> {
        expect(fizzbuzz(99)).to.equal('Fizz');
    });
});

describe('FizzBuzz', () => {
    it('fizzbuzz(5) should return Buzz', ()=> {
        expect(fizzbuzz(5)).to.equal('Buzz');
    });
});