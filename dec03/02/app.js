var fs = require('fs')

const name = 'Simon'
var puzzleArray
var treesFound = 0
var multiplier = 0
var routes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]

startTimeStamp()
readPuzzleInput()
calculatePuzzleResult()
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
    puzzleArray = fs.readFileSync('./resources/puzzleInput.txt').toString().split('\n')
}

function calculatePuzzleResult() {
    maxWidth = puzzleArray[0].length
    
    for (a = 0; a < routes.length; a++) {
        x = routes[a][0]   
        y = routes[a][1]
        newY = y
        newX = x + 1
        treesFound = 0

        for (b=0; b < puzzleArray.length; b++) {
            if (b == newY) {
                    if (newX > maxWidth) {
                        newX = Math.abs(maxWidth - newX)
                    }
                    if (puzzleArray[newY].slice(newX-1, newX) == "#") {
                        treesFound ++
                    }   
                    newX = newX + x
                    newY = newY + y
            }
        }

        if(multiplier == 0) {
            multiplier = treesFound
        } else {
            multiplier = multiplier * treesFound
        }

        console.log(`Trees found per route = ` + treesFound)
    }
    console.log(`Tree results multiplied = ` + multiplier) 
}
