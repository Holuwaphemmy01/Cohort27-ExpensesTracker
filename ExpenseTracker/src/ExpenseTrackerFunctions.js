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
const users = {};
function addUniqueUsernameAndPassword(userName, password) {
    if (userName in users) {
        return "Username already exists";
    }
    users[userName] = {
        password: password,
        income: 0,
        expenses: expenses
    };
    console.log(users);
    return "User added successfully";
    
}

module.exports = addExpense;
module.exports = addUniqueUsernameAndPassword;
