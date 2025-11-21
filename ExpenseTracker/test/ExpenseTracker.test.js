const addExpense = require("../src/ExpenseTrackerFunctions");


describe("Testing my add function function", ()=> {

    test ("add an expense", ()=>{
        expect(addExpense ("buy gala","500")).toBe("Expenses added");
    });

    test("test not to add expense when amount is negative", ()=> {

        expect(() => {
            addExpense("Buy gudi gudi", -500);
        }).toThrow();
    });


    test("Test to throw error when expense is empty or null", ()=> {

        expect(()=> {
            addExpense(" ", 500);
        }).toThrow();
    })
});






           