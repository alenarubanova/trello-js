import '../scss/style.scss'
import { updateTime } from './timer.js'
import {buttonDeleteAllElement, divTasksWrapper, buttonCancelDeleteElement, buttonConfirmDeleteElement, buttonAddElement, buttonCancelAddElement, formElement} from './variables.js'
import { handleDeleteAll, handleCancelDelete, handleConfirmDelete, handleAddTask, handleCancelTask, handleSubmitForm, handleClickButtonDelete, handleTaskStatusChange } from './handlers.js'
import { loadUsers, render } from './helpers.js'

const state = {
    tasks: []
}

// Timer
setInterval(updateTime, 1000)

// Delete All
buttonDeleteAllElement.addEventListener('click', handleDeleteAll)
buttonConfirmDeleteElement.addEventListener('click', handleConfirmDelete)
buttonCancelDeleteElement.addEventListener('click', handleCancelDelete)

// Add task
buttonAddElement.addEventListener('click', handleAddTask)
buttonCancelAddElement.addEventListener('click', handleCancelTask)

// Fetch-request 
divTasksWrapper.addEventListener('DOMContentLoaded', loadUsers)

// Delete Task
document.addEventListener('click', handleClickButtonDelete)

// Add task
formElement.addEventListener('submit', handleSubmitForm)

// Change status Task
divTasksWrapper.addEventListener('change', handleTaskStatusChange)

render(state.tasks)

export {
    state,
}


