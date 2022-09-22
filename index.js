
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl =  document.getElementById("input-el")
let convertBtn =  document.getElementById("convert-btn")
let message = document.getElementById("message")
let lengthUnit = document.getElementById("length-el")
let volumeUnit = document.getElementById("volume-el")
let massUnit = document.getElementById("mass-el")
const meterFeet = 3.281
const literGallon = 0.264
const kilogramPound = 2.204

convertBtn.addEventListener("click", function(){
    getLength()
    getVolume()
    getMass()

})

function getLength(){
    if(inputEl.value === "" ){
        message.textContent = "please input a number"
    }else{
        let meter = inputEl.value * meterFeet
        let feet = inputEl.value / meterFeet
        meter = meter.toFixed(3)
        feet = feet.toFixed(3)

        lengthUnit.innerHTML = `${inputEl.value} meters = ${meter} feet |
                                    ${inputEl.value} feet = ${feet} meters`
        message.textContent = ""
    }
}

function getVolume(){
    if(inputEl.value === "" ){
        message.textContent = "please input a number"
    }else{
        let liters = inputEl.value * literGallon
        let gallons = inputEl.value / literGallon
        liters = liters.toFixed(3)
        gallons = gallons.toFixed(3)

        volumeUnit.innerHTML = `${inputEl.value} liters = ${liters} gallons |
                                    ${inputEl.value} gallons = ${gallons} liters`
        message.textContent = ""
    }
}

function getMass(){
    if(inputEl.value === "" ){
        message.textContent = "please input a number"
    }else{
        let kilograms = inputEl.value * kilogramPound
        let pounds = inputEl.value / kilogramPound
        kilograms = kilograms.toFixed(3)
        pounds = pounds.toFixed(3)

        massUnit.innerHTML = `${inputEl.value} kilos = ${kilograms} pounds |
                                    ${inputEl.value} pounds = ${pounds} kilos`
        message.textContent = ""
    }
}
