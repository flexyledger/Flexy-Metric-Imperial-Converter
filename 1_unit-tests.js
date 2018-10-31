/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      let input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = '3.2L';
      assert.equal(convertHandler.getNum(input),3.2);
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = '3/4mi';
      let result = convertHandler.getNum(input);
      console.log("Result is " + result);
      assert.equal(result, 0.75);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = '3/4.5km';
      let result = convertHandler.getNum(input);
      assert.equal(result, 0.41425);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      let input = '1/2/3km';
      let result = convertHandler.getNum(input);
      assert.equal(result, 'invalid number');
      done();
    });
    
    //1 Should be used as default if a number is missing
    test('No Numerical Input', function(done) {
      let input = 'km';
      let result = convertHandler.getNum(input);
      assert.equal(result, 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.isNotNull(convertHandler.getReturnUnit(ele));
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      let input = 'km';
      let result = convertHandler.getNum(input);
      assert.equal(result, 1);
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('L to Gal', function(done) {
      let input = [7, 'L'];
      let expected = 1.84921;
      let result = convertHandler.convert(input[0], input[1]);
      assert.approximately(result, expected, 0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      let input = [10000, 'Mi'];
      let expected = 16093.44;
      let result = convertHandler.convert(input[0], input[1]);
      assert.approximately(result, expected, 0.1);
      done();
    });
    
    test('Km to Mi', function(done) {
      let input = [100, 'km'];
      let expected = 62.13727;
      let result = convertHandler.convert(input[0], input[1]);
      assert.approximately(result, expected, 0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      let input = [40, 'kg'];
      let expected = 88.18498;
      let result = convertHandler.convert(input[0], input[1]);
      assert.approximately(result, expected, 0.1);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      let input = [40, 'kg'];
      let expected = 132.27747;
      let result = convertHandler.convert(input[0], input[1]);
      assert.approximately(result, expected, 0.1);
      done();
    });
    
  });

});