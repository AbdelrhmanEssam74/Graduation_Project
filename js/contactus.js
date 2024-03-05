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


// animate navbar
window.addEventListener("scroll", function () {
    let header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY);

});

//button to go to the top of the page
//get the button element
const btn = document.querySelector(".up");
//using windo.onscroll() method
document.onscroll = () => {
    if (this.scrollY >= 400) {
        //add className to the butoon "show"
        btn.classList.add("show");
    } else {
        //remove className to the butoon "show"
        btn.classList.remove("show");
    }
};
//then click on the button to go to the top of page
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};