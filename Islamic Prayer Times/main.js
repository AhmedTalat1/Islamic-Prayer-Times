// I Have Used (https://aladhan.com) As A Reference For The Prayer Times APIs.

let regionSelection = document.getElementById("region-selection"); // مش region-selection لأنه هو الـ select
let cityTitle = document.getElementById("city-title");

let today = new Date()
let day = today.getDate().toString()
let dayName = today.toLocaleDateString('ar', { weekday: 'long' });
let month = (today.getMonth() + 1).toString().padStart(2, "0")
let monthName = today.toLocaleString('ar', {month: "short"}).toString()
let year = today.getFullYear().toString()
let dateString = `${day} ${monthName} ${year}`;

document.getElementById("en-date").innerHTML = dateString
document.getElementById("day").innerHTML = dayName

let defaultOption = regionSelection.options[1]
regionSelection.selectedIndex = 1
let defaultCity = defaultOption.getAttribute("value");
let defaultCountry = defaultOption.getAttribute("country-value");
let defaultMethod = defaultOption.getAttribute("data-method");
cityTitle.innerHTML = defaultOption.text

getPrayerTimes(day, month, year, defaultCity, defaultCountry, defaultMethod);

gethijriDate(day, month, year, defaultCity, defaultCountry, defaultMethod)

regionSelection.addEventListener("change", () => {

    let selectedOption = regionSelection.options[regionSelection.selectedIndex];
    let cityValue = selectedOption.getAttribute("value");
    let countryValue = selectedOption.getAttribute("country-value");
    let dataMethod = selectedOption.getAttribute("data-method");
    
    if (regionSelection.value === "") {
        cityTitle.innerHTML = "";
        return;
    }
    
    let selectCity = selectedOption.text;
    cityTitle.innerHTML = selectCity;

    getPrayerTimes(day, month, year, cityValue, countryValue, dataMethod)
});



function getPrayerTimes(day, month, year, cityValue, countryValue, dataMethod){
    axios.get(`https://api.aladhan.com/v1/timingsByAddress/${day}-${month}-${year}?address=${cityValue},${countryValue}&method=${dataMethod}`)
    .then((response) => {
        let prayerTimes = response.data.data.timings
        document.getElementById("fajr-time").innerHTML = `<h1>${prayerTimes.Fajr}</h1>`
        document.getElementById("sunrise-time").innerHTML = `<h1>${prayerTimes.Sunrise}</h1>`
        document.getElementById("dhuhr-time").innerHTML = `<h1>${prayerTimes.Dhuhr}</h1>`
        document.getElementById("asr-time").innerHTML = `<h1>${prayerTimes.Asr}</h1>`
        document.getElementById("maghrib-time").innerHTML = `<h1>${prayerTimes.Maghrib}</h1>`
        document.getElementById("isha-time").innerHTML = `<h1>${prayerTimes.Isha}</h1>`
    })
}

function gethijriDate(day, month, year, cityValue, countryValue, dataMethod){
    axios.get(`https://api.aladhan.com/v1/timingsByAddress/${day}-${month}-${year}?address=${cityValue},${countryValue}&method=${dataMethod}`)
    .then((response) => {
        let hijri = response.data.data.date.hijri
        let hijriDay = hijri.day
        let hijriMonth = hijri.month.number
        let hijriMonthName = hijri.month.ar
        let hijriYear = hijri.year
        
        let hijriDate = `${hijriDay} ${hijriMonthName} ${hijriYear} `
        document.getElementById("ar-date").innerHTML = hijriDate
    })
}