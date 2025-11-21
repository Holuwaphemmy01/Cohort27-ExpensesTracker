const expenses = [];

function addExpense(product,price) {
    if(price < 0) throw new Error("Invalid Input");
    if(product === null || product.length === 1) throw new Error("Invalid Input");
    
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
