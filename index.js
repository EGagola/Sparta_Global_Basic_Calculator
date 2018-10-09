var basicOrAdvanced = prompt("Would you like to use the basic functions or the advanced functions? (basic, advanced)").toLowerCase();
if(basicOrAdvanced == "basic") {
  var basicFunction = prompt("What function would you like to use? (+,-,*,/)");
  var num1 = parseInt(prompt("Please enter the first number."));
  var num2 = parseInt(prompt("Please enter the second number."));
  if (basicFunction == "+") {
    console.log(num1 + num2);
  }else if (basicFunction == "-") {
    console.log(num1 - num2);
  }else if (basicFunction == "*") {
    console.log(num1 * num2);
  }else if (basicFunction == "/") {
    console.log(num1 / num2);
  }else {
    console.log("You have entered an invalid selection, please refresh the page.");
  }
}else if (basicOrAdvanced == "advanced") {
  var advSelection = prompt("Which advanced function would you like to use? (square-root) or (square)").toLowerCase();
    var num1 = prompt("Please enter the number.");
    if (advSelection == "square-root") {
      console.log(Math.sqrt(num1));
    }else if (advSelection == "square") {
      console.log(Math.pow(num1,2));
    }else {
      console.log("You have entered an invalid selection, please refresh the page.");
    }
}else {
  console.log("You have entered an invalid selection, please refresh the page.");
}
