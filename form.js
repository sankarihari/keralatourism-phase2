var email = document.getElementById("email");
var error = document.getElementById("error");


function emailvalidation(){
  let  regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
  if (regexp.test(email.value)){
    error.innerHTML = "Valid";
    error.style.color="green";
    return true;
  }
  else{
    error.innerHTML = "Invalid";
    error.style.color = "red";
    return false;
  }
} 
let timeout;

let password = document.getElementById("password");
let strengthBadge  =document.getElementById("StrengthDisp");

let strongpassword = new regxps('/^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])$/')
let mediumpassword =new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

function StrengthChecker(PasswordParameter){
   
    if(strongpassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = "green";
        strengthBadge.textContent = 'Strong';
    }
    else if(mediumpassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = 'blue';
        strengthBadge.textContent = 'Medium';

    }
    else{
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.textContent = 'Weak';
    }
}
password.addEventListener("input", () => {
    strengthBadge.style.display = 'block';
    clearTimeout(timeout);

    timeout = setTimeout(() => StrengthChecker(password.value), 500);

    if(password.value.length !== 0) {
        strengthBadge.style.display != 'block';
    } else {
        strengthBadge.style.display = 'none';
    }
});




