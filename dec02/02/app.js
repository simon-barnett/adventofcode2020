var fs = require('fs')

const name = 'Simon'
var textLinesArray
var validPasswords = 0

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
    for (a = 0; a < textLinesArray.length; a++) {
        currentLine = textLinesArray[a].split(" ")
        lowerRange = parseInt(currentLine[0].split("-")[0], 10)
        upperRange = parseInt(currentLine[0].split("-")[1], 10)
        letter = currentLine[1].split(":")[0]
        password = currentLine[2]

        firstExtractedLetterFromPassword = password.slice(lowerRange-1,lowerRange)
        secondExtractedLetterFromPassword = password.slice(upperRange-1,upperRange)

        if ((firstExtractedLetterFromPassword == letter & !(secondExtractedLetterFromPassword == letter)) 
            || (!(firstExtractedLetterFromPassword == letter) & secondExtractedLetterFromPassword == letter)) {
            validPasswords ++ 
        }
    }
}

function outputPuzzleResult() {
    console.log(`Result = ` + validPasswords)
}
