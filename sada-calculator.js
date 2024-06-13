import inquirer from "inquirer";
//printing a Welcome Message
console.log("\n \t Wellcom To \`Code With Riffat\` Sada-Calculator\n");
//Asking Question from User through Inquirer
let answer = await inquirer.prompt([
    { message: " Enter First Number", type: "number", name: "firstNumber" },
    { message: " Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one operator to perform Operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Condtional Statements if-Else
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invalid Input");
}
