var todoApp = document.getElementById('todoApp');
var todoAppList = document.getElementById('todoAppList');
var h1 = document.createElement('h1');
h1.setAttribute("class", 'jumbotron text-white bg-dark')
var h1Text = document.createTextNode("Todo App using DOM");
h1.appendChild(h1Text);
todoApp.appendChild(h1);


var NewTodoApp = document.getElementById('NewTodoApp');
var inputField = document.createElement('input');
inputField.setAttribute('type', "text");
inputField.setAttribute('class', "form-control input-lg");
inputField.setAttribute('id', "inputField");
inputField.setAttribute('placeholder', "Enter your wok details here...");
inputField.setAttribute('aria-describedby', "button-addon4");

var btnDiv = document.createElement('div');
btnDiv.setAttribute("class", 'input-group-append');
btnDiv.setAttribute("id", 'button-addon4');

var addBtn = document.createElement('button');
var addBtnText = document.createTextNode('Add Work');
addBtn.setAttribute('class', "btn btn-primary");
addBtn.setAttribute('type', "button");
addBtn.setAttribute('onClick', "addWork()");
addBtn.appendChild(addBtnText);
btnDiv.appendChild(addBtn);

var delBtn = document.createElement('button');
var delBtnTxt = document.createTextNode('Delete All');
delBtn.setAttribute('class', "btn btn-danger");
delBtn.setAttribute('type', "button");
delBtn.setAttribute('onClick', "deleteAll()");
delBtn.appendChild(delBtnTxt);
btnDiv.appendChild(delBtn);


NewTodoApp.appendChild(inputField);
NewTodoApp.appendChild(btnDiv);

function deleteAll() {
    document.getElementById('todoAppList').innerHTML = "";
}

//Add Work Details Function
function addWork() {
    var openBoxValue = document.getElementById("inputField").value;
    document.getElementById("inputField").value = "";

    if (openBoxValue === "") {
        alert("Error! Please enter your work details...")
    }
    else {

        var workItem = document.createElement('div');
        workItem.setAttribute("class", 'alert alert-primary alert-dismissible fade show');
        workItem.setAttribute("role", 'alert');

        var workItemText = document.createTextNode(openBoxValue);
        workItem.appendChild(workItemText);

        var dismissBtn = document.createElement('button');
        dismissBtn.setAttribute('type', "button");
        dismissBtn.setAttribute('class', "close");
        dismissBtn.setAttribute('data-dismiss', "alert");
        dismissBtn.setAttribute('aria-label', "Close");

        var span = document.createElement('span');
        span.setAttribute("aria-hidden", 'true');
        var spanText = document.createTextNode("×")
        span.appendChild(spanText);

        dismissBtn.appendChild(span);
        workItem.appendChild(dismissBtn);
        todoAppList.appendChild(workItem);
    }
}
