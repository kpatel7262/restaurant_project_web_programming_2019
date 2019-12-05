//alert("connected");

window.onload = function() {

var firstName = document.getElementById("customer-fname");
var lastName = document.getLementById("customer-lname");
    
var contactForm = document.forms[0];
contactForm.onsubmit = processForm;
    
function processForm(){
    var fName = /^[a-zA-Z]$/;
    if (fName.test(firstName.value)) {
        
    }
    var lName = /^[a-zA-z]$/;
    
    
    }//process form
}//window onload