var dob = document.querySelector("#dob");
var luckyNumber = document.querySelector("#luckyNumber");
var outPut = document.querySelector("#outPut");
var button = document.querySelector("button");

button.addEventListener("click", calculateLuckyBirthday);


function calculateLuckyBirthday() {

    var dobValue = dob.value;
    dobValue = dobValue.replaceAll("-", "");
    var sum = 0;


    if (dobValue == 0 || luckyNumber.value.length == 0) {
        outPut.innerHTML = "Please enter both the fields";
        outPut.style.color = "red";
    } else {
        for (let i = 0; i < 8; i++) {
            sum = sum + (dobValue % 10);
            dobValue = ~~(dobValue / 10);
        }

        if (sum % luckyNumber.value == 0) {
            outPut.innerHTML = luckyNumber.value + " is Lucky Number 🥳💐";
            outPut.style.color = "green";
        } else {
            outPut.innerHTML = luckyNumber.value + " is not Lucky Number 😕";
            outPut.style.color = "#f97316";
        }
    }
}

