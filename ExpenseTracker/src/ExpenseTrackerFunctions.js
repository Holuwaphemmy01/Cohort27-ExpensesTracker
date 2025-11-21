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


function showAllExpense(){
    if(expenses.length !== 0){
        console.log(expenses);
        return "No expense added"
        
    }

    expenses.forEach((expense, index) => {
        return `${index + 1}. ${expense.purpose} - $${expense.amount}`;
    });


}

module.exports = {addExpense, showAllExpense};
