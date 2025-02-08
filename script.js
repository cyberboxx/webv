document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("activation-page").classList.remove("hidden");
});

const activationCode = "EXIST369";
const countryList = [
    { name: "United States", code: "+1", flag: "flags/us.png" },
    { name: "United Kingdom", code: "+44", flag: "flags/gb.png" },
    { name: "Canada", code: "+1", flag: "flags/ca.png" },
    { name: "Germany", code: "+49", flag: "flags/de.png" },
    { name: "India", code: "+91", flag: "flags/in.png" },
    { name: "France", code: "+33", flag: "flags/fr.png" },
    { name: "Australia", code: "+61", flag: "flags/au.png" },
    { name: "France", code: "+33", flag: "flags/fr.png" },
    { name: "Italy", code: "+39", flag: "flags/it.png" },
    { name: "Spain", code: "+34", flag: "flags/es.png" },
    { name: "Mexico", code: "+52", flag: "flags/mx.png" },
    { name: "Brazil", code: "+55", flag: "flags/br.png" },
    { name: "South Africa", code: "+27", flag: "flags/za.png" },
    { name: "Nigeria", code: "+234", flag: "flags/ng.png" },
    { name: "China", code: "+86", flag: "flags/cn.png" },
    { name: "Japan", code: "+81", flag: "flags/jp.png" },
    { name: "Russia", code: "+7", flag: "flags/ru.png" },
    { name: "South Korea", code: "+82", flag: "flags/kr.png" },
    { name: "Argentina", code: "+54", flag: "flags/ar.png" },
    { name: "Netherlands", code: "+31", flag: "flags/nl.png" },
    { name: "Sweden", code: "+46", flag: "flags/se.png" },
    { name: "Norway", code: "+47", flag: "flags/no.png" },
    { name: "Denmark", code: "+45", flag: "flags/dk.png" },
    { name: "Switzerland", code: "+41", flag: "flags/ch.png" },
    { name: "Belgium", code: "+32", flag: "flags/be.png" },
    { name: "Austria", code: "+43", flag: "flags/at.png" },
    { name: "Portugal", code: "+351", flag: "flags/pt.png" },
    { name: "New Zealand", code: "+64", flag: "flags/nz.png" },
    { name: "Turkey", code: "+90", flag: "flags/tr.png" },
    { name: "Greece", code: "+30", flag: "flags/gr.png" },
    { name: "Ireland", code: "+353", flag: "flags/ie.png" },
    { name: "Finland", code: "+358", flag: "flags/fi.png" },
    { name: "Poland", code: "+48", flag: "flags/pl.png" }
];

let selectedCountry = null;
let selectedNumber = null;

function verifyCode() {
    const inputCode = document.getElementById("activation-code").value;
    if (inputCode === activationCode) {
        document.getElementById("activation-page").classList.add("hidden");
        document.getElementById("welcome-page").classList.remove("hidden");
    } else {
        document.getElementById("activation-error").textContent = "Invalid activation code!";
    }
}

function goToCountrySelection() {
    document.getElementById("welcome-page").classList.add("hidden");
    document.getElementById("country-page").classList.remove("hidden");
    loadCountries();
}

function loadCountries() {
    const countryDiv = document.getElementById("country-list");
    countryDiv.innerHTML = "";
    countryList.forEach(country => {
        const item = document.createElement("div");
        item.classList.add("country-item");
        item.innerHTML = `<img src="${country.flag}" alt="${country.name}"> ${country.name} (${country.code})`;
        item.onclick = () => selectCountry(country);
        countryDiv.appendChild(item);
    });
}

function selectCountry(country) {
    selectedCountry = country;
    document.getElementById("country-page").classList.add("hidden");
    document.getElementById("number-page").classList.remove("hidden");
    loadNumbers();
}

function loadNumbers() {
    const numberDiv = document.getElementById("number-list");
    numberDiv.innerHTML = "";
    for (let i = 0; i < 50; i++) {
        const randomNum = Math.floor(100000000 + Math.random() * 900000000);
        const fullNumber = `${selectedCountry.code}${randomNum}`;
        const item = document.createElement("div");
        item.classList.add("number-item");
        item.textContent = fullNumber;
        item.onclick = () => selectNumber(fullNumber);
        numberDiv.appendChild(item);
    }
}

function selectNumber(number) {
    selectedNumber = number;
    document.getElementById("number-page").classList.add("hidden");
    document.getElementById("connecting-page").classList.remove("hidden");
    startConnecting();
}

function startConnecting() {
    setTimeout(() => {
        document.getElementById("connection-error").classList.remove("hidden");
        document.getElementById("retry-button").classList.remove("hidden");
    }, 120000);
}

function retryConnection() {
    document.getElementById("connecting-page").classList.add("hidden");
    document.getElementById("country-page").classList.remove("hidden");
}