let data = [
  {
    title: 'Create a to do list',
    completed: true,
  },
  {
    title: 'Take out the trash',
    completed: false,
  },
  {
    title: 'Learn something new',
    completed: false,
  },
  {
    title: 'Feed my dog',
    completed: false,
  },
  {
    title: 'Homework',
    completed: false,
  },
  {
    title: 'Remind someone about something',
    completed: false,
  },
]
localStorage.setItem('todo', JSON.stringify(data))

const addButton = document.getElementsByClassName('button')[0]
const inputs = document.getElementsByTagName('input')
const input = document.getElementById('new-item')
const itemsList = document.getElementsByClassName('items')
const checkboxes = document.querySelectorAll('input[type=checkbox]')

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

    const updatedTodo = JSON.parse(localStorage.getItem('todo')) || []
    updatedTodo.push({ title: input.value, completed: false })
    localStorage.setItem('todo', JSON.stringify(updatedTodo))

    input.value = ''
  }
})

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    const updatedTodo = JSON.parse(localStorage.getItem('todo')) || []
    const index = updatedTodo.findIndex(
      item => item.title === checkbox.nextElementSibling.innerText
    )
    updatedTodo[index].completed = checkbox.checked
    localStorage.setItem('todo', JSON.stringify(updatedTodo))
  })
})
