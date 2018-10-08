// alert("Hello");
var basicOrAdvanced = prompt("Would you like to use the basic functions or the advanced functions? (basic, advanced)");
if(basicOrAdvanced == "basic"){
  var basicFunction = prompt("What function would you like to use? (+,-,*,/)");
  if (basicFunction == "+") {
    var add1 = parseInt(prompt("Please enter the first number."));
    var add2 = parseInt(prompt("Please enter the second number you would like to add to it."));
    console.log(add1 + add2);
  }else if (basicFunction == "-") {
    var sub1 = parseInt(prompt("Please enter the first number."));
    var sub2 = parseInt(prompt("Please enter the second number you would like to subtract from it."));
    console.log(sub1 - sub2);
  }else if (basicFunction == "*") {
    var mult1 = parseInt(prompt("Please enter the first number."));
    var mult2 = parseInt(prompt("Please enter the second number you would like to multiply it by."));
    console.log(mult1 * mult2);
  }else if (basicFunction == "/") {
    var div1 = parseInt(prompt("Please enter the first number."));
    var div2 = parseInt(prompt("Please enter the second number you would like to divide it by."));
    console.log(div1 / div2);
  }else {
    console.log("You have entered an invalid selection, please refresh the page.");
  }
}else if (basicOrAdvanced == "advanced") {
  var advSelection = prompt("Which advanced function would you like to use? (square-root) or (square)")
    if (advSelection == "square-root") {
      var advSqrt = prompt("Please enter the number you wish to find the square root of.")
      console.log(Math.sqrt(advSqrt));
    }else if (advSelection == "square") {
      var advSqr = prompt("Please enter the number you wish to square.")
      console.log(Math.pow(advSqr,2));
    }else {
      console.log("You have entered an invalid selection, please refresh the page.");
    }
}else {
  console.log("You have entered an invalid selection, please refresh the page.");
}
