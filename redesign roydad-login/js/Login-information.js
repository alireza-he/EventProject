const formLogin = document.querySelector('#login');
formLogin.addEventListener('submit', validate);

function validate(event) {
    const emailOrPhone = document.getElementById('emailOrPhone');
    const emailOrPhoneError = document.querySelector('.invalid-message');

    const simpleEmail = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const simplePhone = /^(?:98|\+98|0098|0)?9[0-9]{9}$/;
    let validation = false;

    emailOrPhoneError.textContent = '';
    if (simpleEmail.test(emailOrPhone.value)) {
        validation = true;
    } else if (simplePhone.test(emailOrPhone.value)) {
        validation = true;
    }

    if (validation == false) {
        emailOrPhone.style.border = '2px solid #FF0000';
        emailOrPhoneError.style.display = 'flex';
        emailOrPhoneError.textContent = 'آدرس ایمیل یا شماره موبایل صحیح نمی باشد';
        event.preventDefault();
    }

    if (emailOrPhone.value === '') {
        emailOrPhone.style.border = '2px solid #FF0000';
        emailOrPhoneError.style.display = 'flex';
        emailOrPhoneError.textContent = 'لطفا آدرس ایمیل یا شماره موبایل خود را وارد کنید';
        event.preventDefault();
    }
}

/*          selector country          */

let countryData = window.intlTelInputGlobals.getCountryData();
let input = document.querySelector("#countrySelection");
let addressDropdown = document.querySelector("#countrySelection");

// init plugin
let iti = window.intlTelInput(input, {
    utilsScript: "../../build/js/utils.js?1603274336113" // just for formatting/placeholders etc
});

// populate the country dropdown
for (let i = 0; i < countryData.length; i++) {
    let country = countryData[i];
    let optionNode = document.createElement("option");
    optionNode.value = country.dialCode;
    let textNode = document.createTextNode(country.name);
    optionNode.appendChild(textNode);
    addressDropdown.appendChild(optionNode);
}
// set it's initial value
addressDropdown.value = iti.getSelectedCountryData().name;

// listen to the telephone input for changes
input.addEventListener('countrychange', function (e) {
    addressDropdown.value = iti.getSelectedCountryData().name;
});

// listen to the address dropdown for changes
addressDropdown.addEventListener('change', function () {
    iti.setCountry(this.value);
});
// window.intlTelInput(input, {
//     initialCountry: "auto",
//     geoIpLookup: function (success, failure) {
//         $.get("https://ipinfo.io", function () {
//         }, "jsonp").always(function (resp) {
//             let countryCode = (resp && resp.country) ? resp.country : "ir";
//             success(countryCode);
//         });
//     }
// });
