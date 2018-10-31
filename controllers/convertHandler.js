/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    if (input.indexOf("/") === -1) {      
      var result = parseFloat(input);
      if (Number.isNaN(result)) { return 1; }
      console.log("gn returning " + result);
      return result;
    }
    else {
      if ((input.match(/\//g || []).length > 1)) {
        return "invalid number";
      }
      //if (Number.isNaN(Number(input))) { return "invalid number";}
      var split = input.split("/");
      console.log("getNum is returning " + Number(split[0]) / Number.parseFloat(split[1]));
      return Number(split[0]) / Number.parseFloat(split[1]);
    }
  };
  
  this.getUnit = function(input) {
    if (input.indexOf("/") === -1) {      
      var num = parseFloat(input);
      var unit = String(input.replace(num,"")).trim();
      console.log("gu1 is " + unit);
      if (this.getReturnUnit(unit) === null) { return "invalid unit";}
      return unit;
    }
    else {
      var split = input.split("/");
      console.log("gu2 is " + input);
      console.log("getNum is returning " + Number(split[0]) / Number.parseFloat(split[1]));
      var num = Number(split[0]) + "/" + Number.parseFloat(split[1]);
      var unit = String(input.replace(num,"")).trim();
      console.log("gu2 is returning " + unit);
      if (this.getReturnUnit(unit) === null) { return "invalid unit";}
      return unit;
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(String(initUnit).toLowerCase()) {
      case "km":
      case "kilometers":
        return "mi";
      case "mi":
      case "miles":
        return "km";
      case "gal":
      case "gallons":
        return "L";
      case "l":
      case "liters":
        return "gal";
      case "kg":
      case "kilograms":
        return "lbs";
      case "lbs":
      case "pounds":
        return "kg";
     }
    console.error("Didn't return unit");
    return null;
  };

  this.spellOutUnit = function(unit) {
    var result;
    console.log("Spell out unit called with " + unit);
    switch (String(unit).toLowerCase()) {
      case "km":
      case "kilometers":
        return "kilometers";
      case "mi":
      case "miles":
        return "miles";
      case "kg":
      case "kilograms":
        return "kilograms";
      case "lbs":
      case "pounds":
        return "pounds";
      case "l":
      case "liters":
        return "liters";
      case "gal":
      case "gallons":
        return "gallons";
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    console.log(`${initNum} and ${initUnit}`);
    switch (initUnit.toLowerCase()) {
      case "mi":
      case "miles":
        var result = initNum * miToKm;
        return Number(Math.round(result + 'e' + 5) + 'e-' + 5);
      case "lbs":
      case "pounds":
        var result = initNum * lbsToKg;
        return Number(Math.round(result + 'e' + 5) + 'e-' + 5);
      case "kg":
      case "kilograms":
        var result = initNum/lbsToKg;
        return Number(Math.round(result + 'e' + 5) + 'e-' +5);
      case "km":
      case "kilometers":
        var result = initNum/miToKm;
        return Number(Math.round(result + 'e' + 5) + 'e-' + 5);
      case "gal":
      case "gallons":
        var result = initNum*galToL;
        return Number(Math.round(result + 'e' + 5) + 'e-' + 5);
      case "l":
      case "liters":
        var result = initNum/galToL;
        return Number(Math.round(result + 'e' + 5) + 'e-' + 5);
    }
    return null;
  }; 
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    console.log("gs ru is " + returnUnit);
    result = initNum  + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
