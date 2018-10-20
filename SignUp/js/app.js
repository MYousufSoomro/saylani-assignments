var temp1 = false;
var temp2 = false;
var temp3 = false;
var temp4 = false;
// var temp5 = false;
var fNameArr = [];
var lNameArr = [];
var emailArr = [];
var passArr = [];
var genderArr = [];
var userDetails = [fNameArr, lNameArr, emailArr, passArr];
function adminInfo() {
    localStorage.setItem('adminEmail', 'admin@example.com');
    localStorage.setItem('adminPassword', '123456789');
}
function signUp() {
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePassword();
    // validateGender();
    localStorage.setItem('userDetails', userDetails)
    if (temp1 && temp2 && temp3 && temp4) {
        window.location.href = "login.html"
    } else {
        // window.location.href = window.location.href;
    }
}
function validateFirstName() {
    var fName = document.getElementById('fName').value;
    if (fName !== "" && fName !== " ") {
        fNameArr.push(fName);
        console.log(fNameArr);
        localStorage.setItem('FirstName', fName);
        console.log("right");
        temp1 = true;
    } else {
        alert("Please Enter correct Correct First Name");
        console.log("wrong");
        temp1 = false;
    }
}

function validateLastName() {
    var lName = document.getElementById('lName').value;
    if (lName !== "" && lName !== " ") {
        lNameArr.push(lName);
        localStorage.setItem('LastName', lName);
        console.log("right");
        temp2 = true;
    } else {
        alert("Please Enter correct Correct Last Name");
        console.log("wrong");
        temp2 = false;
    }
}

function validateEmail() {
    var email = document.getElementById('email').value;
    if (email.indexOf(" ") !== -1) {
        alert("Space are not allowed in Email\nPlease Try again!");
    } else if (email.indexOf("@") <= 1 && email.indexOf("@") < email.length - 5) {
        alert("Please enter a valid Email Address\nPlease Try again!");
    } else if (email.indexOf(".") === -1) {
        alert("You have not entered . (dot) in Email Address");
    } else {
        emailArr.push(email);
        localStorage.setItem('email', email);
        temp3 = true;
    }
}

function validatePassword() {
    var password = document.getElementById('password').value;
    var confPass = document.getElementById('confPass').value;
    if (password.indexOf(" ") !== -1) {
        alert("Space are not allowed in Password\nPlease Try again!");
    } else if(password !== confPass){
        alert("Please enter the same Password\nPlease Try again!");
    }else {
        passArr.push(password);
        localStorage.setItem('password', password);
        temp4 = true;
    }
}

function login() {
    var email = localStorage.getItem('email');
    var adminEmail = localStorage.getItem('adminEmail');
    var password = localStorage.getItem('password');
    var adminPassword = localStorage.getItem('adminPassword');
    var userEmail = document.getElementById('userEmail').value;
    var userPassword = document.getElementById('userPassword').value;

    if (email === userEmail && password === userPassword) {
        window.location.href = 'welcome.html'
        setTimeout(userInfo, 3000)
        document.getElementById('headOne').innerHTML = "Welcome " + localStorage.getItem('FirstName') + " " + localStorage.getItem('LastName');
    } else if (userEmail === adminEmail && userPassword === adminPassword) {
        window.location.href = 'adminPage.html'
    } else {
        alert('Your Email / Password not correct\nTry Again!');
    }
}

// function gender() {
//     var gender = document.getElementsByName('gender');
//     console.log("TEST GENDER:>>> " + gender);
//     if (gender === "male" || gender === "female" || gender === "other") {
//         return gender;
//     }
//     alert('Please Select your gender');
//     return false;
// }

// function validateGender() {
//     var getGender = gender();
//     console.log(getGender);
//     if (getGender !== false) {
//         genderArr.push(getGender);
//         localStorage.setItem('gender', getGender);
//         temp5 = true;
//     } else {
//         temp5 = false;
//     }
// }
