import randomNum from '../utils.js'
const getCount = (randomNum, operator, randomNum2) => {
  switch (operator) {
    case '+':
      return randomNum + randomNum2
    case '*':
      return randomNum * randomNum2
    case '-':
      return randomNum - randomNum2
    default: return 'Error'
  }
}
export const rule = 'What is the result of the expression?'
export const getQuestAndAnswer = () => {
  const point = ['+', '-', '*']
  const randomPoint = Math.floor(Math.random() * 3)
  const randomOperator = point[randomPoint]
  const num1 = randomNum()
  const num2 = randomNum()
  const quest = `Question: ${num1} ${randomOperator} ${num2}`
  const answer = String(getCount(num1, randomOperator, num2))
  return [quest, answer]
}
