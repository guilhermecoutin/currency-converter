const convertButton = document.querySelector(".convert-button")
const selectConvertedCurrency = document.getElementById("select-converted-currency")
const selectCurrencyToConvert = document.getElementById("select-currency-to-convert")


function convertCurrency() {
    const inputValue = document.querySelector(".input-value").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const convertedCurrencyValue = document.querySelector(".converted-currency-value")

    const dolar = 5.00
    const euro = 6.00
    const libra = 6.50

    currencyValueToConvert.innerHTML = Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

    if (selectConvertedCurrency.value == "dolar") {
        convertedCurrencyValue.innerHTML = Intl.NumberFormat("en-gb", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolar)
    }

    if (selectConvertedCurrency.value == "euro") {
        convertedCurrencyValue.innerHTML = Intl.NumberFormat("en-gb", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euro)
    }

    if (selectConvertedCurrency.value == "libra") {
        convertedCurrencyValue.innerHTML = Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libra)
    }
}

function changeCurrency() {
    const convertedImg = document.querySelector(".converted-img")
    const currencyNameConverted = document.querySelector(".currency-name-converted")

    if (selectConvertedCurrency.value == "dolar") {
        convertedImg.src = "./assets/dolar.png"
        currencyNameConverted.innerHTML = "Dólar americano"
    }

    if (selectConvertedCurrency.value == "euro") {
        convertedImg.src = "./assets/euro.png"
        currencyNameConverted.innerHTML = "Euro"
    }

    if (selectConvertedCurrency.value == "libra") {
        convertedImg.src = "./assets/libra.png"
        currencyNameConverted.innerHTML = "Libra"
    }

    convertCurrency()
}

convertButton.addEventListener("click", convertCurrency)
selectConvertedCurrency.addEventListener("change", changeCurrency)