'use strict';

const chai = require('chai'),
    expect = chai.expect,
    FizzBuzz = require('../src/fizzbuzz');

describe('FizzBuzz', () => {

    it('should return 1', () => {
        expect(FizzBuzz.resolve(1)).to.be.eql(1);
    });

    it('should return 2', () => {
        expect(FizzBuzz.resolve(2)).to.be.eql(2);
    });

    it('should return Fizz (3)', () => {
        expect(FizzBuzz.resolve(3)).to.be.eql("Fizz");
    });

    it('should return Buzz (5)', () => {
        expect(FizzBuzz.resolve(5)).to.be.eql("Buzz");
    });

    it('should return Fizz (6)', () => {
        expect(FizzBuzz.resolve(6)).to.be.eql("Fizz");
    });

    it('should return Buzz (10)', () => {
        expect(FizzBuzz.resolve(10)).to.be.eql("Buzz");
    });

    it('should return FizzBuzz (15)', () => {
        expect(FizzBuzz.resolve(15)).to.be.eql("FizzBuzz");
    });

});