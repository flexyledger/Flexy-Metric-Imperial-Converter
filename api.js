/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      console.log("convert called");
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      console.log("init unit is " + initUnit);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      var retJson = {};
      retJson.initNum = initNum;
      retJson.initUnit = initUnit;
      retJson.returnNum = returnNum;
      retJson.returnUnit = returnUnit;
      retJson.string = toString;
      console.log(input);
      console.dir(retJson);
      res.json(retJson);
      //res.json
    });
    
};
