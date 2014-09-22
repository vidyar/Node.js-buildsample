var assert = require('assert')
  , nextPrime = require('./../index').nextPrime
  , asyncPrime = require('./../index').asyncPrime;

describe('nextPrime', function() {
  it('nextPrime should return the next prime number', function() {
    assert.equal(12, nextPrime(7));
  });
  
  it('nextPrime should return the next prime number', function() {
    assert.equal(19, nextPrime(17));
  });


  it('zero and one are not prime numbers', function() {
    assert.equal(2, nextPrime(0));
    assert.equal(2, nextPrime(1));
  });
});
