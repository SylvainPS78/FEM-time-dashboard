const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");
const dailyValues = document.querySelectorAll(".daily");
const weeklyValues = document.querySelectorAll(".weekly");
const monthlyValues = document.querySelectorAll(".monthly");

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