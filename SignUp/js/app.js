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

function userName() {
    if (localStorage.getItem('userInfo') === null) {
        swal({
            title: "Error!",
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
    } else {
        var userFName = (JSON.parse(localStorage.getItem("userInfo"))).fName;
        var userLName = (JSON.parse(localStorage.getItem("userInfo"))).lName;
        var JumboArea = document.getElementById("JumboArea");
        var smallEle = document.createElement("small");
        var userNameFill = document.createTextNode("Welcome " + userFName + " " + userLName);
        smallEle.appendChild(userNameFill);
        JumboArea.appendChild(smallEle);
        soldItemsCheck();
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
                    swal({
                        title: "Item Deleted",
                        text: "You have successfully deleted this Item",
                        icon: "success",
                        buttons: true,
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
                    swal({
                        title: "Item Deleted",
                        text: "You have successfully deleted this Item",
                        icon: "success",
                        buttons: true,
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
                    swal({
                        title: "Item Deleted",
                        text: "You have successfully deleted this Item",
                        icon: "success",
                        buttons: true,
                    });
                }
            });
    });
})();


(function saleBTN() {
    var sale1 = document.getElementById('saleBTN1');
    var sale2 = document.getElementById('saleBTN2');
    var sale3 = document.getElementById('saleBTN3');
    sale1.addEventListener("click", function () {
        swal({
            title: "Sale this Item?",
            text: "Do you want to sale this item? Confirm by clicking OK",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((SaleBTN) => {
                if (SaleBTN) {
                    saleItemH5.push(this.parentNode.parentNode.childNodes[1].childNodes[1].innerHTML);
                    saleItemDesp.push(this.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML);
                    localStorage.setItem("saleItemH5", JSON.stringify(saleItemH5));
                    localStorage.setItem("saleItemDesp", JSON.stringify(saleItemDesp));
                    this.parentNode.parentNode.remove();
                    swal({
                        title: "Done",
                        text: "You have successfully sale this item",
                        icon: "success",
                        buttons: true,
                    });

                }

            });
    });
    sale2.addEventListener("click", function () {
        swal({
            title: "Sale this Item?",
            text: "Do you want to sale this item? Confirm by clicking OK",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((SaleBTN) => {
                if (SaleBTN) {
                    saleItemH5.push(this.parentNode.parentNode.childNodes[1].childNodes[1].innerHTML);
                    saleItemDesp.push(this.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML);
                    localStorage.setItem("saleItemH5", JSON.stringify(saleItemH5));
                    localStorage.setItem("saleItemDesp", JSON.stringify(saleItemDesp));
                    this.parentNode.parentNode.remove();
                    swal({
                        title: "Done",
                        text: "You have successfully sale this item",
                        icon: "success",
                        buttons: true,
                    });

                }

            });
    });
    sale3.addEventListener("click", function () {
        swal({
            title: "Sale this Item?",
            text: "Do you want to sale this item? Confirm by clicking OK",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((SaleBTN) => {
                if (SaleBTN) {
                    saleItemH5.push(this.parentNode.parentNode.childNodes[1].childNodes[1].innerHTML);
                    saleItemDesp.push(this.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML);
                    localStorage.setItem("saleItemH5", JSON.stringify(saleItemH5));
                    localStorage.setItem("saleItemDesp", JSON.stringify(saleItemDesp));
                    this.parentNode.parentNode.remove();
                    swal({
                        title: "Done",
                        text: "You have successfully sale this item",
                        icon: "success",
                        buttons: true,
                    });

                }

            });
    });
})()



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
                    swal({
                        title: "Item Deleted",
                        text: "You have successfully deleted this Item",
                        icon: "success",
                        buttons: true,
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
                    saleItemH5.push(this.parentNode.parentNode.childNodes[0].childNodes[0].innerHTML);
                    saleItemDesp.push(this.parentNode.parentNode.childNodes[0].childNodes[1].innerHTML);
                    localStorage.setItem("saleItemH5", JSON.stringify(saleItemH5));
                    localStorage.setItem("saleItemDesp", JSON.stringify(saleItemDesp));
                    this.parentNode.parentNode.remove();
                    swal({
                        title: "Done",
                        text: "You have successfully sale this item",
                        icon: "success",
                        buttons: true,
                    });

                }

            });
    })
}

var saleItemH5 = [];
var saleItemDesp = [];

function soldItems() {
    if (localStorage.getItem('saleItemH5') === null || localStorage.getItem('saleItemDesp') === null) {
        swal({
            title: "You have not sold any thing!",
            text: "Try to Sale any Item First...",
            icon: "error",
            button: {
                text: "OK",
                closeModal: true,
            }
        })
            .then(() => {
                location = './dashboard.html'
            });
    } else {
        var saleItemH5 = JSON.parse(localStorage.getItem("saleItemH5"));
        var saleItemDesp = JSON.parse(localStorage.getItem("saleItemDesp"));
    }

    for (var i = 0; i < saleItemH5.length; i++) {
        var SoldData = document.getElementById("SoldData");
        var title = saleItemH5[i];
        var description = saleItemDesp[i];

        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var h5 = document.createElement("h5");
        var p = document.createElement("p");

        div1.setAttribute("class", "card bg-info text-white");
        div2.setAttribute("class", "card-body");
        h5.setAttribute("class", "card-title");
        p.setAttribute("class", "card-text");

        var h5Text = document.createTextNode(title);
        var pText = document.createTextNode(description);

        h5.appendChild(h5Text);
        p.appendChild(pText);

        div2.appendChild(h5);
        div2.appendChild(p);

        div1.appendChild(div2);

        SoldData.appendChild(div1);
    }
}

function soldItemsCheck() {
    if (localStorage.getItem('saleItemH5') === null || localStorage.getItem('saleItemDesp') === null) {
        console.log("No items sold yet...");
    } else {
        var saleItemH5 = JSON.parse(localStorage.getItem("saleItemH5"));
        console.log(saleItemH5);
        var saleItemDesp = JSON.parse(localStorage.getItem("saleItemDesp"));

        var product1Head = document.getElementById("product1Head").innerHTML;
        var product2Head = document.getElementById("product2Head").innerHTML;
        var product3Head = document.getElementById("product3Head").innerHTML;

        var product1Desc = document.getElementById("product1Desc").innerHTML;
        var product2Desc = document.getElementById("product2Desc").innerHTML;
        var product3Desc = document.getElementById("product3Desc").innerHTML;

        for (var i = 0; i < saleItemH5.length; i++) {
            if (saleItemH5[i] === product1Head && saleItemDesp[i] === product1Desc) {
                document.getElementById("product1Desc").parentNode.parentNode.innerHTML= "";
                document.getElementById("product1Desc").parentNode.parentNode.removeAttribute("class");
            } else if (saleItemH5[i] === product2Head && saleItemDesp[i] === product2Desc) {
                document.getElementById("product2Desc").parentNode.parentNode.innerHTML= "";
                document.getElementById("product2Desc").parentNode.parentNode.removeAttribute("class");
            } else if (saleItemH5[i] === product3Head && saleItemDesp[i] === product3Desc) {
                document.getElementById("product3Desc").parentNode.parentNode.innerHTML= "";
                (document.getElementById("product3Desc").parentNode.parentNode).setAttribute("class", "");
            } else {
                console.log("No built-in items sold yet...");
            }
        }
    }
}