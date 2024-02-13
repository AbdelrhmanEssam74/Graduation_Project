let inputBox = document.querySelector('.input-box')
var email = document.getElementById('email').value;
var Password = document.getElementById('password').value;
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var confirmPassword = document.getElementById("confirmPassword").value;
var phoneNumber = document.getElementById("phoneNumber").value;
inputBox.addEventListener('submit', function (event) {
    event.preventDefault();
})
function check() {
    // Check if name contains invalid characters
    if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
        alert("يجب ان يحتوى الأسم على احرف فقط");

    }
    // Check if passwords match
    if (password != confirmPassword) {
        alert("كلمة المرور غير متطابقة");

    }

    // check if the password is strong enough 
    // Check length
    if (password.length < 8) {
        alert("كلمة المرور غير قوية بشكل كافى يجب ان تحتوى على 8 احرف كبيرة واحرف صغيرة وارقام ورموز");

    }
    // Check for uppercase letters
    if (!/[A-Z]/.test(password)) {
        alert("كلمة المرور غير قوية بشكل كافى يجب ان تحتوى على 8 احرف كبيرة واحرف صغيرة وارقام ورموز");

    }
    // Check for lowercase letters
    if (!/[a-z]/.test(password)) {
        alert("كلمة المرور غير قوية بشكل كافى يجب ان تحتوى على 8 احرف كبيرة واحرف صغيرة وارقام ورموز");


    }
    // Check for numbers
    if (!/\d/.test(password)) {
        alert("كلمة المرور غير قوية بشكل كافى يجب ان تحتوى على 8 احرف كبيرة واحرف صغيرة وارقام ورموز");

    }
    // Check for special characters
    if (!/[^A-Za-z0-9]/.test(password)) {
        alert("كلمة المرور غير قوية بشكل كافى يجب ان تحتوى على 8 احرف كبيرة واحرف صغيرة وارقام ورموز");
    }
    // Check if phone number is 11 numbers
    if (phoneNumber.length != 11) {
        alert("يجب إدخال رقم صالح");
    }
    else {

        return true;
    }

}
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