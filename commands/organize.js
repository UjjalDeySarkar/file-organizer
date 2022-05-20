const fs = require('fs')
const path =require('path')

function organizeFn(dirPath) {

    if (dirPath == undefined) {
        console.log("Please enter a Directory Path")
        return;
    } else {
        let doseExist = fs.existsSync(dirPath)
        // console.log(doseExist)
        if (doseExist) {
            destPath = path.join(dirPath, 'organized_files')

            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath)
            } else {
                console.log("The file path already exists")
            }

        } else {
            console.log("Please enter a valid path")
        }
    }
    organizeHelper(dirPath, destPath)
}

function organizeHelper(src, dest) {
    let childName = fs.readdirSync(src)
    // console.log(childName)
    for (let i = 0; i < childName.length; i++) {
        let childAddress = path.join(src, childName[i])
        let isFile = fs.lstatSync(childAddress).isFile()

        if (isFile) {
            let fileCategory = getCategory(childName[i])
            // console.log(childName[i]+" Belongs to "+fileCategory)

            sendFiles(childAddress, dest, fileCategory)
        }
    }
}

function getCategory(name) {
    let ext = path.extname(name)
    // console.log(ext)
    ext = ext.slice(1)
    // console.log(ext)

    for (let type in types) {
        let cTypeArr = types[type]
        // console.log(cTypeArr)

        for (let i = 0; i < cTypeArr.length; i++) {
            if (ext == cTypeArr[i]) {
                return type
            }
        }

    }
    return "others"
}



function sendFiles(scrfilePath, dest, fileCategory) {
    let catPath = path.join(dest, fileCategory)

    if (fs.existsSync(catPath) == false) {
        fs.mkdirSync(catPath)
    }

    let fileName = path.basename(scrfilePath)
    let destFilePath = path.join(catPath, fileName)
    fs.copyFileSync(scrfilePath, destFilePath)

    fs.unlinkSync(scrfilePath)

    console.log(fileName + " Copyed to " + fileCategory)
}

module.exports = {
    organizeFnFnKey: organizeFn
}