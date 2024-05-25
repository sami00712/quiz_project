#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red.bold("\t<======================================================>"));
console.log(chalk.green.bold("\t \t <=====> Best Of Luck For Quiz <=====>"));
console.log(chalk.red.bold("\t<======================================================>"));
const quiz = await inquirer.prompt([
    {
        name: "Question_1",
        message: "Q1- Which of the following is valid command to compile typescript file?",
        type: "list",
        choices: ["a. ts abc.ts", "b. t abc.ts", "c. tsc abc.ts", "d. tst abc.ts"]
    },
    {
        name: "Question_2",
        message: "Q2- What is TypeScript primarily used for?",
        type: "list",
        choices: ["a. Memory Management", "b. Dynamic Typing", "c. Static Typing", "d. Asynchronous operations"]
    },
    {
        name: "Question_3",
        message: "Q3- When Typescript was introduced?",
        type: "list",
        choices: ["a. 2012", "b. 2013", "c. 2014", "d. 2015"]
    },
    {
        name: "Question_4",
        message: "Q4- Typescript introduced by?",
        type: "list",
        choices: ["a. Google", "b. Facebook", "c. Microsoft", "d. Meta"]
    },
    {
        name: "Question_5",
        message: "Q5- What is the command of tsconfig.json?",
        type: "list",
        choices: ["a. tsc init--", "b. tc init--", "c. tcs-- init", "d. tsc --init"]
    }
]);
let score = 0;
switch (quiz.Question_1) {
    case "c. tsc abc.ts":
        console.log(chalk.blueBright.bold("1. Correct !!!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright.italic("1. Incorrect"));
}
switch (quiz.Question_2) {
    case "c. Static Typing":
        console.log(chalk.blueBright.bold("2. Correct !!!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright.italic("2. Incorrect"));
}
switch (quiz.Question_3) {
    case "a. 2012":
        console.log(chalk.blueBright.bold("3. Correct !!!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright.italic("3. Incorrect"));
}
switch (quiz.Question_4) {
    case "c. Microsoft":
        console.log(chalk.blueBright.bold("4. Correct !!!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright.italic("4. Incorrect"));
}
switch (quiz.Question_5) {
    case "d. tsc --init":
        console.log(chalk.blueBright.bold("5. Correct !!!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright.italic("5. Incorrect"));
}
console.log(chalk.redBright.bold("\n----------------------"));
console.log(chalk.greenBright.bold(`Your Score = ${score} out of 5.`));
console.log(chalk.redBright.bold("----------------------"));
