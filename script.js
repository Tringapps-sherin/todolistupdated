function signup() {


    var name = $('#name').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    if (localStorage['signup'] == undefined) {
        let users = {
            "users": [],

        }
        localStorage['signup'] = JSON.stringify(users);
    }

    let localStorageusers = JSON.parse(localStorage['signup']);
    if (localStorageusers.users.length > 0) {
        let finduser = localStorageusers.users.find(ele => ele.name == name && ele.password == password);
        if (finduser) {
            return false;
        }
    }
    let newusers = {
        "username": name,
        "password": password,
        "todolist": []
    }
    if (password == confirmPassword) {
        localStorageusers.users.push(newusers);
        localStorage['signup'] = JSON.stringify(localStorageusers);
    } else {
        alert("password and confirm password is not same");
    }
}

function signin() {
    sessionStorage.clear();
    if (localStorage['signup'] != undefined) {
        var username = $('#name').val();
        var password = $('#password').val();
        console.log(password)
        let user = JSON.parse(localStorage['signup']);
        let finduser = user.users.find(ele => ele.username == username && ele.password == password);
        console.log(finduser);
        if (finduser) {

            let login = {
                "username": username,
                "password": password
            }
            sessionStorage.setItem('login', JSON.stringify(login));
            return true;
        }
    }
    return false;
}

// var storage='';
// var user='';
// var finduser='';
// var userdetails='';
// $( document ).ready(function() {
// if(sessionStorage.getItem('login') !=undefined ){

//      storage = JSON.parse(sessionStorage.getItem('login'));
//      user = JSON.parse(localStorage['signup']);
//      finduser = user.users.find(ele => ele.name == storage.name && ele.password == storage.password);
//      userdetails = finduser;
// }

// });
// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//     };
// }


// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector("ul");
// list.addEventListener(
//     "click",
//     function(ev) {
//         if (ev.target.tagName === "LI") {
//             ev.target.classList.toggle("checked");
//         }
//     },false
// );

// // Create a new list item when clicking on the "Add" button