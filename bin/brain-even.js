import readlineSync from 'readline-sync';
import { hello }  from '../src/cli.js';

export function isEven(name){
    let counter = 0
    
    console.log('Answer \"yes\" if the number is even, otherwise answer \"no\".')
    while(counter<3){
        let num = Math.floor(Math.random() * 100);

        
        let cAnswer = ''
        if (num%2 === 0){
            cAnswer = 'yes'
        } 
        else{
            cAnswer = 'no'
        }

        console.log('Question: '+num)
        const answer = readlineSync.question('Your answer: ');
    
        if (answer === cAnswer){
            counter +=1
            console.log('Correct!')
        } 
        else{
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${cAnswer}'.`)
            console.log(`Let's try again, ${name}!`)    
            break
        }
    }
    
    if (counter >= 3){
        console.log(`Congratulations, ${name}!`)
            
    }
    
    
}

const name = hello()
isEven(name)













