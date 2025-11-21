const addExpense = require("../src/ExpenseTrackerFunctions");


test ("add an expense", ()=>{
    expect(addExpense ("buy gala","500","2025-11-21  06:00")).toBe("Expenses added");
})

const addUniqueUsernameAndPassword = require("../src/ExpenseTrackerFunctions");

test ("add a unique username and password", ()=>{
    expect(addUniqueUsernameAndPassword ("john_doe","password123")).toBe("User added successfully");
})

test ("add a duplicate username", ()=>{
    addUniqueUsernameAndPassword ("jane_doe","password456");
    expect(addUniqueUsernameAndPassword ("jane_doe","newpassword789")).toBe("Username already exists");
});