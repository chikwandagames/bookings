
// let myEll = document.getElementById("myParagraph")
// myEll.classList.add("redText")

document.getElementById('colorButton').addEventListener('click', () => {
  let myEl = document.getElementById('myParagraph')

  if (myEl.classList.contains("redText")) {
    myEl.classList.remove("redText")
    return
  }
  myEl.classList.add('redText')
  console.log('JavaScript running')
})
