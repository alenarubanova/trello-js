import { state } from './main.js'
import { modalViewElement, modalOverlayElement, modalAddElement, inputTitleElement, inputDescriptionElement, formElement, modalWarningElement } from './variables.js'
import { render, validateForm, updateCount, openWarningModal } from './helpers.js'
import { Task } from './class.js'
import { setDataToStorage } from './storage.js'

// Variables
let editingTaskId = null

// Close Modal
function handleCloseModal() {
    modalViewElement.classList.remove('active')
    modalOverlayElement.classList.remove('active')
}

// Delete All
function handleCancelDelete() {
    handleCloseModal()
}

function handleDeleteAll() {
    modalViewElement.classList.add('active')
    modalOverlayElement.classList.add('active')
}

// Warning Modal
function handleCancelWarning() {
    modalWarningElement.classList.remove('active')
    modalOverlayElement.classList.remove('active')
}

// Add task 
function handleAddTask(event) {
    event.preventDefault()
    modalAddElement.showModal()
    modalAddElement.classList.add('active')
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
        state.tasks = state.tasks.filter(task => task.id != Number(id))
        setDataToStorage(state.tasks)

        render(state.tasks)
        updateCount()
    }
}


function handleConfirmDelete() {
    state.tasks = state.tasks.filter(task => task.status !== 'done')
    setDataToStorage(state.tasks)
    render(state.tasks)
    updateCount()
    handleCloseModal()
}


// Edit Task 
function handleClickButtonEdit(event) {
    const target = event.target
    const role = target.dataset.role
    
    if (role === 'edit') {
        const taskElement = target.closest('.task-container')
        if (!taskElement) return
        
        const id = taskElement.dataset.id
        const task = state.tasks.find(task => task.id == id)

        if (task) {
            modalAddElement.showModal()
            modalAddElement.classList.add('active')
            modalOverlayElement.classList.add('active')

            inputTitleElement.value = task.title
            inputDescriptionElement.value = task.description

            const userSelect = document.getElementById('users')
            for (let option of userSelect.options) {
                if (option.text === task.user) {
                    option.selected = true
                    break
                }
            }

            editingTaskId = id
        }
    }
}


// Submit form
function handleSubmitForm(event) {
    event.preventDefault();

    const title = inputTitleElement.value.trim()
    const description = inputDescriptionElement.value.trim()
    const userSelect = document.getElementById('users')
    const user = userSelect.options[userSelect.selectedIndex]?.text || ''

    if (!validateForm(inputTitleElement, inputDescriptionElement, userSelect)) return

    if (editingTaskId !== null) {
        const task = state.tasks.find(task => task.id == editingTaskId)
        if (task) {
            task.title = title
            task.description = description
            task.user = user
        }
        editingTaskId = null
    } else {
        const task = new Task(title, description, user)
        state.tasks.push(task)
    }

    setDataToStorage(state.tasks)
    render(state.tasks)
    updateCount()
    modalAddElement.close()
    modalOverlayElement.classList.remove('active')
    formElement.reset()
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
    if (target.classList.contains('task-status-select')) {
        const id = target.dataset.id
        const newStatus = event.target.value

        if (newStatus === "progress" && state.tasks.filter(task => task.status === 'progress').length >= 2) {
            openWarningModal()
            target.value = state.tasks.find(task => task.id == id)?.status || 'task'
            return
        }

        const task = state.tasks.find(task => task.id == id)
        
        if (task) {
            task.status = newStatus
            setDataToStorage(state.tasks)
            render(state.tasks)
            updateCount()
        }
    }
}



// Export
export {
    handleCloseModal,
    handleConfirmDelete,
    handleDeleteAll,
    handleCancelWarning,
    handleCancelDelete,
    handleClickButtonDelete,
    handleAddTask,
    handleSubmitForm,
    handleClickButtonEdit,
    handleCancelTask,
    handleTaskStatusChange,
}

