const fs = require('fs')
const path =require('path')
let input = process.argv.slice(2)
// console.log(input)  //nodejs treats commandline input as array

let command = input[0]

switch(command){
    case 'tree':
        treeFn();
        break;
    case 'organize':
        organizeFn(input[1]);
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

function organizeFn(dirPath){
    
    if (dirPath == undefined){
        console.log("Please enter a Directory Path")
        return;
    } else{
        let doseExist = fs.existsSync(dirPath)
        // console.log(doseExist)
        if(doseExist){
            destPath = path.join(dirPath, 'organized_files')

            if(fs.existsSync(destPath)==false){
                fs.mkdirSync(destPath)
            } else{
                console.log("The file path already exists")
            }

        }else{
            console.log("Please enter a valid path")
        }
    }

}

function helpFn(){
    console.log(`List of all commands - 
    1. Tree Command - node fo.js tree <dirName>
    2. Organize Command - node fo.js organise <dirName>
    3. Help Command - node fo.js help`)
}