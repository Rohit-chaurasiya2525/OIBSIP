function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid number.';
    } else {
        let celsius, fahrenheit, kelvin;

        if (fromUnit === 'celsius') {
            celsius = temperature;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
        } else if (fromUnit === 'fahrenheit') {
            fahrenheit = temperature;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
        } else if (fromUnit === 'kelvin') {
            kelvin = temperature;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
        }

        result = `
            ${temperature} ${unitSymbol(fromUnit)} is equal to:
            <br>Celsius: ${celsius.toFixed(2)} °C
            <br>Fahrenheit: ${fahrenheit.toFixed(2)} °F
            <br>Kelvin: ${kelvin.toFixed(2)} K
        `;
    }

    document.getElementById('result').innerHTML = result;
}

function unitSymbol(unit) {
    switch (unit) {
        case 'celsius':
            return '°C';
        case 'fahrenheit':
            return '°F';
        case 'kelvin':
            return 'K';
        default:
            return '';
    }
}
