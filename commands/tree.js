const fs = require('fs')
const path =require('path')

function treeFn(dirPath) {
    if (dirPath == undefined) {
        console.log("Please enter a valid Path")
    } else {
        let doseExist = fs.existsSync(dirPath)
        if (doseExist) {
            treeHelper(dirPath, " ")
        }
    }
}

function treeHelper(dirPath, indent) {
    let isFile = fs.lstatSync(dirPath).isFile()
    if (isFile) {
        let fileName = path.basename(dirPath)
        console.log(indent + " |-- " + fileName)
    } else {
        let dirName = path.basename(dirPath)
        console.log(indent + " |-- " + dirName)
        let children = fs.readdirSync(dirPath)
        for (let i = 0; i < children.length; i++) {
            let childrenPath = path.join(dirPath, children[i])
            treeHelper(childrenPath, indent + '\t')

        }
    }
}

module.exports = {
    treeFnKey: treeFn
}