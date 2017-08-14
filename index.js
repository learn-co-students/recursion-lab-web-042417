// Code your solution here!
function printString (myString) {
  console.log(myString[0])
  if (myString.length > 1) {
    let mySubstring = myString.substring(1, myString.length)
    printString(mySubstring)
  } else {
    return true
  }
}

function reverseString (myString) {
  if (myString.length === 0) {
    return ''
  } else {
    return myString[myString.length - 1] +
      reverseString(myString.substring(0, myString.length - 1))
  }
}

function isPalindrome (myString) {
  if (myString.length === 1) {
    return true
  } else if (myString[0] !== myString[myString.length - 1]) {
    return false
  } else {
    return isPalindrome(myString.substring(1, myString.length - 1))
  }
}

function addUpTo (members, index) {
  if (index === 0) {
    return members[0]
  } else {
    return members[0] + addUpTo(members.slice(1, members.length), index - 1)
  }
}

function maxOf (members) {
  if (members.length === 1) {
    return members[0]
  } else {
    if (members[0] > members[members.length - 1]) {
      return maxOf(members.slice(0, members.length - 1))
    } else {
      return maxOf(members.slice(1, members.length))
    }
  }
}

function includesNumber (members, number) {
  if (members[0] === number) {
    return true
  } else {
    if (members.length === 1) {
      return false
    } else {
      return includesNumber(members.slice(1, members.length), number)
    }
  }
}
