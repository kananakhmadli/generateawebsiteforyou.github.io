let genders = document.querySelectorAll('[name="gender"]');

let bmr = 0;
let amr = 0;
let genderStatus = true;
// true --male
//false  female
genders.forEach((element) => {
    element.addEventListener("change", function () {
        // console.log(element.value)
        if (element.value == "female") {
            console.log("hell")
            genderStatus = false
        }
        else {
            console.log("yes")
            genderStatus = true;
        }
    })
})

let ageInput = 0;

let age = document.querySelector("#age");
age.addEventListener("input", function () {
    // console.log(this.value)
    ageInput = this.value
    console.log(typeof ageInput)
})

let heightInput = 0;

let height = document.querySelector("#height");
height.addEventListener("input", function () {
    console.log(this.value)
    heightInput = this.value;
})

let weightInput = 0;

let weight = document.querySelector("#weight");
weight.addEventListener("input", function () {
    console.log(this.value);
    weightInput = this.value;
})


let activityRate = document.querySelectorAll('[name="amr"]');
let activityRateInput = "lightly";
activityRate.forEach((element) => {
    element.addEventListener("change", function () {
        console.log(element.id)
        activityRateInput = element.id;
    })
})

function blinker() {
    if (genderStatus) {
        bmr = 66.47 + 13.75 * Number(weightInput) + 5.003 * Number(heightInput) - 6.755 * Number(ageInput);
    }
    else {
        bmr = 655.1 + 9.563 * Number(weightInput) + 1.850 * Number(heightInput) - 4.676 * Number(ageInput);

    }
    if (activityRateInput == "sedentary") {
        amr = bmr * 1.2;
    }
    else if (activityRateInput == "lightly") {
        console.log("Here")
        amr = bmr * 1.375;
    }
    else if (activityRateInput == "moderately") {
        amr = bmr * 1.55;
    }
    else if (activityRateInput == "active") {
        amr = bmr * 1.725;
    }
    else {
        amr = bmr * 1.9;
    }
    console.log(`Gender is ${genderStatus},age is ${ageInput}, height is ${heightInput},weight is ${weightInput},
    activityRateInput is ${activityRateInput},amr is ${amr},Result is ${amr + amr / 15}
    `)
    let result = document.querySelector("#result");
    result.value=Math.round(amr + amr / 40);
    result.value+="%";



}
// console.log(result)
// result.addEventListener("")

setInterval(blinker, 500);
