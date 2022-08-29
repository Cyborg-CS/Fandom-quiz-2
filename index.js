const readlineSync = require("readline-sync");
const chalk = require('chalk');



var score = 0;

console.log(chalk.red.bold.underline(">:< WELCOME TO THE NETFLIX FANDOM QUIZ >:<"))

var userName = readlineSync.question("\nWho we got here ?\n ", {
  hideEchoBack: true
});
console.log(chalk.magenta.bold("Guess you are in the right place, ") +
  chalk.underline.yellow(userName) + ("!"));


if (readlineSync.keyInYN("Wanna test your Netflix knowledge ? \n If yes press 'Y' ")) {
  console.log(chalk.red.bold("Let's play ! First question coming up - "));
  console.log(chalk.red.bold("Answer by typing 'A'/'B'/'C'/'D' according to your knowledge"));
} else {
  console.log("Till next time then ! ");
  process.exit(1)
}


function play(question, answer) {

  var userAnswer = readlineSync.question(question)

  if (userAnswer === answer) {
    console.log(chalk.green.bold("Bingoo ! "))
    score = score + 1;
  } else {
    console.log(chalk.red.bold("Not quite right... "))
    score = score - 1;
  }
  console.log(("Score: ") + chalk.cyan.bold(score));
  console.log("----------------");
}

questionList = [
  {
    question: "1.What type of drugs Walter & Jesse were producing in the series of Breaking Bad ?) \nA: Cocaine \nB: Marijuana \nC: Crystal Meth \nD: Heroin \nYour Answer: ",
    answer: "C"
  }, {
    question: "2.According to the show Lucifer, what was the Celestial name of Lucifer ? \nA: Samael \nB: Atlas \nC: Nova \nD: Orion \nYour Answer: ",
    answer: "A"
  }, {
    question: "3.From which political party did Tommy Shelby won the elcetion for MP seat in the series of Peaky Blinders ? \nA: Conservative Party \nB: Communist Party of Britain \nC: Labour Party \nD: Liberal Party \nYour Answer: ",
    answer: "C"
  }, {
    question: "4.In the series of 'YOU', who killed Love's brother Forty Quinn ? \nA: Joe \nB: Officer David Fincher \nC: Candis \nD: None \nYour Answer: ",
    answer: "B"
  }, {
    question: "5.How many timelines are actually shown in the series Dark ? \nA: 3 \nB: 2 \nC: 7 \nD: 5 \nYour Answer: ",
    answer: "D"
  }, {
    question: "6.Who played the character 'El Professor' in the series of Money Heist ? \nA: Alvaro Morte \nB: Miguel Angel Silvestre \nC: Mario Casas \nD: Mark Consuelos \nYour Answer: ",
    answer: "A"
  }, {
    question: "7.Who were making a secret base under the super market in Stranger Things Season-3 ? \nA: Chinese \nB: Russians \nC: British \nD: Germans \nYour Answer: ",
    answer: "B"
  }, {
    question: "8.What was the third game for the players of Squid Game ? \nA: Marbel Game \nB: Pass the glass bridge \nC: Squid Game \nD: Tug of war \nYour Answer: ",
    answer: "D"
  }, {
    question: "9.Where 'Any Where' key was found in the series of Locke & Key ? \nA: In the Chamberlin Locke's potrait \nB: Underneath a bench of Matheson Academy \nC: From Kinsey's bracelet \nD: Inside Erin's mind \nYour Answer: ",
    answer: "A"
  }, {
    question: "10.In which year Netflix was founded ? \nA: 1993 \nB: 1997 \nC: 1996 \nD: 1995 \nYour Answer: ",
    answer: "B"
  }
]


for (i = 0; i < questionList.length; i++) {
  var currentQuestion = questionList[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Your Final Score: " + chalk.red.bold(score))

if (score === 10) {
  console.log(chalk.yellow.underline("PERFECT ! YOU ARE OFFICIALLY A NETFLIX NERD FROM NOW ON"))
} else {
  console.log(chalk.red.bold("NEARLY, PERFECTION ! "))
}

var highScores = [
  {
    name: "Mainak",
    score: 10
  }, {
    name: "Sandy",
    score: 8
  }
]

console.log(chalk.blue.underline("\nHIGHEST SCORER'S :-"));
for (i = 0; i < highScores.length; i++) {
  var currentScorer = highScores[i];
  console.log(currentScorer.name, chalk.magenta.underline.bold("Score- ") + currentScorer.score);
}

