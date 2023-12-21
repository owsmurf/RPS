/* eslint-disable import/no-extraneous-dependencies */
import readlineSync from 'readline-sync';

const choices = ['камень', 'ножницы', 'бумага'];

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Ничья!';
  } if (
    (userChoice === 'камень' && computerChoice === 'ножницы')
    || (userChoice === 'ножницы' && computerChoice === 'бумага')
    || (userChoice === 'бумага' && computerChoice === 'камень')
  ) {
    return `Вы победили! ${userChoice} ломает ${computerChoice}.`;
  }
  return `Компьютер победил! ${computerChoice} покрывает ${userChoice}.`;
}

function playGame(round) {
  if (round > 3) {
    return;
  }

  console.log(`Раунд ${round}\n`);
  console.log('Выберите вашу фигуру:');
  console.log('1. Камень');
  console.log('2. Ножницы');
  console.log('3. Бумага\n');

  const userChoiceIndex = readlineSync.questionInt('Ваш выбор: ');
  const userChoice = choices[userChoiceIndex - 1];

  console.log(`Вы выбрали: ${userChoice}\n`);

  const computerChoice = getRandomChoice();
  console.log(`Компьютер выбирает: ${computerChoice}\n`);

  const result = determineWinner(userChoice, computerChoice);
  console.log(`Результат: ${result}\n`);

  console.log('-------------------------\n');

  playGame(round + 1);
}

console.log("Добро пожаловать в игру 'Камень, Ножницы, Бумага'!\n");
playGame(1);
