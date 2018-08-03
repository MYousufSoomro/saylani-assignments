



//----------Chapter 1----------//

function ch1_q1(){
  var firstName = prompt("What is your first name?");
  var lastName = prompt("What is your last name?");
  var fullName = firstName + " " + lastName;
  alert("Hello " + fullName + "!");
}

function ch1_q2(){
  var favMobile = prompt("What is your favorite mobile phone model?");
  alert("My favorite phone is: " + favMobile + "\n" + "Length of string: " + favMobile.length);
}

function ch1_q3(){
  var str = "Pakistani";
  var strIndex = str.indexOf('n');
  alert("String: " + str + "\n" + "Index of 'n': " + strIndex);
}

function ch1_q4(){
  var str = "Hello World";
  var strIndex = str.lastIndexOf('l');
  alert("String: " + str + "\n" + "Index of 'l': " + strIndex);
}

function ch1_q5(){
    var str = "Pakistani";
    var charIndex = str.charAt(3);
    alert("String: " + str + "\n" + "Character at index 3: " + charIndex);
}

function ch1_q6(){
  var firstName = prompt("What is your first name?");
  var lastName = prompt("What is your last name?");
  var fullName = firstName + " " + lastName;
  alert("Hello " + fullName + "!");
}

function ch1_q7(){
  var oldText = "Hyderabad";
  var newText = oldText.replace("Hyder", "Islam");
  alert("City: " + oldText + "\n" + "After replacement: " + newText);
}

function ch1_q8(){
  var message = "Ali and Sami are best friends. They play cricket and football together.";
  var newMessage = message.replace(/and/g, "&");
  alert("Message: " + message + "\n" + "After replacement: " + newMessage);
}

function ch1_q9(){
  var str = "472";
  var strNumb = Number(str);
  alert("Value: " + str + "\n" + "Type: " + typeof(str) + "\n" + "Value: " + strNumb + "\n" + "Type: " + typeof(strNumb));
}

function ch1_q10(){
  var inputWeb = prompt("Write your website URL");
  var domain = inputWeb.slice(4);
  alert("URL: " + inputWeb + "\n" + "Domain: " + domain);
}

function ch1_q11(){
  var userInput = prompt("Write a word");
  alert("User Input: " + userInput + "\n" + "Upper case: " + userInput.toUpperCase());
}

function ch1_q12(){
  var userInput = prompt("Write a word");
  alert("User Input: " + userInput + "\n" + "Lower case: " + userInput.toLowerCase());
}

function ch1_q13(){
  var userInput = prompt("Write a word");
  var firstWord = userInput.slice(0,1);
  var remWords = userInput.slice(1);
  alert("User input: " + userInput + "\n" + "Title case: " + firstWord.toUpperCase() + remWords);
}

function ch1_q14(){
  var num = 35.36 ;
  var numToString = num.toString();
  var newText = numToString.replace(".", "");
  alert("Number: " + num + "\n" + "Result: " + newText);
}

function ch1_q15(){
  var a = 3 ;
  var b = 3 ;
  alert("a is " + a + "\n" + "b is " + b + "\n" + "a + b is " + a + b);
}

function ch1_q16(){
  var a = 3 ;
  var b = 3 ;
  var y = a - b;
  alert("a is " + a + "\n" + "b is " + b + "\n" + "a - b is " + y);
}

function ch1_q17(){
  var userName = prompt("Write your Username");
  for (i = 0 ; i < userName.length ; i++){
    if(userName.charAt(i+1) === "@" || userName.charAt(i+1) === "." || userName.charAt(i+1) === "," || userName.charAt(i+1) === "!"){
      alert("Please Enter a Valid Username");
    }
  }
}

function ch1_q18(){
  var A = ["cake", "apple pie", "cookie", "chips", "patties"];
  var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
  var temp = false;
  for (i = 0 ; i < A.length ; i++){
    if (userInput.toLowerCase() === A[i].toLowerCase()) {
      alert(userInput + " is available at index " + i + " in our bakery" );
      temp = true;
      break;
    }
  }
  if (temp === false) {
    alert("We are soory. " + userInput + " is not available in our bakery");
  }
}

function ch1_q19(){
  var get1 = prompt("Enter Some Text");
  var get2 = prompt("Enter Another Text");
  if (get1 === get2){
    alert("Both are Equal");
  } else if (get1 > get2){
    alert(get1 + " is greater than " + get2);
  } else if (get2 > get1){
    alert(get2 + " is greater than " + get1);
  }
}

function ch1_q20(){
  var inpuPass = prompt("What's your Password?");
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var temp = false;
  for(var i = 0 ; i < inpuPass.length ; i++){
    if(inpuPass.slice(0, 1) === numbers[i]){
      alert("Entered Password: " + inpuPass + "\n" + "Password can not start with a number. Please Enter a valid Password");
      temp = true;
      break;
    }else if(inpuPass.length < 6){
      alert("Entered Password: " + inpuPass + "\n" + "Password must at least 6 characters long. Please Enter a valid Password");
      temp = true;
      break;
    }
  }
  if(temp === false){
    alert("Your password has been saved. Thank You!");
  }
}

function ch1_q21(){
  var myWindow = window.open();
  var university = "University of Karachi";
  var splitted = university.split("");
  for (var i = 0 ; i < splitted.length ; i++){
    myWindow.document.write("<p> Index No. " + i + " is " + splitted[i] + "</p>");
  }
}

function ch1_q22(){
  var userInput = prompt("Enter Some Text");
  alert("User input: " + userInput + "\n" + "Last character of input: " + userInput.charAt(userInput.length - 1));
}

function ch1_q23(){
  var text = ("The quick brown fox jumps over the lazy dog");
  var temp = 0;
  for (var i = 0 ; i < text.length ; i++){
    if ((text.slice(i, i+3)).toLowerCase() === "the"){
      temp++
    }
  }
  alert("Text: " + text + "\n" + "There are " + temp + " occurrence(s) of word 'the' ");
}

function ch1_q24(){
  var str = "Pakistan";
  var vowels = ["a", "e", "i", "o", "u"]; 
  var count = 0;
  for (var i = 0 ; i < str.length ; i++){
    for (var j = 0 ; j < vowels.length ; j++){
      if(str[i].toLowerCase() === vowels[j].toLowerCase()){
        count++
    }
    }
  }
  var totalVowels = count;
  var totalConsonants = str.length - totalVowels;
  alert("There are " + totalVowels + " vowel(s) and " + totalConsonants + " consonant(s) in " + str);
}

//----------Chapter 2----------//

function ch2_q1(){
  var inputPositve = Number(prompt("Write Positve Number"));
  var roundOffValue = Math.round(inputPositve);
  var floorValue = Math.floor(inputPositve);
  var ceilValue = Math.ceil(inputPositve);
  alert("number: " + inputPositve + "\n" + "round off value: " + roundOffValue + "\n" + "floor value: " + floorValue + "\n" + "ceil value: " + ceilValue);
}

function ch2_q2(){
  var inputPositve = Number(prompt("Write Negative Number"));
  var roundOffValue = Math.round(inputPositve);
  var floorValue = Math.floor(inputPositve);
  var ceilValue = Math.ceil(inputPositve);
  alert("number: " + inputPositve + "\n" + "round off value: " + roundOffValue + "\n" + "floor value: " + floorValue + "\n" + "ceil value: " + ceilValue);
}

function ch2_q3(){
  var inputPositve = Number(prompt("Write Positve floating point Number"));
  var roundOffValue = Math.round(inputPositve);
  var floorValue = Math.floor(inputPositve);
  var ceilValue = Math.ceil(inputPositve);
  alert("number: " + inputPositve + "\n" + "round off value: " + roundOffValue + "\n" + "floor value: " + floorValue + "\n" + "ceil value: " + ceilValue);
}

function ch2_q4(){
  var inputPositve = Number(prompt("Write Negative floating point Number"));
  var roundOffValue = Math.round(inputPositve);
  var floorValue = Math.floor(inputPositve);
  var ceilValue = Math.ceil(inputPositve);
  alert("number: " + inputPositve + "\n" + "round off value: " + roundOffValue + "\n" + "floor value: " + floorValue + "\n" + "ceil value: " + ceilValue);
}

function ch2_q5(){
  var inputNumber = Number(prompt("Write Negative floating point Number"));
  var absoluteValue = Math.abs(inputNumber);
  alert("The absolute value of " + inputNumber + " is " + absoluteValue);
}

function ch2_q6(){
  var randomNumber = Math.random();
  randomNumber = Math.ceil(randomNumber * 6);
  alert("random dice value is: " + randomNumber);
}

function ch2_q7(){
  var randomNumber = Math.random();
  randomNumber = Math.ceil(randomNumber * 2);
  var coinToss = ["Error", "Tails", "Heads"]; 
  alert(randomNumber + "\nrandom coin value is: " + coinToss[randomNumber]);
}

function ch2_q8(){
  var randomNumber = Math.random();
  randomNumber = Math.ceil(randomNumber * 100);
  alert("random number between 1 and 100: " + randomNumber);
}

function ch2_q9(){
  var temp = false;
  var userInput = prompt("Enter your weight in kilograms");
  for(var i = 0 ; i < userInput.length ; i++){
    if(userInput.slice(i, i+4) === " kgs"){
      userInput = userInput.slice(0, i) + " kilograms";
      temp = true;
      break;
    }else if(userInput.slice(i, i+3) === "kgs"){
      userInput = userInput.slice(0, i) + " kilograms";
      temp = true;
      break;
    }else if(userInput.slice(i, i+10) === " kilograms"){
      temp = true;
      break;
    }else if(userInput.slice(i, i+9) === "kilograms"){
      userInput = userInput.slice(0, i) + " kilograms";
      temp = true;
      break;
    }
  }
  if (temp === false){
    userInput = userInput + " kilograms";
  }
  alert("The weight of user is " + userInput);
}

function ch2_q10(){
  var randomNumber = Math.random();
  randomNumber = Math.ceil(randomNumber * 10);
  var userInput = Number(prompt("Enter a number between 1 and 10"));
  if (userInput !== randomNumber){
    alert("Try again!\nCorrect answer was: " + randomNumber);
  }else{
    alert("Congrats... You've guessed correct!");
  }
}

function ch2_q11(){
  var currentDate = new Date();
  alert(currentDate);
}

function ch2_q12(){
  var currentDate = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = currentDate.getMonth();
  for(var i = 0; i < months.length; i++){
    if(i === month){
    alert("Current Month: " + months[i]);
    break;
    }
  }
}

function ch2_q13(){
  var currentDate = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = currentDate.getDay();
  for(var i = 0; i < days.length; i++){
    if(i === day){
      var day2 = days[i].slice(0, 3);
    alert("Today is: " + day2);
    break;
    }
  }
}

function ch2_q14(){
  var currentDate = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = days[currentDate.getDay()];
  for(var i = 0; i < days.length; i++){
    if(day === "Sunday"){
      var day2 = "Fun" + day.slice(3);
      alert("Today is: " + day2);
      break;
    }else if(day === "Saturday"){
      var day2 = "Fun" + day.slice(5);
      alert("Today is: " + day2);
      break;
    }else{
      alert("Today is: " + day);
      break;
    }
  }
}

function ch2_q15(){
  var currentDate = new Date();
  var todayDate = currentDate.getDate();
  if(todayDate < 16){
    alert("First fifteen days of the month");
  }else{
    alert("Last days of the month");
  }
}

function ch2_q16(){
  var currentDate = new Date();
  var milliSeconds = currentDate.getTime();
  alert("Current Date: " + currentDate + "\n" + "Elapsed milliseconds since January 1, 1970: " + milliSeconds + "\n" + "Elapsed minutes since January 1, 1970: " + milliSeconds/1000/60);
}

function ch2_q17(){
  var currentDate = new Date();
  var time = currentDate.getHours();
  if(time < 12){
    alert("It's AM");
  }else{
    alert("It's PM");
  }
}

function ch2_q18(){
  var laterDate = new Date("December 31, 2020");
  alert("Later date: " + laterDate);
}

function ch2_q19(){
  var newDate = new Date();
  var firstRamzanDate = new Date("June 18, 2015");
  var newDateMilli = newDate.getTime();
  var firstRamzanDateMilli = firstRamzanDate.getTime();
  var milliDiff = newDateMilli - firstRamzanDateMilli;
  var daysCalc = Math.ceil(milliDiff / 1000 / 60 / 60 / 24) ;
  alert(daysCalc + " days have passed since 1st Ramzan, 2015");
}

function ch2_q20(){
  var refDate = new Date("December 5, 2015 22:50:16");
  var beginDate = new Date("January 1, 2015");
  var refDateMilli = refDate.getTime();
  var beginDateMilli = beginDate.getTime();
  var milliDiff = refDateMilli - beginDateMilli;
  var secCalc = Math.ceil(milliDiff / 1000 / 60) ;
  alert(secCalc + " seconds had passed since begining of 2015");
}

function ch2_q21(){
  alert("This Question #21 is On Hold...")
}

function ch2_q22(){
  var newDate = new Date();
  var yearBack = new Date();
  var currentYear = newDate.getFullYear();
  currentYear = currentYear - 100;
  yearBack.setFullYear(currentYear)
  alert("Current Date: " + newDate + "\n" + "100 years back, it was " + yearBack);
}

function ch2_q23(){
  var userAge = prompt("Enter your age...")
  var currentDate = new Date();
  var birthYear = currentDate.getFullYear() - userAge ;
  alert("Your age is " + userAge + "\n" + "Your birth year is " + birthYear);
}

function ch2_q24(){
  var custName = prompt("Enter Customer Name");
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var newDate = new Date();
  var currentMont = months[newDate.getMonth()];
  var totalUnits = Number(prompt("Enter Number of Units"));
  var chargesUnits = Number(prompt("Enter Charges of Per Unit"));
  var netAmount = totalUnits * chargesUnits;
      netAmount = Number(netAmount.toFixed(2));
  var lateSurcharge = (netAmount/100)*12;
      lateSurcharge = Number(lateSurcharge.toFixed(2));
  var GrossAmount = Number(netAmount + lateSurcharge);
      GrossAmount = Number(GrossAmount.toFixed(2));
  var newTab = window.open();
  newTab.document.write("<h1>K-Electric Bill</h1>");
  newTab.document.write("<p>Customer Name: " + "<strong>" + custName + "</strong>"  +"</p>");
  newTab.document.write("<p>Month: " + "<strong>" + currentMont + "</strong>"  +"</p>");
  newTab.document.write("<p>Number of Units: " + "<strong>" + totalUnits + "</strong>"  +"</p>");
  newTab.document.write("<p>Charges per Units: " + "<strong>" + chargesUnits + "</strong>"  +"</p>");
  newTab.document.write("<br />");
  newTab.document.write("<p>Net Amount Payable (within Due Date): " + "<strong>" + netAmount + "</strong>"  +"</p>");
  newTab.document.write("<p>Late payment surcharge: " + "<strong>" + lateSurcharge + "</strong>"  +"</p>");
  newTab.document.write("<p>Gross Amount Payable (after Due Date): " + "<strong>" + GrossAmount + "</strong>"  +"</p>");
}
