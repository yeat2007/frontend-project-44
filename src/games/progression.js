import randomNum from '../utils.js';



export const rule = 'What number is missing in the progression?';
export function getQuestAndAnswer() {
    const start = randomNum()
    const process = randomNum()
    const quest= [start];

    const progressionLength = 9
    for (let i = 1; i<= progressionLength; i+=1){
        quest[i] = quest[i-1] + process


    }
    const index = randomNum()
    const answer = String(quest[index])
    const progressionGap = [...quest];
    progressionGap[index] = '..'
    return [progressionGap.join(' '), answer];
  }








