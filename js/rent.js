//SECTION - show and hidde the sort list
let sort_by = document.querySelector(".sort_by_btn")
let sort_list = document.querySelector(".sort_list")
let sort_links = document.querySelectorAll(".sort_list a")
sort_by.addEventListener("click", function () {
    sort_list.classList.toggle("show_list");
})
sort_links.forEach(element => {
    element.addEventListener('click', function (e) {
        sort_by.textContent = element.dataset.link
    })
});


setTimeout(() => {
    if (sort_list.classList.contains("show_list")) {
        sort_list.classList.remove("show_list")
    }
}, 5000);

