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
          tally += validateEyeColour(fieldArray[1])
          break
        case "pid":
          tally += validatePassportId(fieldArray[1])
          break
        case "eyr":
          tally += validateExpirationYear(fieldArray[1])
          break
        case "hcl":
          tally += validateHairColour(fieldArray[1])
          break
        case "byr":
          tally += validateBirthYear(fieldArray[1])
          break
        case "iyr":
          tally += validateIssueYear(fieldArray[1])
          break
        case "hgt":
          tally += validateHeight(fieldArray[1])
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

function validateEyeColour(str) {
  count = 0
  switch (str) {
    case "amb":
      count++
      break
    case "blu":
      count++
      break
    case "brn":
      count++
      break
    case "gry":
      count++
      break
    case "grn":
      count++
      break
    case "hzl":
      count++
      break
    case "oth":
      count++
      break
  }
  return count
}

function validatePassportId(id) {
  if (id.length == 9 && !isNaN(id)) {
    return 1
  }
}

function validateExpirationYear(year) {
  yearNum = Number.parseInt(year)
  if (yearNum >= 2020 && yearNum <= 2030) {
    return 1
  }
}

function validateHairColour(str) {
  if (str.match(/^#[0-9a-f]{6}$/)) {
    return 1
  }
}

function validateBirthYear(year) {
  yearNum = Number.parseInt(year)
  if (yearNum >= 1920 && yearNum <= 2002) {
    return 1
  }
}

function validateIssueYear(year) {
  yearNum = Number.parseInt(year)
  if (yearNum >= 2010 && yearNum <= 2020) {
    return 1
  }
}

function validateHeight(height) {
  heightNum = Number.parseInt(height)
  if (height.match(/^[0-9]+(cm)$/) && heightNum >= 150 && heightNum <= 193) {
    return 1
  } else if (
    height.match(/^[0-9]+(in)$/) &&
    heightNum >= 59 &&
    heightNum <= 76
  ) {
    return 1
  }
}
