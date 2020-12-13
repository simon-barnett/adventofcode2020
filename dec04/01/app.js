var fs = require("fs")

const name = "Simon"
var puzzleArray
var currentLineArray
var validPassports = 0

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
  return (
    dateTime.getDate() +
    "/" +
    dateTime.getMonth() +
    "/" +
    dateTime.getFullYear() +
    " " +
    dateTime.getHours() +
    ":" +
    dateTime.getMinutes() +
    ":" +
    dateTime.getSeconds() +
    "." +
    dateTime.getMilliseconds()
  )
}

function readPuzzleInput() {
  puzzleArray = fs
    .readFileSync("./resources/puzzleInput.txt")
    .toString()
    .split("\n\n")
}

function calculatePuzzleResult() {
  for (i = 0; i < puzzleArray.length; i++) {
    currentLineArray = puzzleArray[i].replace(/\n/g, " ").split(" ")

    tally = 0

    for (x = 0; x < currentLineArray.length; x++) {
      fieldArray = currentLineArray[x].split(":")

      switch (fieldArray[0]) {
        case "ecl":
          tally++
          break
        case "pid":
          tally++
          break
        case "eyr":
          tally++
          break
        case "hcl":
          tally++
          break
        case "byr":
          tally++
          break
        case "iyr":
          tally++
          break
        case "hgt":
          tally++
          break
        case "cid":
          //optional field
          break
      }
    }

    if (tally == 7) {
      validPassports++
    }
  }

  console.log("Valid passports = " + validPassports)
}
