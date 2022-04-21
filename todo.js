var storage = '';
var user = '';
var finduser = '';
var userdetails = '';
$(document).ready(function() {
    if (sessionStorage.getItem('login') != undefined) {

        storage = JSON.parse(sessionStorage.getItem('login'));
        user = JSON.parse(localStorage['signup']);
        finduser = user.users.find(ele => ele.name== storage.name && ele.password == storage.password);
        userdetails = finduser;
         restore();
    }
});

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
    "click",
    function(ev) {
        console.log("event", ev);
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
            var str = ev.target.innerText;
            // var check = document.getElementById()
            for (var i = 0; i < userdetails.todolist.length; i++) {
                if (userdetails.todolist[i].taskname == str) {
                    userdetails.todolist[i].checked = 'yes';
                    break;
                }
            }
            store();
        }
    }, false
);
// Create a new list item when clicking on the "Add" button
function newElement() {
    
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value.trim();
    console.log(inputValue);
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === "") {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
         }
    var oldList = document.getElementById("myUL");
    var List = document.getElementById("list");

    oldList.style.display = "block"
    List.style.display = "none"

    let add = {
        'taskname': inputValue,
        'checked': 'no'
    }
    document.getElementById("myInput").value = "";
    userdetails.todolist.push(add);
    store();
}


function store() {
    var signin = JSON.parse(sessionStorage.getItem('login'));
    console.log(signin);
    var signup = JSON.parse(localStorage['signup']);
    console.log(userdetails);
    for (let list of signup.users) {
        if (list.username == signin.username && list.password == signin.password) {

            list.todolist = userdetails.todolist;
        }
    }
    console.log(signup);
    localStorage['signup'] = JSON.stringify(signup);
}

function completedTask() {
    var elements = document.querySelectorAll(".checked");
    for (var x of elements) {
        x.remove();
    }
    var filtertask = userdetails.todolist.filter(check=>check.checked=="no");
    userdetails.todolist=filtertask;
    store();
}

function clearAll() {
    var elements = document.querySelectorAll("li");
    for (var x of elements) {
        x.remove();
    }
    userdetails.todolist = [];
    store();
}
  
function logout() {
    sessionStorage.clear();
    location.href = "login-1.html";
}

function restore() {
    for (var i = 0; i < userdetails.todolist.length; i++) {
        // console.log(userdetails.todolist[i].taskname);
        var li = document.createElement("li");
        var t = document.createTextNode(userdetails.todolist[i].taskname);
    
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
        
    }

}
