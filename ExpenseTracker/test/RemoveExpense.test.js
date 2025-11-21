const RemoveExpense = require("../src/RemoveExpense")
describe("Test RemoveExpense function",()=>{

    test("test that RemoveExpense is empty",()=>{
        expenses =[]
        expect(RemoveExpense("beans",expenses)).toBe("EXPENSES IS EMPTY!")
    })

    test("test that RemoveExpenses returns expense susccesfully removed",()=>{
        expenses =[{
            purpose:"beans",
            amount:"1500",
            date : new Date()
        },
        {
            purpose:"rice",
            amount:"100",
            date : new Date()
        },
        {
            purpose:"yam",
            amount:"3000",
            date : new Date()
        },
        ]
        
        expect(RemoveExpense("beans",expenses)).toBe("EXPENSE SUCCESSFULLY REMOVED!")   

    })


    test("test that product input is wrong or not located in the expenses",()=>{
         expenses =[{
            purpose:"beans",
            amount:"1500",
            date : new Date()
        },
        {
            purpose:"rice",
            amount:"100",
            date : new Date()
        },
        {
            purpose:"yam",
            amount:"3000",
            date : new Date()
        },
        ]
        
        expect(RemoveExpense("tomatoes",expenses)).toBe("INVALID INPUT!")   
    })

})