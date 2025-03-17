import '../scss/style.scss'
import { updateTime } from './timer.js'
import {buttonDeleteAllElement, divTasksWrapper, buttonCancelDeleteElement, buttonConfirmDeleteElement, buttonAddElement, buttonCancelAddElement, formElement, buttonCancelWarningElement, buttonCancelDeleteTaskElement, buttonConfirmDeleteTaskElement} from './variables.js'
import { handleDeleteAll, handleCancelDelete, handleConfirmDelete, handleAddTask, handleCancelTask, handleSubmitForm, handleClickButtonDelete, handleTaskStatusChange, handleClickButtonEdit, handleCancelWarning, handleCloseModalDeleteTask, handleClickButtonConfirm } from './handlers.js'
import { loadUsers, render, updateCount} from './helpers.js'
import { getDataFromStorage } from './storage.js'

let state = {
  tasks: getDataFromStorage()
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

// Warning Modal 
buttonCancelWarningElement.addEventListener('click', handleCancelWarning)

// Fetch-request 
document.addEventListener('DOMContentLoaded', loadUsers)

// Delete Task
divTasksWrapper.addEventListener('click', handleClickButtonDelete)
buttonCancelDeleteTaskElement.addEventListener('click', handleCloseModalDeleteTask)
buttonConfirmDeleteTaskElement.addEventListener('click', handleClickButtonConfirm)

// Add task
formElement.addEventListener('submit', handleSubmitForm)

// Change status Task
divTasksWrapper.addEventListener('change', handleTaskStatusChange)
divTasksWrapper.addEventListener('click', handleClickButtonEdit)

updateCount()
render(state.tasks)

export {
    state,
}


