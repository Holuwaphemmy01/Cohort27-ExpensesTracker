const expenses = [];

function addExpense(product,price) {
    expense = {
        purpose:product,
        amount:price,
        date : new Date()
        }
    
    expenses.push(expense)
    console.log(expenses)

    return "Expenses added"
}

module.exports = addExpense;
