async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const apiKey = '5f98eba7ad670ce6ff197316'; 
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "success") {
            const conversionRate = data.conversion_rate;
            const result = (amount * conversionRate).toFixed(2);
            document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        } else {
            document.getElementById('result').innerText = 'Error: Unable to fetch exchange rate.';
        }
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
    }
}
