import randomNum from '../utils.js';

const gameEven = (num) => num % 2 === 0     
export const rule = 'Answer "yes" if the number is even, otherwise answer "no".'
export function getQuestAndAnswer () {
    const quest = randomNum()
    const answer = gameEven(quest) ? 'yes' : 'no';
    return [quest, answer]
}