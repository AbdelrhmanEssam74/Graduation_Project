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
    }
});