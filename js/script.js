const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");
const dailyValues = document.querySelectorAll(".daily");
const weeklyValues = document.querySelectorAll(".weekly");
const monthlyValues = document.querySelectorAll(".monthly");
const cardTimeDaily = document.querySelectorAll(".card-time.daily");
const cardTimeWeekly = document.querySelectorAll(".card-time.weekly");
const cardTimeMonthly = document.querySelectorAll(".card-time.monthly");
const previousTimeDaily = document.querySelectorAll(".previous-time.daily");
const previousTimeWeekly = document.querySelectorAll(".previous-time.weekly");
const previousTimeMonthly = document.querySelectorAll(".previous-time.monthly");

dailyBtn.addEventListener("click", () => {
    dailyValues.forEach(element => {
        element.style.display = "block";
    })
    weeklyValues.forEach(element => {
        element.style.display = "none";
    })
    monthlyValues.forEach(element => {
        element.style.display = "none";
    })
})

weeklyBtn.addEventListener("click", () => {
    dailyValues.forEach(element => {
        element.style.display = "none";
    })
    weeklyValues.forEach(element => {
        element.style.display = "block";
    })
    monthlyValues.forEach(element => {
        element.style.display = "none";
    })
})

monthlyBtn.addEventListener("click", () => {
    dailyValues.forEach(element => {
        element.style.display = "none";
    })
    weeklyValues.forEach(element => {
        element.style.display = "none";
    })
    monthlyValues.forEach(element => {
        element.style.display = "block";
    })
})

const populateTimes = (data) => {
    let i = 0;
    data.forEach(element => {
        cardTimeDaily[i].textContent = `${element.timeframes.daily.current}hrs`;
        previousTimeDaily[i].textContent = `Last Day - ${element.timeframes.daily.previous}hrs`;
        cardTimeWeekly[i].textContent = `${element.timeframes.weekly.current}hrs`;
        previousTimeWeekly[i].textContent = `Last Week - ${element.timeframes.weekly.previous}hrs`;
        cardTimeMonthly[i].textContent = `${element.timeframes.monthly.current}hrs`;
        previousTimeMonthly[i].textContent = `Last Month - ${element.timeframes.monthly.previous}hrs`;
        i++;
    })
}

fetch('./json/data.json').then((response) => {
    if(!response.ok) return console.log("Oops ! Couldn't fetch data.json");
    return response.json().then((data) => {populateTimes(data)});
})