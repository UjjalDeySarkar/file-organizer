const fs = require('fs')
const path =require('path')
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
    organizeHelper(dirPath)
}

function organizeHelper(src, dest){
    let childName = fs.readdirSync(src)
    // console.log(childName)
    for(let i=0; i<childName.length ; i++){
        let childAddress = path.join(src, childName[i])
        let isFile = fs.lstatSync(childAddress).isFile()

        if(isFile){
                let fileCategory = getCategory(childName[i])
                console.log(childName[i]+" Belongs to "+fileCategory)
        }
    }
}

function getCategory(name){
    let ext = path.extname(name)
    // console.log(ext)
    ext = ext.slice(1)
    // console.log(ext)

    for (let type in types){
        let cTypeArr = types[type]
        // console.log(cTypeArr)

        for (let i=0; i<cTypeArr.length; i++){
            if(ext == cTypeArr[i]){
                return type
            }
        }

    }
}


function helpFn(){
    console.log(`List of all commands - 
    1. Tree Command - node fo.js tree <dirName>
    2. Organize Command - node fo.js organise <dirName>
    3. Help Command - node fo.js help`)
}