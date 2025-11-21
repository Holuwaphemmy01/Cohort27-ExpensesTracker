

function addExpense(product,price) {
    const expenses = [];
    expense = {
        purpose:product,
        amount:price,
        date : new Date()
        }
    
    expenses.push(expense)
    console.log(expenses)

    return expenses
}
const users = {};
function addUniqueUsernameAndPassword(userName, password) {
    if (userName in users) {
        return "Username already exists";
    }
    users[userName] = {
        password: password,
        income: 0,
        expenses: []
    };
    console.log(users);
    return "User added successfully";
    
}

module.exports = addExpense;
module.exports = addUniqueUsernameAndPassword;
