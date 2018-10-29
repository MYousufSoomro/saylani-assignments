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

    if (termsCond.checked) {
        document.getElementById("termsCondError").innerText = "";
        console.log(dataObj);
        localStorage.setItem('userInfo', JSON.stringify(dataObj));
        resetForm();
        swal({
            title: "Account Created!",
            text: "Your account has been successfuly created!",
            icon: "success",
            button: {
                text: "Login Now!",
                closeModal: true,
            }
        })
            .then(() => {
                location = './login.html'
            });

    } else {
        document.getElementById("termsCondError").innerText = "You must agree before submitting.";
        document.getElementById('termsCondError').setAttribute('class', "text-danger");
        return false;
    }
}

function resetForm() {
    document.getElementById('fName').value = "";
    document.getElementById('lName').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('confirmPassword').value = "";
    document.getElementById('customCheck1').removeAttribute('checked');
}

function logIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var EmailReg = /([a-z\d_-]+)@([a-z\d_-]+)\.[a-z]{2,4}/;
    var PasswordReg = /^([a-zA-Z0-9]{6,10})/;

    if (email.match(EmailReg)) {
        document.getElementById("emailError").innerText = "";
    } else {
        document.getElementById("emailError").innerText = "Please Correct Email Address";
        document.getElementById('emailError').setAttribute('class', "text-danger");
        return false;
    }

    if (password.match(PasswordReg)) {
        document.getElementById("passwordError").innerText = "";
    } else {
        document.getElementById("passwordError").innerText = "Password Must be Between 6 - 10 contains A-Z, a-z & 0-9 only";
        document.getElementById('passwordError').setAttribute('class', "text-danger");
        return false;
    }
    var getObj = JSON.parse(localStorage.getItem('userInfo'));
    console.log(localStorage.getItem('userInfo'));
    if (localStorage.getItem('userInfo') === null) {
        swal({
            title: "There isn't any Account",
            text: "You have to Sign up First...",
            icon: "error",
            button: {
                text: "Sign up",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    }
    var localEmail = getObj.email;
    var localPassword = getObj.password;

    if (email === localEmail) {
        if (password === localPassword) {
            swal({
                title: "Account Logged In!",
                text: "You have successfully login to your account",
                icon: "success",
                button: {
                    text: "OK",
                    closeModal: true,
                }
            })
                .then(() => {
                    location = './dashboard.html'
                });
        } else {
            swal({
                title: "Password is not Correct",
                text: "Your input password is not correct",
                icon: "error",
                button: {
                    text: "OK",
                    closeModal: true,
                }
            });
            document.getElementById('password').value = "";
        }
    } else {
        swal({
            title: "Email Not Found!",
            text: "Your input email is not found in Local Storage",
            icon: "error",
            button: {
                text: "OK",
                closeModal: true,
            }
        })
            .then(() => {
                location = './login.html'
            });
    }
}

function logOut() {
    swal({
        title: "Are you sure?",
        text: "Logout Now?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((LogOUT) => {
            if (LogOUT) {
                swal("You have Logout Successfully!", {
                    icon: "success",
                })
                    .then(() => {
                        location = './login.html'
                    });
            }
        });
}

(function delBTN() {
    var data1 = document.getElementById('deleteBTN1');
    var data2 = document.getElementById('deleteBTN2');
    var data3 = document.getElementById('deleteBTN3');
    data1.addEventListener("click", function () {
        swal({
            title: "Are you sure?",
            text: "Delete This Item",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((DeleteBTN) => {
                if (DeleteBTN) {
                    this.parentNode.parentNode.remove();
                    swal("You have Logout Successfully!", {
                        icon: "success",
                    });
                }
            });
    });
    data2.addEventListener("click", function () {
        swal({
            title: "Are you sure?",
            text: "Delete This Item",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((DeleteBTN) => {
                if (DeleteBTN) {
                    this.parentNode.parentNode.remove();
                    swal("You have Logout Successfully!", {
                        icon: "success",
                    });
                }
            });
    });
    data3.addEventListener("click", function () {
        swal({
            title: "Are you sure?",
            text: "Delete This Item",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((DeleteBTN) => {
                if (DeleteBTN) {
                    this.parentNode.parentNode.remove();
                    swal("You have Logout Successfully!", {
                        icon: "success",
                    });
                }
            });
    });
})()

function deleteCard() {
    swal({
        title: "Are you sure?",
        text: "Delete This Item",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((DeleteBTN) => {
            if (DeleteBTN) {
                this.parentNode.parentNode.remove();
                swal("You have Logout Successfully!", {
                    icon: "success",
                });
            }
        });
}

function addItem() {
    var addData = document.getElementById("addData");
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var h5 = document.createElement("h5");
    var p = document.createElement("p");
    var div3 = document.createElement("div");
    var buttonSale = document.createElement("button");
    var div4 = document.createElement("div");
    var buttonDel = document.createElement("button");

    div1.setAttribute("class", "card");
    div2.setAttribute("class", "card-body");
    h5.setAttribute("class", "card-title");
    p.setAttribute("class", "card-text");
    div3.setAttribute("class", "card-footer");
    buttonSale.setAttribute("type", "button");
    buttonSale.setAttribute("class", "btn btn-outline-success btn-block");
    div4.setAttribute("class", "card-footer");
    buttonDel.setAttribute("type", "button");
    buttonDel.setAttribute("class", "btn btn-outline-danger btn-block");

    var h5Text = document.createTextNode(title);
    var pText = document.createTextNode(description);
    var buttonSaleText = document.createTextNode("Sale");
    var buttonDelText = document.createTextNode("Delete");

    h5.appendChild(h5Text);
    p.appendChild(pText);
    buttonSale.appendChild(buttonSaleText);
    buttonDel.appendChild(buttonDelText);

    div2.appendChild(h5);
    div2.appendChild(p);
    div3.appendChild(buttonSale);
    div4.appendChild(buttonDel);

    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);

    addData.appendChild(div1);

    document.getElementById("AddItem").setAttribute("data-dismiss", "modal");
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";

    buttonDel.addEventListener("click", function () {
        swal({
            title: "Are you sure?",
            text: "Delete This Item",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((DeleteBTN) => {
                if (DeleteBTN) {
                    this.parentNode.parentNode.remove();
                    swal("You have Logout Successfully!", {
                        icon: "success",
                    });
                }
            });
    })

    buttonSale.addEventListener("click", function () {
        swal({
            title: "Sale this Item?",
            text: "Do you want to sale this item? Confirm by clicking OK",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((SaleBTN) => {
                if (SaleBTN) {
                    saleOBJ.h1 = this.parentNode.parentNode.childNodes[0].childNodes[0].innerText;
                    saleOBJ.desc = this.parentNode.parentNode.childNodes[0].childNodes[1].innerText;
                    localStorage.setItem("saleOBJ" , JSON.stringify(saleOBJ));
                    console.log(saleOBJ);
                    this.parentNode.parentNode.remove();
                    swal("You have Logout Successfully!", {
                        icon: "success",
                    });

                }
                
            });
    })
}

var saleOBJ = {};
