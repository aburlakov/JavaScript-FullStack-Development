function startsWith (input) {
  let [text, substring] = [input[0], input[1]]
  if (text.startsWith(substring)) {
    console.log(true)
  } else {
    console.log(false)
  }
}

startsWith(['How have you been', 'how'])
