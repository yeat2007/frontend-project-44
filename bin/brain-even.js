import readlineSync from 'readline-sync';
import { hello }  from '../src/cli.js';

export function isEven(name){
    let counter = 0
    
    console.log('Answer \"yes\" if the number is even, otherwise answer \"no\".')
    while(counter<3){
        let num = Math.floor(Math.random() * 100);

        
        let cAnsver = ''
        if (num%2 === 0){
            cAnsver = 'yes'
        } 
        else{
            cAnsver = 'no'
        }

        console.log('Question: '+num)
        const answer = readlineSync.question('Your ansver: ');
    
        if (answer === cAnsver){
            counter +=1
            console.log('Correct!')
        } 
        else{
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${cAnsver}'.`)
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













