//NOTE - toggle_menu
//menu icon
const menuicon = document.querySelector(".toggle_menu");
//menu
const menu = document.getElementById("menu");
menuicon.addEventListener("click", () => {
    menu.classList.toggle("menu");
});


const newmenu = document.getElementById("menu");
const newNav = `
    <li> <a href="#">للبيع</a></li>
    <li> <a href="#">للإيجار</a></li>
    <li> <a href="#">للطلاب</a></li>
    <li> <a href="#">تجاريه</a></li>
    <li> <a href="#">عنا</a></li>
    <li><a href="#">تواصل معنا</a></li>
`;

const newSearchInputs = document.querySelector(".search_inputs");
const newInputs = `
    <div class="input_control_search">
        <input type="text" name="q" required oninput="showSuggestions()" id="searchInput" placeholder="الحي او المنطقة">
        <p class="no-suggestion-message" id="noSuggestionMessage"></p>
        <ul class="suggestion-list" id="suggestionList"></ul>
        <i class='bx bx-search'></i>
    </div>
    <div class="submit_btn">
        <button type="submit" value=""><i class="fa fa-search"></i></button>
    </div>
`;

function updateMenuAndSearchInputs() {
    const websiteWidth = window.innerWidth || document.documentElement.clientWidth;

    if (websiteWidth <= 767) {
        newmenu.innerHTML = newNav;
        newSearchInputs.innerHTML = newInputs;
    } else {
        newmenu.innerHTML = `                    
    <li><a href="#">تواصل معنا</a></li>
    <li> <a href="#">عنا</a></li>
    <li> <a href="#">تجاريه</a></li>
    <li> <a href="#">للطلاب</a></li>
    <li> <a href="#">للإيجار</a></li>
    <li> <a href="#">للبيع</a></li>
    `;
        newSearchInputs.innerHTML = `
    <div class="input_control_search">
        <input type="text" name="q" required oninput="showSuggestions()" id="searchInput" placeholder="الحي او المنطقة">
        <p class="no-suggestion-message" id="noSuggestionMessage"></p>
        <ul class="suggestion-list" id="suggestionList"></ul>
        <i class='bx bx-search'></i>
    </div>
    <div class="select_type">
        <select name="t" id="propertyTypeSelect">
            <option value="all">نوع العقار</option>
            <option value="1">شقة</option>
            <option value="2">فيلا</option>
        </select>
    </div>
    <div class="select_price">
        <p class="price_text">السعر</p>
        <div class="price_input">
            <div class="input_field">
                <div class="input_field_min">
                    <input type="number" name="pmi" placeholder="الحد الادني للسعر" id="minPriceInput">
                    <ul class="suggestion_min_price">
                </ul>
                </div>
                <span>-</span>
                <div class="input_field_max">
                    <input type="number" name="pmx" placeholder="الحد الاقصي للسعر" id="maxPriceInput">
                    <ul class="suggestion_max_price">
                    </ul>
                </div>
            </div>
            <div class="rest_price_input">إعادة ضبط</div>
        </div>
    </div>
    <div class="select_area">
    <p class="area_text">المساحه <span>(متر مربع)</span></p>
    <div class="area_input">
        <div class="input_field">
            <div class="input_field_min">
                <input type="number" name="ami" placeholder="اقل مساحه" id="minAreaInput">
                <ul class="suggestion_min_area">
                </ul>
            </div>
            <span>-</span>
            <div class="input_field_max">
                <input type="number" name="amx" placeholder="اكبر مساحه" id="maxAreaInput">
                <ul class="suggestion_max_area">
                </ul>
            </div>
        </div>
        <div class="rest_area_input">إعادة ضبط</div>
    </div>
</div>
    <div class="submit_btn">
        <button type="submit" value=""><i class="fa fa-search"></i></button>
    </div>
    `;
    }
}

// Check the width of the website on window resize
window.addEventListener('resize', updateMenuAndSearchInputs);
updateMenuAndSearchInputs()
//SECTION - suggestions list for search input
const suggestions = [
    "الرمد",
    "الحميات",
    "الكورنيش",
    "المدينة",
    "الحي الاول",
    "الواسطي",
];

function showSuggestions() {
    const userInput = document.getElementById("searchInput").value.toLowerCase();
    const suggestionList = document.getElementById("suggestionList");
    const noSuggestionMessage = document.getElementById("noSuggestionMessage");
    suggestionList.innerHTML = "";
    noSuggestionMessage.textContent = "";

    if (userInput.length === 0) {
        return;
    }

    const matchingSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().startsWith(userInput)
    );

    matchingSuggestions.forEach(suggestion => {
        const li = document.createElement("li");
        li.textContent = suggestion;
        li.addEventListener("click", () => {
            document.getElementById("searchInput").value = suggestion;
            suggestionList.innerHTML = "";
        });
        suggestionList.appendChild(li);
    });

    if (matchingSuggestions.length === 0) {
        noSuggestionMessage.textContent = "لا يمكننا العثور على استعلام البحث الخاص بك. جرب موقعًا مختلفًا.";
    }
}
document.querySelector('body').addEventListener('click', function hideSuggestions() {
    const suggestionList = document.getElementById("suggestionList");
    suggestionList.innerHTML = "";

})





//SECTION - suggestions list for price
const suggestions_price_buy = [
    1000,
    2000,
    3000,
    4000,
    5000,
    6000,
];

const suggestions_price_rent = [
    500,
    1000,
    1500,
    2000,
    2500,
    3500,
];

let radio_buy = document.querySelector("#buy")
let radio_rent = document.querySelector("#rent")

let minPriceInput = document.querySelector("#minPriceInput");
let maxPriceInput = document.querySelector("#maxPriceInput");
let price_text = document.querySelector(".price_text");


minPriceInput.addEventListener("click", function () {
    const suggestion_min_price_list = document.querySelector(".suggestion_min_price");
    suggestion_min_price_list.innerHTML = ""; // Clear previous suggestions

    let suggestion = [];
    if (radio_buy.checked) {
        suggestion = suggestions_price_buy;
    } else {
        suggestion = suggestions_price_rent;
    }

    suggestion.forEach(e => {
        const li = document.createElement("li")
        li.textContent = e;
        li.addEventListener("click", function () {
            minPriceInput.value = e
            suggestion_min_price_list.innerHTML = "";
            updatePriceText();
        })
        suggestion_min_price_list.appendChild(li);
    })
})

maxPriceInput.addEventListener("click", function () {
    const suggestion_max_price_list = document.querySelector(".suggestion_max_price");
    suggestion_max_price_list.innerHTML = ""; // Clear previous suggestions

    let suggestion = [];
    if (radio_buy.checked) {
        suggestion = suggestions_price_buy;
    } else {
        suggestion = suggestions_price_rent;
    }

    const minValue = minPriceInput.value;
    let upadated_list = [];
    if (minValue) {
        suggestion.forEach(e => {
            if (e > minValue) {
                upadated_list.push(e)
            }
        })
    }
    upadated_list.forEach(e => {
        const li = document.createElement("li")
        li.textContent = e;
        li.addEventListener("click", function () {
            maxPriceInput.value = e
            suggestion_max_price_list.innerHTML = "";
            updatePriceText();
        })
        suggestion_max_price_list.appendChild(li);
    })
})

function updatePriceText() {
    price_text.textContent = "من " + minPriceInput.value + " إلى " + maxPriceInput.value;
}

let rest_price_input = document.querySelector(".rest_price_input");
rest_price_input.addEventListener("click", function () {
    minPriceInput.value = ""
    maxPriceInput.value = ""
    price_text.textContent = "السعر"
})



//SECTION - suggestions list for area

const suggestions_min_area = [
    50,
    60,
    70,
    80,
    100
];

const suggestions_max_area = [
    50,
    60,
    70,
    80,
    100
];


let minAreaInput = document.querySelector("#minAreaInput");
let maxAreaInput = document.querySelector("#maxAreaInput");
let area_text = document.querySelector(".area_text");


minAreaInput.addEventListener("click", function () {
    const suggestion_min_area_list = document.querySelector(".suggestion_min_area");
    suggestion_min_area_list.innerHTML = ""; // Clear previous suggestions

    suggestions_min_area.forEach(e => {
        const li = document.createElement("li")
        li.textContent = "m " + e;
        li.addEventListener("click", function () {
            minAreaInput.value = e
            suggestion_min_area_list.innerHTML = "";
            updateAreaText();
        })
        suggestion_min_area_list.appendChild(li);
    })
})

maxAreaInput.addEventListener("click", function () {
    const suggestion_max_area_list = document.querySelector(".suggestion_max_area");
    suggestion_max_area_list.innerHTML = ""; // Clear previous suggestions


    const minValue = minAreaInput.value;
    let upadated_list = [];
    if (minValue) {
        suggestions_min_area.forEach(e => {
            if (e > minValue) {
                upadated_list.push(e)
            }
        })
    }
    upadated_list.forEach(e => {
        const li = document.createElement("li")
        li.textContent = "m " + e;
        li.addEventListener("click", function () {
            maxAreaInput.value = e
            suggestion_max_area_list.innerHTML = "";
            updateAreaText();
        })
        suggestion_max_area_list.appendChild(li);
    })
})

function updateAreaText() {
    area_text.textContent = "من " + minAreaInput.value + " إلى " + maxAreaInput.value;
}

let rest_area_input = document.querySelector(".rest_area_input");
rest_area_input.addEventListener("click", function () {
    minAreaInput.value = ""
    maxAreaInput.value = ""
    area_text.innerHTML = "المساحه <span>(متر مربع)</span>"
})

//!SECTION display price inputs

let AreaInputSelector = document.querySelector(".select_area p")
let AreaInput_container = document.querySelector(".area_input")
let priceInputSelector = document.querySelector(".select_price p")
let priceInput_container = document.querySelector(".price_input")


priceInputSelector.addEventListener("click", function () {
    if (priceInput_container.classList.contains("show_price_list")) {
        priceInput_container.classList.remove("show_price_list")
    } else {
        priceInput_container.classList.add("show_price_list")
    }
    if (AreaInput_container.classList.contains("show_area_list")) {
        AreaInput_container.classList.remove("show_area_list")
    }
})


//SECTION display price inputs


AreaInputSelector.addEventListener("click", function () {
    if (AreaInput_container.classList.contains("show_area_list")) {
        AreaInput_container.classList.remove("show_area_list")
    } else {
        AreaInput_container.classList.add("show_area_list")
    }
    if (priceInput_container.classList.contains("show_price_list")) {
        priceInput_container.classList.remove("show_price_list")
    }
})

let submit_btn = document.querySelector(".submit_btn");
submit_btn.addEventListener("click", function () {
    if (AreaInput_container.classList.contains("show_area_list")) {
        AreaInput_container.classList.remove("show_area_list")
    }
    if (priceInput_container.classList.contains("show_price_list")) {
        priceInput_container.classList.remove("show_price_list")
    }
})




// animate property body
window.addEventListener("scroll", function () {
    let propertyBodies = document.querySelectorAll(".property-body");
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;

    if (windowWidth > 768) {
        // Apply animation only if window width is larger than 768px (example value)
        propertyBodies.forEach(function (body) {
            let bodyTop = body.getBoundingClientRect().top;

            if (bodyTop < windowHeight) {
                body.classList.add("show");
                body.classList.remove("hide");
            }
            else {
                body.classList.remove("show");
                body.classList.add("hide");

            }
        });
    }
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
