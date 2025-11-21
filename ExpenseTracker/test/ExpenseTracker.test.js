const {RemoveExpense,addExpense} = require("../src/ExpenseTrackerFunctions")


test ("add an expense",()=>{
    expect(addExpense("buy gala","500")).toBe("Expenses added");
})

describe("Test RemoveExpense function",()=>{

    test("test that RemoveExpenses returns expense susccesfully removed",()=>{
        addExpense("beans","1700")
        addExpense("rice","200")
        
        expect(RemoveExpense("beans")).toBe("EXPENSE SUCCESSFULLY REMOVED!")   

    })


    test("test that product input is wrong or not located in the expenses",()=>{
        addExpense("maize","1599")
        addExpense("beans","1300")
        
        expect(RemoveExpense("tomatoes")).toBe("INVALID INPUT!")   
    })

})