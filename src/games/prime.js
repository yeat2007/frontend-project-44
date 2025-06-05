import randomNum from '../utils.js'
const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}
export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'
export function getQuestAndAnswer() {
  const num = randomNum()
  const answer = isPrime(num) ? 'yes' : 'no'
  return [String(num), answer]
}
