function RunTest() {
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var termsCond = document.getElementById('customCheck1');

    var NameReg = /^([a-zA-Z])/;
    var EmailReg = /([a-z\d_-]+)@([a-z\d_-]+)\.[a-z]{2,4}/;
    var PasswordReg = /^([a-zA-Z0-9]{6,10})/;

    var dataObj = {};

    if (fName.match(NameReg)) {
        document.getElementById("fNameError").innerText = "";
        dataObj.fName = fName;
    } else {
        document.getElementById("fNameError").innerText = "Please Enter First Name";
        document.getElementById('fNameError').setAttribute('class', "text-danger");
        return false;
    }

    if (lName.match(NameReg)) {
        document.getElementById("lNameError").innerText = "";
        dataObj.lName = lName;
    } else {
        document.getElementById("lNameError").innerText = "Please Enter Last Name";
        document.getElementById('lNameError').setAttribute('class', "text-danger");
        return false;
    }

    if (email.match(EmailReg)) {
        document.getElementById("emailError").innerText = "";
        dataObj.email = email;
    } else {
        document.getElementById("emailError").innerText = "Please Correct Email Address";
        document.getElementById('emailError').setAttribute('class', "text-danger");
        return false;
    }

    if (password.match(PasswordReg)) {
        document.getElementById("passwordError").innerText = "";
        if (password === confirmPassword) {
            document.getElementById("confirmPasswordError").innerText = "";
            dataObj.password = password;
        } else {
            document.getElementById("confirmPasswordError").innerText = "Please Enter Same Password";
            document.getElementById('confirmPasswordError').setAttribute('class', "text-danger");
            return false;
        }
    } else {
        document.getElementById("passwordError").innerText = "Password Must be Between 6 - 10 contains A-Z, a-z & 0-9 only";
        document.getElementById('passwordError').setAttribute('class', "text-danger");
        return false;
    }

    if (termsCond.checked){
        document.getElementById("termsCondError").innerText = "";
        console.log(dataObj);
        localStorage.setItem('userInfo', JSON.stringify(dataObj));
        resetForm();
        swal({
            title: "Account Created!",
            text: "Your account has been successfuly created!",
            icon: "success",
            button: "OK!",
          });
    }else{
        document.getElementById("termsCondError").innerText = "You must agree before submitting.";
        document.getElementById('termsCondError').setAttribute('class', "text-danger");
        return false;
    }
}

function resetForm(){
    document.getElementById('fName').value = "";
    document.getElementById('lName').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('confirmPassword').value = "";
    document.getElementById('customCheck1').removeAttribute('checked');
}