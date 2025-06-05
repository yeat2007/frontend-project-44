import randomNum from '../utils.js'
const gcd = (num, num2) => {
    if (num < num2){
        return gcd(num2, num)
    }
    if (!num2) {
        return String(num)
    }
    return gcd(num2, num % num2);
}
export const rule = 'Find the greatest common divisor of given numbers.';э
export function getQuestAndAnswer() {
  const num = randomNum()
  const num2 = randomNum()
  const quest = [num, num2].join(' ')
  const answer = gcd(num, num2)
  return [quest, answer]
}
