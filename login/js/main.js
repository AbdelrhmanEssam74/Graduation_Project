//SECTION -  start form validation

let form = document.getElementById('form');
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    validateInputs();
    let result = isFormValid();
    if (result == true) {
        form.submit();
    } else {
        e.preventDefault();
    }
});
const setErrors = (e, m) => {
    const inputControl = e.parentElement;
    const errorDisplay = inputControl.querySelector(".error_message");
    const input_icon = inputControl.querySelector("i");
    errorDisplay.innerText = m;
    errorDisplay.style.display = "block";
    e.style.border = "1px solid var(--danger)"
    input_icon.style.color = "var(--danger)";
    form.addEventListener("click", () => {
        errorDisplay.style.display = "none";
    });

}


const setSuccess = (e) => {
    const inputControl = e.parentElement;
    const errorDisplay = inputControl.querySelector(".error_message");
    const input_icon = inputControl.querySelector("i");
    errorDisplay.style.display = "none";
    e.style.border = "1px solid var(--success)"
    input_icon.style.color = "var(--success)";
    errorDisplay.innerText = "";
};
const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (emailValue === "") {
        setErrors(email, "ادخل بريدك الالكتروني")
    } else {
        setSuccess(email);
    }
    if (passwordValue === "") {
        setErrors(password, "ادخل كلمة السر")
    } else {
        setSuccess(password);
    }
}


function isFormValid() {
    const error = form.querySelectorAll(".error_message");
    let result = true;
    error.forEach((container) => {
        if (container.style.display === "block") {
            result = false;
        }
    });
    return result;
}
//SECTION -  end form validation


//NOTE - show and hide the password
var eyeShowPassword = document.querySelector('#eyeShowPassword');
var eyeHidePassword = document.querySelector('#eyeHidePassword');

var passwordInput = document.querySelector('#password');
eyeShowPassword.addEventListener("click", showPassword);
eyeHidePassword.addEventListener("click", hidePassword);
function showPassword(e) {
    eyeHidePassword.style.display = "block";
    eyeShowPassword.style.display = "none";
    passwordInput.type = "text";
}
function hidePassword(e) {
    eyeShowPassword.style.display = "block";
    eyeHidePassword.style.display = "none";
    passwordInput.type = "password";
}

//NOTE - toggle_menu
//menu icon
const menuicon = document.querySelector(".toggle_menu");
//menu
const menu = document.getElementById("menu");
menuicon.addEventListener("click", () => {
    menu.classList.toggle("show_menu");
});


setTimeout(() => {
    if (menu.classList.contains("show_menu")) {
        menu.classList.remove("show_menu");
    }

}, 5000);
