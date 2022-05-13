const addButton = document.getElementsByClassName('button')[0]
const inputs = document.getElementsByTagName('input')
const input = document.getElementById('new-item')
const itemsList = document.getElementsByClassName('items')

addButton.addEventListener('click', () => {
  if (input.value !== '') {
    const newItem = document.createElement('input')
    newItem.setAttribute('type', 'checkbox')
    newItem.setAttribute('id', `item${inputs.length}`)

    const newLabel = document.createElement('label')
    newLabel.setAttribute('for', `item${inputs.length}`)
    newLabel.innerText = input.value

    itemsList[0].appendChild(newItem)
    itemsList[0].appendChild(newLabel)

    input.value = ''

    const updatedTodo = JSON.parse(localStorage.getItem('todo')) || []
    updatedTodo.push(input.value)
    localStorage.setItem('todo', JSON.stringify(updatedTodo))
  }
})
