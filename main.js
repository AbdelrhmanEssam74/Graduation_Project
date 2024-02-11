let inputBox = document.querySelector('.input-box')
var email = document.getElementById('email').value;
var Password = document.getElementById('password').value;
inputBox.addEventListener('submit', function (event) {
    event.preventDefault();
})
function check() {
    if (email === 'email' && Password === ' password') {
        window.location.href = '#'
    }
    else {
        alert('يوجد خطأ في البريد الالكتروني او كلمه المرور. حاول مره اخري')
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