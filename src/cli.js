import readlineSync from 'readline-sync';


export function hello(){
    console.log('Welcome to the Brain Games!')

    const name = readlineSync.question('Your answer: ');

    console.log('Hello, ' + name + '!')
}