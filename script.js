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

