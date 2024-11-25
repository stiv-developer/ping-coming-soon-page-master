

function sendEmail(){

    var email = document.getElementById("email").value;

    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var regOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if(reg.test(email) && regOficial.test(email) ){
        alert("Email enviado");
        email = '';
        message(true);
    } else if(reg.test(email)){
        alert("valido");
        email= '';
        message(true);
    } else{
        message(false);
    }
}


function message(value){
    var span = document.getElementById("message-error");
    var email = document.getElementById("email");
    if(value === true){
        span.style.display = "none";
        email.classList.remove("change-border-input");
    } else{
        email.classList.add("change-border-input");
        span.style.display = "block";
    }
}