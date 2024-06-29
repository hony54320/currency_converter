import inquirer from "inquirer";
async function currencyConverter() {
    console.log('-----------------------------');
    console.log('Welcome to Currency Converter');
    console.log('-----------------------------');
    console.log("Pakistan Rupees (PKR)\nUnited States Dollar (USD)\nEuro (EUR)\nBritish Pound Sterling (GBP)\nCanadian Dollar (CAD)");
    let { value } = await inquirer.prompt([
        {
            name: 'value',
            message: `Choose currency you want to convert from`,
            type: 'string',
        }
    ]);
    let { value1 } = await inquirer.prompt([
        {
            name: 'value1',
            message: `Choose currency you want to convert to`,
            type: 'string',
        }
    ]);
    let { value2 } = await inquirer.prompt([
        {
            name: 'value2',
            message: `Enter amount to be converted`,
            type: 'number',
        }
    ]);
    if (value.toUpperCase() === 'PKR') {
        if (value1.toUpperCase() === 'USD') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' PKR is equal to ' + (value2 * 0.0036).toFixed(3) + ' USD');
        }
        else if (value1.toUpperCase() === 'EUR') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' PKR is equal to ' + (value2 * 0.0034).toFixed(3) + ' EUR');
        }
        else if (value1.toUpperCase() === 'GBP') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' PKR is equal to ' + (value2 * 0.0029).toFixed(3) + ' GBP');
        }
        else if (value1.toUpperCase() === 'CAD') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' PKR is equal to ' + (value2 * 0.0050).toFixed(3) + ' CAD');
        }
        doAnother();
    }
    if (value.toUpperCase() === 'USD') {
        if (value1.toUpperCase() === 'PKR') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' USD is equal to ' + (value2 * 278.12).toFixed(3) + ' PKR');
        }
        else if (value1.toUpperCase() === 'EUR') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' USD is equal to ' + (value2 * 0.94).toFixed(3) + ' EUR');
        }
        else if (value1.toUpperCase() === 'GBP') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' USD is equal to ' + (value2 * 0.80).toFixed(3) + ' GBP');
        }
        else if (value1.toUpperCase() === 'CAD') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' USD is equal to ' + (value2 * 1.38).toFixed(3) + ' CAD');
        }
        doAnother();
    }
    if (value.toUpperCase() === 'EUR') {
        if (value1.toUpperCase() === 'PKR') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' EUR is equal to ' + (value2 * 295.51).toFixed(3) + ' PKR');
        }
        else if (value1.toUpperCase() === 'USD') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' EUR is equal to ' + (value2 * 1.06).toFixed(3) + ' USD');
        }
        else if (value1.toUpperCase() === 'GBP') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' EUR is equal to ' + (value2 * 0.85).toFixed(3) + ' GBP');
        }
        else if (value1.toUpperCase() === 'CAD') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' EUR is equal to ' + (value2 * 1.47).toFixed(3) + ' CAD');
        }
        doAnother();
    }
    if (value.toUpperCase() === 'GBP') {
        if (value1.toUpperCase() === 'PKR') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' GBP is equal to ' + (value2 * 345.81).toFixed(3) + ' PKR');
        }
        else if (value1.toUpperCase() === 'USD') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' GBP is equal to ' + (value2 * 1.06).toFixed(3) + ' USD');
        }
        else if (value1.toUpperCase() === 'EUR') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' GBP is equal to ' + (value2 * 1.17).toFixed(3) + ' EUR');
        }
        else if (value1.toUpperCase() === 'CAD') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' GBP is equal to ' + (value2 * 1.72).toFixed(3) + ' CAD');
        }
        doAnother();
    }
    if (value.toUpperCase() === 'CAD') {
        if (value1.toUpperCase() === 'PKR') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' CAD is equal to ' + (value2 * 201.14).toFixed(3) + ' PKR');
        }
        else if (value1.toUpperCase() === 'USD') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' CAD is equal to ' + (value2 * 0.72).toFixed(3) + ' USD');
        }
        else if (value1.toUpperCase() === 'EUR') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' CAD is equal to ' + (value2 * 0.68).toFixed(3) + ' EUR');
        }
        else if (value1.toUpperCase() === 'GBP') {
            console.log('According to April 4,2024 Exchange Rates');
            console.log(value2 + ' CAD is equal to ' + (value2 * 0.58).toFixed(3) + ' GBP');
        }
        doAnother();
    }
    async function doAnother() {
        console.log('Do you want another Currency Convert?');
        let { value3 } = await inquirer.prompt([
            {
                name: 'value3',
                message: `Press Y for Yes & N for No`,
                type: 'string',
            }
        ]);
        if (value3.toUpperCase() === 'Y') {
            currencyConverter();
        }
        else {
            console.log('Thank you for using Currency Converter');
        }
    }
}
currencyConverter();
