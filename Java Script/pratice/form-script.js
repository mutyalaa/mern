function printError(errorId,errorMsg){
    document.getElementById(errorId).innerHTML = errorMsg;
}

function doValid(){
    //let username = document.form1.username.value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    let usernameErr = passwordErr = true;
   // console.log(usernameErr);
    //console.log(passwordErr);

    if(username == ""){
        printError("username","Please enter your username");
        return false;
    }

}