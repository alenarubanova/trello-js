import { state } from './main.js'
import { modalViewElement, modalOverlayElement, modalAddElement, inputTitleElement, inputDescriptionElement, formElement } from './variables.js'
import { render } from './helpers.js'
import { Task } from './class.js'

function handleCloseModal() {
    modalViewElement.classList.remove('active')
    modalOverlayElement.classList.remove('active')
}

function handleConfirmDelete() {
    handleCloseModal()
} // in process


// Delete All
function handleCancelDelete() {
    handleCloseModal()
}

function handleDeleteAll() {
    modalViewElement.classList.add('active')
    modalOverlayElement.classList.add('active')
}

// Delete Task
function handleClickButtonDelete(event) {
    const target = event.target
    const role = target.dataset.role
    if (role === 'remove') {
        const taskElement = target.closest('.task-container')
        if (!taskElement) return
        const id = taskElement.dataset.id

        state.tasks = state.tasks.filter(task => task.id != Number(id));
        
        render(state.tasks)
    }
}

// Add task 
function handleAddTask(event) {
    event.preventDefault()
    modalAddElement.showModal()
    modalAddElement.classList.add('active')
    modalOverlayElement.classList.add('active')
}

function handleSubmitForm(event) {
    event.preventDefault()
    const title = inputTitleElement.value
    const description = inputDescriptionElement.value
    const userSelect = document.querySelector('#users')
    const user = userSelect.value ? userSelect.options[userSelect.selectedIndex].text : 'No user selected'
    const task = new Task(title, description, user)
    state.tasks.push(task)

    formElement.reset()
    render(state.tasks)
}

// Cancel Task
function handleCancelTask() {
    modalAddElement.classList.remove('active')
    modalOverlayElement.classList.remove('active')
    setTimeout(() => modalAddElement.close(), 300)
}

// Change Status
function handleTaskStatusChange(event) {
    const target = event.target
    if(target.classList.contains('task-status-select')) {
        const id = target.dataset.id
        const newStatus = event.target.value

        const task = state.tasks.find(task => task.id == id)
        
        if (task) {
            task.status = newStatus
            render(state.tasks)
        }
    }
}

// Export
export {
    handleCloseModal,
    handleConfirmDelete,
    handleDeleteAll,
    handleCancelDelete,
    handleClickButtonDelete,
    handleAddTask,
    handleSubmitForm,
    handleCancelTask,
    handleTaskStatusChange,
}

