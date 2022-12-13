//onload
window.addEventListener("DOMContentLoaded", function(){
    console.log("DOM ready");
    //button listener
    var button = document.querySelector("#myButton");
    button.addEventListener("click",function(){
        console.log("mybutton click");
    });
});

function validateForm(){
    
    console.log("validating form");
    let isValid = true;

    let Name = document.querySelector("#name").value;

    let NameError = document.querySelector("#nameError");

    //length validation
    //character validation
    var is_letter = /^[A-Za-z]+$/.test(Name);
    if(is_letter && Name.length >= 2){
        NameError.innerHTML = "";
    }else if(is_letter === false){
        NameError.innerHTML = "Name must be only alpha characters.";
        isValid = false;
    }else if(Name.length < 2){
        NameError.innerHTML = "First name must be at least 2 characters.";
        isValid  = false;
    }

    console.log(isValid);
    return isValid;
}