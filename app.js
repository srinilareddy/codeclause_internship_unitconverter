const typeSelect = document.getElementById("type-select");
const lengthConversion = document.getElementById("length-conversion");
const temperatureConversion = document.getElementById("temperature-conversion");
const timeConversion = document.getElementById("time-conversion");
const weightConversion = document.getElementById("weight-conversion");
const convertButton = document.getElementById("convert-button");

typeSelect.addEventListener("change", function () {
    const selectedValue = this.value;

    lengthConversion.classList.add("hidden");
    temperatureConversion.classList.add("hidden");
    timeConversion.classList.add("hidden");
    weightConversion.classList.add("hidden");

    if (selectedValue === "length") {
        lengthConversion.classList.remove("hidden");
    } else if (selectedValue === "temperature") {
        temperatureConversion.classList.remove("hidden");
    } else if (selectedValue === "time") {
        timeConversion.classList.remove("hidden");
    } else if (selectedValue === "weight") {
        weightConversion.classList.remove("hidden");
    }
});

convertButton.addEventListener("click", function () {
    const selectedOption = typeSelect.value;

    if (selectedOption === "length") {
        const unit1 = document.getElementById("length-unit-1").value;
        const unit2 = document.getElementById("length-unit-2").value;
        const input1 = document.getElementById("length-input-1").value;
        let result;

        if (unit1 === "miles" && unit2 === "kilometers") {
            result = input1 * 1.60934;
        } else if (unit1 === "kilometers" && unit2 === "miles") {
            result = input1 / 1.60934;
        } else if (unit1 === "miles" && unit2 === "meters") {
            result = input1 * 1609.34;
        } else if (unit1 === "meters" && unit2 === "miles") {
            result = input1 / 1609.34;
        } else if (unit1 === "miles" && unit2 === "centimeters") {
            result = input1 * 160934;
        } else if (unit1 === "centimeters" && unit2 === "miles") {
            result = input1 / 160934;
        } else if (unit1 === "kilometers" && unit2 === "meters") {
            result = input1 * 1000;
        } else if (unit1 === "meters" && unit2 === "kilometers") {
            result = input1 / 1000;
        } else if (unit1 === "kilometers" && unit2 === "centimeters") {
            result = input1 * 100000;
        } else if (unit1 === "centimeters" && unit2 === "kilometers") {
            result = input1 / 100000;
        } else if (unit1 === "meters" && unit2 === "centimeters") {
            result = input1 * 100;
        } else if (unit1 === "centimeters" && unit2 === "meters") {
            result = input1 / 100;
        } else {
            result = input1;
        }

        document.getElementById("length-input-2").value = result;
    } else if (selectedOption === "temperature") {
        const unit1 = document.getElementById("temperature-unit-1").value;
        const unit2 = document.getElementById("temperature-unit-2").value;
        const input1 = document.getElementById("temperature-input-1").value;
        let result;

        if (unit1 === "fahrenheit" && unit2 === "celsius") {
            result = (input1 - 32) * (5 / 9);
        } else if (unit1 === "celsius" && unit2 === "fahrenheit") {
            result = (input1 * 9 / 5) + 32;
        } else {
            result = input1;
        }

        document.getElementById("temperature-input-2").value = result;
    } else if (selectedOption === "time") {
        const unit1 = document.getElementById("time-unit-1").value;
        const unit2 = document.getElementById("time-unit-2").value;
        const input1 = document.getElementById("time-input-1").value;
        let result;

        if (unit1 === "hours" && unit2 === "minutes") {
            result = input1 * 60;
        } else if (unit1 === "minutes" && unit2 === "hours") {
            result = input1 / 60;
        } else if (unit1 === "hours" && unit2 === "seconds") {
            result = input1 * 3600;
        } else if (unit1 === "seconds" && unit2 === "hours") {
            result = input1 / 3600;
        } else if (unit1 === "minutes" && unit2 === "seconds") {
            result = input1 * 60;
        } else if (unit1 === "seconds" && unit2 === "minutes") {
            result = input1 / 60;
        } else {
            result = input1;
        }

        document.getElementById("time-input-2").value = result;
    } else if (selectedOption === "weight") {
        const unit1 = document.getElementById("weight-unit-1").value;
        const unit2 = document.getElementById("weight-unit-2").value;
        const input1 = document.getElementById("weight-input-1").value;
        let result;

        if (unit1 === "kilograms" && unit2 === "pounds") {
            result = input1 * 2.205;
        } else if (unit1 === "pounds" && unit2 === "kilograms") {
            result = input1 / 2.205;
        } else if (unit1 === "kilograms" && unit2 === "grams") {
            result = input1 * 1000;
        } else if (unit1 === "grams" && unit2 === "kilograms") {
            result = input1 / 1000;
        } else if (unit1 === "pounds" && unit2 === "grams") {
            result = input1 * 453.6;
        } else if (unit1 === "grams" && unit2 === "pounds") {
            result = input1 / 453.6;
        } else if (unit1 === "tonnes" && unit2 === "kilograms") {
            result = input1 * 1000;
        } else if (unit1 === "kilograms" && unit2 === "tonnes") {
            result = input1 / 1000;
        } else if (unit1 === "tonnes" && unit2 === "pounds") {
            result = input1 * 2205;
        } else if (unit1 === "pounds" && unit2 === "tonnes") {
            result = input1 / 2205;
        } else if (unit1 === "tonnes" && unit2 === "grams") {
            result = input1 * 1000000;
        } else if (unit1 === "grams" && unit2 === "tonnes") {
            result = input1 / 1000000;
        } else {
            result = input1;
        }

        document.getElementById("weight-input-2").value = result;
    }
});