//Timer
const divClockElement = document.getElementById('clock')

//PopUp
const modalOverlayElement = document.getElementById('modal-overlay')

// Button Delete Task
const divTasksWrapper = document.querySelector('.tasks-wrapper')

//Modal Delete All
const buttonDeleteAllElement = document.getElementById('task-btn__delete')
const modalViewElement = document.getElementById('modal-delete')
const buttonConfirmDeleteElement = document.getElementById('confirm-delete')
const buttonCancelDeleteElement = document.getElementById('cancel-delete')

// Modal Add Task
const buttonAddElement = document.getElementById('task-btn__start')
const modalAddElement = document.getElementById('modal')
const buttonCancelAddElement = document.getElementById('closeModal')

// Modal warning
const modalWarningElement = document.querySelector('#modal-warning')
const buttonCancelWarningElement = document.querySelector('#cancel-warning')

// Select user
const selectElement = document.querySelector('#users')

// Add Task 
const formElement = document.querySelector('#form')
const inputTitleElement = document.querySelector('#title')
const inputDescriptionElement = document.querySelector('#description')

//Delete Task
const divTaskContent = document.querySelector('.task-content')

// Status Task
const divTaskStartElement = document.querySelector('#task-content__start')
const divTaskProgressElement = document.querySelector('#task-content__progress')
const divTaskDoneElement = document.querySelector('#task-content__done')

// Counter Task 
const spanCountStart = document.querySelector('.task-count__start')
const spanCountProgress = document.querySelector('.task-count__progress')
const spanCountDone = document.querySelector('.task-count__done')

//Export variables
export {
    divClockElement,
    modalOverlayElement,
    divTasksWrapper,
    buttonDeleteAllElement,
    modalViewElement,
    buttonConfirmDeleteElement,
    buttonCancelDeleteElement,
    buttonAddElement,
    modalAddElement,
    buttonCancelAddElement,
    modalWarningElement,
    buttonCancelWarningElement,
    selectElement,
    formElement,
    inputTitleElement,
    inputDescriptionElement,
    divTaskContent,
    divTaskStartElement,
    divTaskProgressElement,
    divTaskDoneElement,
    spanCountStart,
    spanCountProgress,
    spanCountDone,
}