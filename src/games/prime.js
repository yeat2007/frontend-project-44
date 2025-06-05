import randomNum from '../utils.js';


const isPrime =(num) =>{
    if (num < 2){
        return "no";
    } 
    for (let i =2; i < num / 2; i += 1){
        if (num % i ===0) return "no";
    }
    return "yes";
}



export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export function getQuestAndAnswer() {

    const quest = randomNum()
    const answer = isPrime(quest) ? "yes" : "no";
    return[quest, answer]
}