expenses = []
function RemoveExpense(product){
    if(expenses.length == 0){
        return "EXPENSES IS EMPTY!"
    }
    for(let count = 0; count < expenses.length; count++){
        if(expenses[count]["purpose"]== product){
            expenses.splice(count,1)
            return "EXPENSE SUCCESSFULLY REMOVED!"
        } 
    }
    return "INVALID INPUT!"

}

module.exports = RemoveExpense