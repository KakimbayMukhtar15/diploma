function getExpenses() {
    const foodExpense = document.getElementById('food-expense');
    const rentExpense = document.getElementById('rent-expense');
    const clothesExpense = document.getElementById('clothes-expense');
    const totalExpenses = parseFloat(foodExpense.value) + parseFloat(rentExpense.value) + parseFloat(clothesExpense.value);
    return totalExpenses;
}
function getBalance() {
    const balanceTotal = document.getElementById('total-income');
    const balanceTotalAmount = balanceTotal.value;
    const expensesAmount = getExpenses();
    if (isNaN(balanceTotalAmount) || balanceTotalAmount > 0) {
        document.getElementById('balance-error-msg').style.display = 'none';
        const totalBalance = parseFloat(balanceTotal.value) - expensesAmount;
        return totalBalance;
    }
    else {
        document.getElementById('balance-error-msg').style.display = 'block';

    }
}
function getSavingBalance() {
    const balanceTotal = document.getElementById('total-income');
    const savingPercentage = document.getElementById('saving-percentage');
    const savingAmountValue = (balanceTotal.value / 100) * parseFloat(savingPercentage.value);

    return savingAmountValue;
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalExpenses = document.getElementById('expenses-amount');
    totalExpenses.innerText = getExpenses();
    const totalbalance = document.getElementById('balance-amount');
    totalbalance.innerText = getBalance();
    // if (getBalance()> getExpenses()){
    //     document.getElementById('total-balance-error-msg').style.display = 'none';
    //     // totalExpenses.innerText = getExpenses();
    //     totalbalance.innerText = getBalance();
    // }
    // else{
    //     document.getElementById('total-balance-error-msg').style.display = 'block';
    // }
})
document.getElementById('saving-btn').addEventListener('click', function () {
    const savingErrorMsg = document.getElementById('saving-balance-error-msg');
    const savingAmount = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('remaining-amount');
    if(getSavingBalance() <= getBalance()){
        savingAmount.innerText = getSavingBalance();
        savingErrorMsg.style.display = 'none';
        remainingBalance.innerText = getBalance() - getSavingBalance();
    }
    else if(getSavingBalance() > getBalance()){
        savingAmount.innerText = '00';
        savingErrorMsg.style.display = 'block';
        remainingBalance.innerText = getBalance();
        }
})
// Определите функцию, которая загружает данные и создает график
function fetchDataAndCreateChart() {
    var ctx = document.getElementById('myChart').getContext('2d');

    // Отправляем асинхронный запрос к URL для получения данных
    fetch('https://halykbank.kz/exchange-rates')
        .then(response => response.json()) // Преобразуем ответ в формат JSON
        .then(data => {
            // Создаем и настраиваем график с использованием полученных данных
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: data.datasetLabel,
                        data: data.datasetData,
                        backgroundColor: data.datasetBackgroundColor,
                        borderColor: data.datasetBorderColor,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });
}
