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

//NOTE - toggle_menu
//menu icon
const menuicon = document.querySelector(".toggle_menu");
//menu
const menu = document.getElementById("menu");
menuicon.addEventListener("click", () => {
    menu.classList.toggle("menu");
});



var newmenu = document.getElementById("menu");
var newNav = `
<li> <a href="#">للبيع</a></li>
<li> <a href="#">للإيجار</a></li>
<li> <a href="#">للطلاب</a></li>
<li> <a href="#">تجاريه</a></li>
<li> <a href="#">عنا</a></li>
<li><a href="#">تواصل معنا</a></li>
`;
// Check the width of the website on window resize
window.addEventListener('resize', function () {
    var websiteWidth = window.innerWidth || document.documentElement.clientWidth;

    // Check if the width is 767px or less
    if (websiteWidth <= 767) {
        newmenu.innerHTML = newNav;
    } else {
        newmenu.innerHTML = `                    
        <li><a href="#">تواصل معنا</a></li>
        <li> <a href="#">عنا</a></li>
        <li> <a href="#">تجاريه</a></li>
        <li> <a href="#">للطلاب</a></li>
        <li> <a href="#">للإيجار</a></li>
        <li> <a href="#">للبيع</a></li>
        `;
        // Reset the actions if the width is greater than 767px
    }
});