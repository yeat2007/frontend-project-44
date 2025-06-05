import randomNum from '../utils.js';

export const rule = 'What number is missing in the progression?';

export function getQuestAndAnswer() {
  const length = 10;
  const first = randomNum(1, 10); // начальное значение
  const step = randomNum(2, 5);   // шаг прогрессии
  const hiddenIndex = randomNum(0, length - 1); // индекс скрытого элемента

  const progression = [];

  for (let i = 0; i < length; i++) {
    progression.push(first + i * step);
  }

  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, answer];
}




