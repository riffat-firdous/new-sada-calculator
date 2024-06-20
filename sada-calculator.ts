#! /usr/bin/env node

import inquirer from "inquirer"

const ans = await inquirer.prompt([{

    type: "number",
    name: "first_number",
    message:" Enter you first number:"

},
{
    type: "number",
    name: "Second_number",
    message:" Enter you Second number:"
},
{
 type: "list",
 name: "operator",
 message: "Please select operation type:",
 choices: ["Addintion","Subtaction","Multipilication","Division"]

}
]
)

if (ans.operator === "Addition"){

    console.log(ans.first + ans.Second_number);

}
else if (ans.operator === "Subtraction"){

    console.log(ans.first - ans.Second_number);
}
 else if (ans.operator === "multiplication"){

    console.log(ans.first * ans.Second_number);
 }
else if (ans.operator === "Subtraction"){
    
    console.log(ans.first / ans.Second_number); 

 }  