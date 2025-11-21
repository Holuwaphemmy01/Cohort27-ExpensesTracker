const {addExpense, showAllExpense} = require("../src/ExpenseTrackerFunctions");


test ("add an expense", ()=>{
    expect(addExpense ("buy gala","500","2025-11-21  06:00")).toBe("Expenses added");
})

test ("return expense list is empty", ()=>{
    const expenses = []
    expect(showAllExpense(expenses)).toEqual("No expense added");
});

test("returns list of all expenses", () => {
  const expenses = [
    { purpose: "Coffee", amount: 2.5 },
    { purpose: "Book", amount: 10 }
  ];
    expect(showAllExpense(expenses)).toEqual([
    "1. Coffee - $2.5",
    "2. Book - $10"
  ]);

});