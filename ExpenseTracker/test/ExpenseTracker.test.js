const addExpense = require("../ExpenseTrackerFunctions");


test ("add an expense", ()=>{
    expect(addExpense ("buy gala","500","2025-11-21  06:00")).toBe("Expenses added");
})