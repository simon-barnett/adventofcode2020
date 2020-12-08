var fs = require('fs')

const name = 'Simon'
var textLinesArray
var arraySize
var sumToFind = 2020
var result

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
    textLinesArray = fs.readFileSync('./resources/puzzleInput.txt').toString().split('\n').map(function(i){
        return parseInt(i, 10);
    })
}

function calculatePuzzleResult() {
    arraySize = textLinesArray.length

    calculateThenBreak:
    for (x = 0; x < arraySize; x++) {
        for (y = 0; y < arraySize; y++) {
            if (textLinesArray[x] + textLinesArray[y] == sumToFind) {
                result = textLinesArray[x] * textLinesArray[y]
                break calculateThenBreak
            }
        }
    }

}

function outputPuzzleResult() {
    console.log(`Result = ` + result)
}
