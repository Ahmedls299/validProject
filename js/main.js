function valid(){
    var name = document.getElementById("registerUsername").value;
    var email = document.getElementById("registerEmail").value;
    var pass = document.getElementById("registerPassword").value;
    var cPass = document.getElementById("registerRepeatPassword").value;
    var errorMessage = document.getElementById("errorMessage");   //this to show the error inputs

    if(name==""&&email==""&&pass==""&&cPass=="")
    {
        errorMessage.innerHTML="please enter valid data";
        return false;
    }
    if(name.length<5 || name.length>20){
        errorMessage.innerHTML="please enter from 5 character to 20 character";
        return false;
    }
    if(email.indexOf("@")==-1)
    {
        errorMessage.innerHTML="please enter valid email that include @ mark in it";
        return false;
    }
    if(pass.length<8){
        errorMessage.innerHTML="please enter strong password that has at least 8 character or number ";
        return false;
    }
    if(cPass!==pass){
        errorMessage.innerHTML="please enter the same password ";
        return false;
    }
    console.log("valid data");
    return true;
    
}
