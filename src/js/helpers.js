import { selectElement, divTaskStartElement, divTaskProgressElement, divTaskDoneElement} from "./variables.js"

function buildTemplateTask({ title, description, time, user, id, status }) {
    return `
           <div class="task-container" data-id="${id}">
              <div class="task-wrapper">
                <div class="task-content">
                  <div class="task-header">
                      <span class="task-title task-text">${title}</span>
                      <span class="task-time task-text">${time}</span>
                  </div>
                  <span class="task-desc task-text">${description}</span>
                  <span class="task-user task-text">${user}</span>
                </div>
                <div class="task-buttons">
                  <button class="task-edit task-button" type='button'>Edit</button>
                  <button class="task-delete task-button" type="button" data-role="remove">Delete</button>
                  <select class="task-status-select" data-id="${id}">
                        <option value="start" ${status === 'start' ? 'selected' : ''}>Start</option>
                        <option value="progress" ${status === 'progress' ? 'selected' : ''}>Work</option>
                        <option value="done" ${status === 'done' ? 'selected' : ''}>Done</option>
                  </select>
                </div>
              </div>
            </div>
    `
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('No users found')
            }
            return response.json()
        })
        .then(users => {
            selectElement.innerHTML = '<option value="" disabled selected>User</option>'
            users.forEach(user => {
                const optionElement = document.createElement('option')
                optionElement.value = user.id
                optionElement.textContent = user.name
                selectElement.append(optionElement)
            })
        })
        .catch(error => console.error('Error loading users:', error))
}


// Render
function render(tasks = []) {
    divTaskStartElement.innerHTML = ''
    divTaskProgressElement.innerHTML = ''
    divTaskDoneElement.innerHTML = ''

    tasks.forEach(task => {
        const containerTask = document.querySelector(`#task-content__${task.status}`)
        if (containerTask) {
            containerTask.innerHTML += buildTemplateTask(task)
        }
    })
}

export {
    buildTemplateTask,
    loadUsers,
    render,
}