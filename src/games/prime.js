import randomNum from '../utils.js';


function Prime(number) {
    if (number < 2){
        return "no";
    } 
    for (let i =2; i < number / 2; i += 1){
        if (number % i ===0) return "no";
    }
    return "yes";
}



export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export function getQuestAndAnswer() {

    const number = randomNum()
    const quest = number
    const answer = Prime(number)
    return[quest, answer]
}