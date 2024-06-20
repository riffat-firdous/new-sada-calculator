#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var ans = await inquirer_1.default.prompt([{
        type: "number",
        name: "first_number",
        message: " Enter you first number:"
    },
    {
        type: "number",
        name: "Second_number",
        message: " Enter you Second number:"
    },
    {
        type: "list",
        name: "operator",
        message: "Please select operation type:",
        choices: ["Addintion", "Subtaction", "Multipilication", "Division"]
    }
]);
if (ans.operator === "Addition") {
    console.log(ans.first + ans.Second_number);
}
else if (ans.operator === "Subtraction") {
    console.log(ans.first - ans.Second_number);
}
else if (ans.operator === "multiplication") {
    console.log(ans.first * ans.Second_number);
}
else if (ans.operator === "Subtraction") {
    console.log(ans.first / ans.Second_number);
}
