const result = document.querySelector('#result')
const first = document.querySelector('.red')
// criar elemento vazio

const bodyDiv = document.createElement('div')

// criar text node

const text = document.createTextNode('a simple body div')
bodyDiv.appendChild(text)
document.body.insertBefore(bodyDiv, result)
// result element
const heading = document.createElement('h2')
const headingText = document.createTextNode('dynamic heading')
heading.appendChild(headingText)
heading.classList.add('blue')

result.insertBefore(heading, first)

console.log(result.children)
