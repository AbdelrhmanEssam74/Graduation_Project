//NOTE - toggle_menu
//menu icon
const menuicon = document.querySelector(".toggle_menu");
const menuicon_box = document.querySelector("#menuicon");
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

