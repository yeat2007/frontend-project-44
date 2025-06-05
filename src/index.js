import readlineSync from 'readline-sync'
import hello from '../src/cli.js'
export default function gameRounds(getQuestAndAnswer, rules) {
  console.log(rules)
  const name = hello()
  let cAnswersCount = 0
  const rounds = 3
  while (cAnswersCount < rounds) {
    const [quest, cAnswer] = getQuestAndAnswer()
    console.log(`Question: ${quest}`)
  const userAnswer = readlineSync.question('Your answer: ')
    if (cAnswer === userAnswer) {
      console.log('Correct!')
      cAnswersCount += 1
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${cAnswer}.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
