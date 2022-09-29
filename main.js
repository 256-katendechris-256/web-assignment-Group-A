function createAccount() {
    username = document.getElementById("Username")
    password = document.getElementById("password")
    DateOfBirth = document.getElementById("DateOfBirth")
    EmailAddress = document.getElementById("EmailAddress")
    user = {
        name: username.value,
        password: password.value,
        DateOfBirth:DateOfBirth .value,
        EmailAddress: EmailAddress.value,
    }
    
    if (JSON.parse(sessionStorage.getItem("users")) !== null) {
        users = JSON.parse(sessionStorage.getItem("users"))
        users.push(user)
        sessionStorage.setItem("users",JSON.stringify(users))
    }else{
        users = []
        users.push(user)
        sessionStorage.setItem("users",JSON.stringify(users))
    }
    sessionStorage.setItem("currentUser",Username.value)
    sessionStorage.setItem("currentUserDetails",JSON.stringify(user))
    console.log(JSON.parse(sessionStorage.getItem("users")))
    window.location = "home.html"
}