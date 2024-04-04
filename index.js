#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//initialize user balance and pin code
let myBalance = 5000;
let myPin = 1234;
//pin welcome message
console.log(chalk.red("welcome to code with Sadia-ATM Machine."));
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: chalk.green("Enter your pin code:"),
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.yellow("Pin is correct,login successfully."));
    //console.log("current Account Balance is ${myBalance}")
}
let opertionAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "select on operation:",
        choices: ["withdraw Amount", "check Balance"],
    },
]);
if (opertionAns.operation === "withdraw Amount") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: chalk.white("Enter the amount to withdraw:"),
        },
    ]);
    if (amountAns.amount > myBalance) {
        console.log("Insufficient Balance");
    }
    else {
        myBalance -= amountAns.amount;
        console.log(` ${amountAns.amount}withdraw successfully`);
        console.log(chalk.blue(`your Remaining Balance is: ${myBalance}`));
    }
}
else if (opertionAns.operation === "check Balance") {
    console.log(chalk.gray(`your account Balance is: ${myBalance}`));
}
else {
    console.log(chalk.red("Pin is incarrect,Try Again!"));
}
