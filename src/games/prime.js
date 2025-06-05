import randomNum from '../utils.js'
const isPrime = num => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}
export const rule = 'Answer 'yes' if given number is prime. Otherwise answer 'no'.';
export function getQuestAndAnswer() {
    const quest = randomNum()
    const answer = isPrime(quest) ? 'yes' : 'no'
    return [quest, answer]
}
