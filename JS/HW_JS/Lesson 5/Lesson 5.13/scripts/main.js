const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let chosenCurrency;
    for (const item of currencyValues) {
        if(item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }

    return sumUAH/chosenCurrency.value

}


console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));