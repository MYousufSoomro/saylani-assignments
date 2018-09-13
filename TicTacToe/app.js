var count;
var temp = 0;
function onLoad() {
    swal("Enter X or Y to continue...", {
        content: "input",
        closeOnClickOutside: false,
        closeOnEsc: false,
    })
        .then((value) => {
            if (value.toLowerCase() !== 'x' && value.toLowerCase() !== "y") {
                swal({
                    title: "oh noes, there's nothing in here!",
                    text: "You are only allowed to enter 'X' or 'Y'",
                    icon: "error",
                    button: {
                        text: "Try again!",
                        closeModal: true,
                    }
                })
                    .then(() => {
                        location = './index.html'
                    });
            } else if (value === 'x' || value === "X") {
                swal({
                    title: "You Selected X!",
                    text: "Second User is Y!",
                    icon: "success",
                    button: "Play Now!",
                });
                count = 0;
                return count;
            } else if (value === 'y' || value === "Y") {
                swal({
                    title: "You Selected Y!",
                    text: "Second User is X!",
                    icon: "success",
                    button: "Play Now!",
                });
                count = 1;
                return count;
            }
        });
}

var headDiv = document.getElementById('heading');
var h1 = document.createElement('h1');
h1.setAttribute('class', "jumbotron");
var h1Text = document.createTextNode('Tic Tac Toe');
h1.appendChild(h1Text);
headDiv.appendChild(h1);

var btnOneValue;
function button1() {
    if (count === 0) {
        var butOne = document.getElementById('button1');
        butOne.setAttribute('value', "X");
        butOne.setAttribute('style', "color: white; background-color: red; font-weight: bold;");
        butOne.removeAttribute('onClick');
        count = 1;
        temp++;
        btnOneValue = 'x';
        result();
    } else if (count === 1) {
        var butOne = document.getElementById('button1');
        butOne.setAttribute('value', "Y");
        butOne.removeAttribute('onClick');
        butOne.setAttribute('style', "color: white; background-color: green; font-weight: bold;");
        count = 0;
        temp++;
        btnOneValue = 'y';
        result();
    }
}

var btnTwoValue;
function button2() {
    if (count === 0) {
        var butOne = document.getElementById('button2');
        butOne.setAttribute('value', "X");
        butOne.setAttribute('style', "color: white; background-color: red; font-weight: bold;");
        butOne.removeAttribute('onClick');
        count = 1;
        temp++;
        btnTwoValue = 'x';
        result();
    } else if (count === 1) {
        var butOne = document.getElementById('button2');
        butOne.setAttribute('value', "Y");
        butOne.removeAttribute('onClick');
        butOne.setAttribute('style', "color: white; background-color: green; font-weight: bold;");
        count = 0;
        temp++;
        btnTwoValue = 'y';
        result();
    }
}

var btnThreeValue;
function button3() {
    if (count === 0) {
        var butOne = document.getElementById('button3');
        butOne.setAttribute('value', "X");
        butOne.setAttribute('style', "color: white; background-color: red; font-weight: bold;");
        butOne.removeAttribute('onClick');
        count = 1;
        temp++;
        btnThreeValue = 'x';
        result();
    } else if (count === 1) {
        var butOne = document.getElementById('button3');
        butOne.setAttribute('value', "Y");
        butOne.removeAttribute('onClick');
        butOne.setAttribute('style', "color: white; background-color: green; font-weight: bold;");
        count = 0;
        temp++;
        btnThreeValue = 'y';
        result();
    }
}

var btnFourValue;
function button4() {
    if (count === 0) {
        var butOne = document.getElementById('button4');
        butOne.setAttribute('value', "X");
        butOne.setAttribute('style', "color: white; background-color: red; font-weight: bold;");
        butOne.removeAttribute('onClick');
        count = 1;
        temp++;
        btnFourValue = 'x';
        result();
    } else if (count === 1) {
        var butOne = document.getElementById('button4');
        butOne.setAttribute('value', "Y");
        butOne.removeAttribute('onClick');
        butOne.setAttribute('style', "color: white; background-color: green; font-weight: bold;");
        count = 0;
        temp++;
        btnFourValue = 'y';
        result();
    }
}

var btnFiveValue;
function button5() {
    if (count === 0) {
        var butOne = document.getElementById('button5');
        butOne.setAttribute('value', "X");
        butOne.setAttribute('style', "color: white; background-color: red; font-weight: bold;");
        butOne.removeAttribute('onClick');
        count = 1;
        temp++;
        btnFiveValue = 'x';
        result();
    } else if (count === 1) {
        var butOne = document.getElementById('button5');
        butOne.setAttribute('value', "Y");
        butOne.removeAttribute('onClick');
        butOne.setAttribute('style', "color: white; background-color: green; font-weight: bold;");
        count = 0;
        temp++;
        btnFiveValue = 'y';
        result();
    }
}

var btnSixValue;
function button6() {
    if (count === 0) {
        var butOne = document.getElementById('button6');
        butOne.setAttribute('value', "X");
        butOne.setAttribute('style', "color: white; background-color: red; font-weight: bold;");
        butOne.removeAttribute('onClick');
        count = 1;
        temp++;
        btnSixValue = 'x';
        result();
    } else if (count === 1) {
        var butOne = document.getElementById('button6');
        butOne.setAttribute('value', "Y");
        butOne.removeAttribute('onClick');
        butOne.setAttribute('style', "color: white; background-color: green; font-weight: bold;");
        count = 0;
        temp++;
        btnSixValue = 'y';
        result();
    }
}

var btnSevenValue;
function button7() {
    if (count === 0) {
        var butOne = document.getElementById('button7');
        butOne.setAttribute('value', "X");
        butOne.setAttribute('style', "color: white; background-color: red; font-weight: bold;");
        butOne.removeAttribute('onClick');
        count = 1;
        temp++;
        btnSevenValue = 'x';
        result();
    } else if (count === 1) {
        var butOne = document.getElementById('button7');
        butOne.setAttribute('value', "Y");
        butOne.removeAttribute('onClick');
        butOne.setAttribute('style', "color: white; background-color: green; font-weight: bold;");
        count = 0;
        temp++;
        btnSevenValue = 'y';
        result();
    }
}

var btnEightValue;
function button8() {
    if (count === 0) {
        var butOne = document.getElementById('button8');
        butOne.setAttribute('value', "X");
        butOne.setAttribute('style', "color: white; background-color: red; font-weight: bold;");
        butOne.removeAttribute('onClick');
        count = 1;
        temp++;
        btnEightValue = 'x';
        result();
    } else if (count === 1) {
        var butOne = document.getElementById('button8');
        butOne.setAttribute('value', "Y");
        butOne.removeAttribute('onClick');
        butOne.setAttribute('style', "color: white; background-color: green; font-weight: bold;");
        count = 0;
        temp++;
        btnEightValue = 'y';
        result();
    }
}

var btnNineValue;
function button9() {
    if (count === 0) {
        var butOne = document.getElementById('button9');
        butOne.setAttribute('value', "X");
        butOne.setAttribute('style', "color: white; background-color: red; font-weight: bold;");
        butOne.removeAttribute('onClick');
        count = 1;
        temp++;
        btnNineValue = 'x';
        result();
    } else if (count === 1) {
        var butOne = document.getElementById('button9');
        butOne.setAttribute('value', "Y");
        butOne.removeAttribute('onClick');
        butOne.setAttribute('style', "color: white; background-color: green; font-weight: bold;");
        count = 0;
        temp++;
        btnNineValue = 'y';
        result();
    }
}

function result() {
    if (btnOneValue === 'x' && btnTwoValue === 'x' && btnThreeValue === 'x') {
        swal({
            title: "X Won!",
            text: "User who selected 'X' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnOneValue === 'x' && btnFourValue === 'x' && btnSevenValue === 'x') {
        swal({
            title: "X Won!",
            text: "User who selected 'X' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnOneValue === 'x' && btnFiveValue === 'x' && btnNineValue === 'x') {
        swal({
            title: "X Won!",
            text: "User who selected 'X' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnTwoValue === 'x' && btnFiveValue === 'x' && btnEightValue === 'x') {
        swal({
            title: "X Won!",
            text: "User who selected 'X' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnThreeValue === 'x' && btnSixValue === 'x' && btnNineValue === 'x') {
        swal({
            title: "X Won!",
            text: "User who selected 'X' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnThreeValue === 'x' && btnFiveValue === 'x' && btnSevenValue === 'x') {
        swal({
            title: "X Won!",
            text: "User who selected 'X' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnFourValue === 'x' && btnFiveValue === 'x' && btnSixValue === 'x') {
        swal({
            title: "X Won!",
            text: "User who selected 'X' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnSevenValue === 'x' && btnEightValue === 'x' && btnNineValue === 'x') {
        swal({
            title: "X Won!",
            text: "User who selected 'X' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnOneValue === 'y' && btnTwoValue === 'y' && btnThreeValue === 'y') {
        swal({
            title: "Y Won!",
            text: "User who selected 'Y' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnOneValue === 'y' && btnFourValue === 'y' && btnSevenValue === 'y') {
        swal({
            title: "Y Won!",
            text: "User who selected 'Y' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnOneValue === 'y' && btnFiveValue === 'y' && btnNineValue === 'y') {
        swal({
            title: "Y Won!",
            text: "User who selected 'Y' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnTwoValue === 'y' && btnFiveValue === 'y' && btnEightValue === 'y') {
        swal({
            title: "Y Won!",
            text: "User who selected 'Y' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnThreeValue === 'y' && btnSixValue === 'y' && btnNineValue === 'y') {
        swal({
            title: "Y Won!",
            text: "User who selected 'Y' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnThreeValue === 'y' && btnFiveValue === 'y' && btnSevenValue === 'y') {
        swal({
            title: "Y Won!",
            text: "User who selected 'Y' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnFourValue === 'y' && btnFiveValue === 'y' && btnSixValue === 'y') {
        swal({
            title: "Y Won!",
            text: "User who selected 'Y' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (btnSevenValue === 'y' && btnEightValue === 'y' && btnNineValue === 'y') {
        swal({
            title: "Y Won!",
            text: "User who selected 'Y' have won this Game...",
            icon: "success",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    } else if (temp === 9) {
        swal({
            title: "Tied :(",
            text: "Game Tied... Reload this Page to Play Again",
            icon: "warning",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            });
    }
}
