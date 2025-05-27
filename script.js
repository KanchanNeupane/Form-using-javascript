let email=document.getElementById("email");
let password=document.getElementById("password");
let loginbtn=document.getElementById("login-btn");
let emailerror=document.querySelector(".email-error");
let passError=document.querySelector("pass-error");
let errorContainer = document.getElementById("error-container");
const emailRegx=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const passRegx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

const initialEmail="asiancollege@gmail.com";
const initialPassword = "123456789";

loginbtn.addEventListener("click",(e)=>{
    //check for empty fields
    e.preventDefault();
    if(email.value==="" && password.value===""){
        alert("Enter email and password fields can't be empty")
    }
    else{
        let isEmailValid=emailRegx.test(email.value);
        let isPassValid=passRegx.test(password.value);
        // console.log(isEmailValid)
        console.log(isPassValid)
        emailerror.style.display=isEmailValid?"none":"block"
    }
    if(!(email.value=== initialEmail)&&
!(password.value === initialPassword)){
    errorContainer.style.display ="block";
    errorContainer.style.animation = "slideDown 0.4s ease-in";

    setTimeout(()=>{
        console.log("hello")
        errorContainer.style.animation="slideUp 0.4s ease-in forwards"

    },3000)


}
}) ;