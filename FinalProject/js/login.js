window.onload = function () {
    
    var myForm = document.forms.form1;
    var userLogIn = document.getElementById('user-name');
    var userPass = document.getElementById('user-pass');
   
    myForm.onsubmit = function () {
        if (userLogIn.value == "admin" && userPass.value == "12345") {
            alert("Welcome to my website.");
            return true;
        }
        else{
            alert("INCORRECT USERNAME OR PASSWORD");
            window.location.reload();           
            return false;
        }

    }
}
