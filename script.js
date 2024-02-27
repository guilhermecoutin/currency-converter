const convertButton = document.querySelector(".convert-button")
const selectConvertedCurrency = document.getElementById("select-converted-currency")
const selectCurrencyToConvert = document.getElementById("select-currency-to-convert")

    async function convertCurrency () {
    const inputValue = document.querySelector(".input-value").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const convertedCurrencyValue = document.querySelector(".converted-currency-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())
    const dataLibra  = await fetch("https://economia.awesomeapi.com.br/json/last/gbp").then( response => response.json())
    
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const libra = dataLibra.GBPBRL.high
    const bitcoin = data.BTCBRL.high

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

    if (selectConvertedCurrency.value == "bitcoin") {
        convertedCurrencyValue.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT",
            minimumFractionDigits: 7,
        }).format(inputValue / bitcoin)
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

    if (selectConvertedCurrency.value == "bitcoin") {
        convertedImg.src = "./assets/bitcoin.png"
        currencyNameConverted.innerHTML = "BitCoin"
    }

    convertCurrency()
}

convertButton.addEventListener("click", convertCurrency)
selectConvertedCurrency.addEventListener("change", changeCurrency)