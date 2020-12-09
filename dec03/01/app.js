var fs = require('fs')

const name = 'Simon'
var textLinesArray
var currentWidth = 1
var treesFound = 0

startTimeStamp()
readPuzzleInput()
calculatePuzzleResult()
outputPuzzleResult()
endTimeStamp()

function startTimeStamp() {
    timeStamp = Date.now()
    dateTime = new Date(timeStamp)
    console.log(`OK ${name}, let's win some stars!`)
    console.log(`Start date/time: ` + dateTimeToString(dateTime))
}

function endTimeStamp() {
    timeStamp = Date.now()
    dateTime = new Date(timeStamp)
    console.log(`End date/time: ` + dateTimeToString(dateTime))
}

function dateTimeToString(dateTime) {
    return dateTime.getDate() + "/" + dateTime.getMonth() + "/" + dateTime.getFullYear() + " " + dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds() + "." + dateTime.getMilliseconds()
}

function readPuzzleInput() {
    textLinesArray = fs.readFileSync('./resources/puzzleInput.txt').toString().split('\n')
}

function calculatePuzzleResult() {
    generateNewMap()
    checkForTrees()
}

function generateNewMap() {
    for (i = 0; i < textLinesArray.length; i++) {
        currentString = textLinesArray[i]
        for (x = 0; x < textLinesArray.length; x++) {
            textLinesArray[i] = textLinesArray[i] + currentString
        }
    }
}

function checkForTrees() {
    for (i = 0; i < textLinesArray.length; i++) {        
        if (textLinesArray[i].slice(currentWidth-1, currentWidth) == "#") {
            treesFound ++
        }
        calculateNewPosition() 
    }
}

function calculateNewPosition() {
    currentWidth = currentWidth + 3
}

function outputPuzzleResult() {
    console.log(`Result = ` + treesFound)
}
