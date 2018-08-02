



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