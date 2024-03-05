//SECTION -  start form validation

let form = document.getElementById('form');
let first_name = document.getElementById("firstName");
let last_name = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let phone = document.getElementById("phone");

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
    const first_nameValue = first_name.value.trim();
    const last_nameValue = last_name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const ConfirmPasswordValue = confirmPassword.value.trim();
    const phonevalue = phone.value.trim();
    if (first_nameValue === "") {
        setErrors(first_name, "ما اسمك؟")
    } else {
        setSuccess(first_name);

    }
    if (last_nameValue === "") {
        setErrors(last_name, "ما اسمك؟")
    } else {
        setSuccess(last_name);

    }
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
    if (passwordValue.length < 5) {
        setErrors(password, " كلمة السر اقل من 5 حروف")
    } else {
        setSuccess(password);
    }
    if (ConfirmPasswordValue === "") {
        setErrors(confirmPassword, "ادخل كلمة السر")
    } else if (passwordValue !== ConfirmPasswordValue) {
        setErrors(confirmPassword, "كلمة السر غير مطابقة");
    } else {
        setSuccess(confirmPassword);

    }
    if (phonevalue === "") {
        setErrors(phone, "ادخل الرقم الخاص بك")
    } else {
        setSuccess(phone);

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
var confirm_passwordInput = document.querySelector('#confirmPassword');
eyeShowPassword.addEventListener("click", showPassword);
eyeHidePassword.addEventListener("click", hidePassword);
function showPassword(e) {
    eyeHidePassword.style.display = "block";
    eyeShowPassword.style.display = "none";
    passwordInput.type = "text";
    confirm_passwordInput.type = "text";
}
function hidePassword(e) {
    eyeShowPassword.style.display = "block";
    eyeHidePassword.style.display = "none";
    passwordInput.type = "password";
    confirm_passwordInput.type = "password";
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
