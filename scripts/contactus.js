//alert("connected");

window.onload = function() {

var firstName = document.getElementById("customer-fname");
var lastName = document.getLementById("customer-lname");
var fName = /^[a-zA-Z]$/;
var lName = /^[a-zA-z]$/;

    
var contactForm = document.forms[0];
contactForm.onsubmit = processForm;
    
function processForm(){
    if (!fName.test(firstName.value)) {
        firstName.style.background="red";
    } else {
        firstName.style.background="white";
    }
    
    if (!lName.test(lastName.value)) {
        lastName.style.background="red";
    } else {
        lastName.style.background="white";
    }
    
    }//process form
}//window onload