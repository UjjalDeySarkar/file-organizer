let input = process.argv.slice(2)
// console.log(input)  //nodejs treats commandline input as array

let command = input[0]

switch(command){
    case 'tree':
        treeFn();
        break;
    case 'organize':
        organizeFn();
        break;
    case 'help':
        helpFn();
        break;
    default:
        console.log('Please enter a valid command')
}

function treeFn(){
console.log("tree fn implemented")
}

function organizeFn(){
    console.log("organize fn implemented")
}

function helpFn(){
    console.log(`List of all commands - 
    1. Tree Command - node fo.js tree <dirName>
    2. Organize Command - node fo.js organise <dirName>
    3. Help Command - node fo.js help`)
}