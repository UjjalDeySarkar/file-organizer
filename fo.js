const fs = require('fs')
const path =require('path')
const helpObj = require('./commands/help')
const treeObj = require('./commands/tree')
const organizeObj = require('./commands/organize')
let input = process.argv.slice(2)
// console.log(input)  //nodejs treats commandline input as array

let command = input[0]

let types = {
    media : ['mp4', 'mkv', 'mp3'],
    archives : ['zip', 'rar', 'iso'],
    documents : ['pdf', 'txt'],
    app : ['exe', 'pkg', 'dmg', 'deb'],
    image : ['jpg', 'jpeg', 'png', 'bmp']
}

switch(command){
    case 'tree':
        treeObj.treeFnKey(input[1])
        break;
    case 'organize':
        organizeObj.organizeFnFnKey(input[1])
        break;
    case 'help':
        helpObj.helpFnKey()
        break;
    default:
        console.log('Please enter a valid command')
}


