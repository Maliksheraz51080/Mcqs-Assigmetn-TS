import inquirer from "inquirer";
import chalk from "chalk";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";

let quizdata = [
    {
        question: '1.USA’s second biggest city is ____________?',
        Option :["A. Seattle"," B. Atlanta"," C. Newyork city","D. Los Angeles"],
        answer : "D. Los Angeles",
    },
    {
        question :"2.World Jump Day celebrated on: _____________?",
        Option :["A. 20 July","B. 21 July"," C. 22 July","D. 23 July"],
        answer :"A. 20 July",
    },
    {
        question :"3.Top _______ highest mountains in the world are collectively called as ‘The Eight-thousanders’?",
        Option :["A. 10","B. 12","C. 14","D. 16"],
        answer :"C. 14",
    },
    {
        question :"4.Bali is an Indonesian Island which is a _________ Island.",
        Option :["A. Muslim","B. Jewish","C. Buddhist","D. Hindu"],
        answer :"D. Hindu",
    },
    {
        question :"5.Who is the longest serving ruler of Indonesia?",
        Option :["A. General Suharto","B. Joko Widodo","C. Sukamo","D. None of These"],
        answer :"A. General Suharto",
    },
    {
        question :"6.On the basis of Composition , An International Organization named as ” G-20″ consists of _________?",
        Option :["A. 19 Countries + Common Wealth of Nations","B. 19 Countries + European Union","C. 19 Countries + NATO","D. None of these"],
        answer :"B. 19 Countries + European Union",
    },
    {
        question :"7.There are only __________ mountains in the world which are over 8000m/26,247ft above sea level.",
        Option :["A. 20","B. 18","C. 16","D. 14"],
        answer :"D. 14",
    },
    {
        question :"8.sUPARCO was founded in __________?",
        Option :["A. 1961","B. 1963","C. 1962","D. None of these"],
        answer :"A. 1961",
    },
    {
        question :"9.OSS (Office of Strategic Services) is the old name of which secret agency_________?",
        Option :["A. FIA","B. CIA","C. RAW","D. ISI"],
        answer :"B. CIA",
    },
    {
        question :"10,Rome is the capital of Italy is located on the river_________?",
        Option :["A. Danube","B. Rhine","C. Tiber","D. Po"],
        answer :"C. Tiber",
    },
]
    let score = 0;
    function startQuiz(){
        console.log("welcome to the quiz app");
        askQuestion(0);
        
    }
    function askQuestion (questionIndex:number) 
    {
            if (questionIndex >= quizdata.length)
            {
            endquiz();
            return
            }
            let currentQuestion = quizdata[questionIndex];
            inquirer.prompt([
                {
                    name  : "useranswer",
                    type : "list",
                    message : currentQuestion.question,
                    choices : currentQuestion.Option,

                },
            ])
        .then(answer =>{
            let Useranswer = answer.useranswer;
            if (Useranswer == currentQuestion.answer){
                console.log(chalk.bgGreen.white(`your Answer is correct `));
                score++;
            }else{
                console.log(chalk.bgRed.white(`incorrect`))
                console.log(`the correct answer is ${currentQuestion.answer}`);
                
            }
            askQuestion(questionIndex + 1);
        } )    
    } 
    function endquiz (){
        console.log(chalk.bgWhite.black.italic.bold("RESULT"));
        
        console.log(`your total score is ${score} out of ${quizdata.length}`);
        
    }

    startQuiz();
