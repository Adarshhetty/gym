

const weight_cur = document.getElementById("weight_cur");
const weight_des = document.getElementById("weight_des");
const height = document.getElementById("height");
const calculate_btn = document.getElementById("calculate-btn");
const bmi_result = document.getElementById("bmi_result");
const bmi_per = document.getElementById("bmi_per");
const bmr_result = document.getElementById("bmr_result");
const bmr_per = document.getElementById("bmr_per");

const daily_result = document.getElementById("daily_result");
const daily_per = document.getElementById("daily_per");
const week = document.getElementById('week');
const age = document.getElementById('age');
const radioButtons = document.querySelectorAll('input[name="gender"]');
console.log(radioButtons);
function calculate_bmi(weight, height) {
    if (typeof weight === "NAN" || typeof height == "NAN") {
        alert_bmi.classList.remove("hidden");
        alert_display("Weight or Height cannot be alpabets");
        return;
    }
    console.log(typeof weight);
    console.log(weight, height);
    let bmi = weight / (height * height);
    console.log(bmi);
    bmi = bmi.toFixed(2);
    // bmi_result.classList.remove("hidden");
    var para;
    if (bmi < 17) {

        // bmi_result.style.color = "red";
    }
    if (bmi < 24 && bmi > 17) {

        // bmi_result.style.color = "green";
    }
    if (bmi > 24) {

        // bmi_result.style.color = "brown";
    }
    console.log(bmi);
    bmi_result.innerHTML = "Your BMI value is" + ` ${bmi}`;
    bmi_per.innerHTML = bmi;
}


calculate_btn.addEventListener("click", function () {
    let gender;
    console.log(weight_cur.value);
    console.log(weight_des.value);

    if (document.getElementById('female').checked) {
        gender = female;
    }
    if (document.getElementById('male').checked) {
        gender = male;
    }

    let selectedSize, BMR;

    if (gender.value === "female") {
        BMR =
            (weight_des.value - weight_cur.value) * 6;

        console.log("female");
    }
    if (gender.value === "male") {
        BMR = (weight_des.value - weight_cur.value) * 7;

        console.log("male");
    }
    bmr_result.innerHTML = `Needed Calories ${BMR}kcal`
    bmr_per.innerHTML = `${BMR}kcal`;
    let ans = (BMR / (week.value * 7));
    console.log(ans);
    daily_result.innerHTML = `Daily Intake${ans}kcal`;
    daily_per.innerHTML = `${ans}kcal`
    // console.log(typeof weight.value, typeof height.value);
    // console.log(weight.value, height.value);
    console.log(BMR)
    calculate_bmi(parseFloat(weight_des.value), parseFloat(height.value));
});