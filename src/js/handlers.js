import { modalViewElement, modalOverlayElement } from './variables.js'
import { buildPopUpDeleteTask } from './helpers.js'

function handleCloseModal() {
    modalViewElement.style.display = 'none'
     modalOverlayElement.style.display = 'none'
}

function handleConfirmDelete() {
    handleCloseModal()
} // in process

function handleDeleteAll() {
    modalViewElement.innerHTML = buildPopUpDeleteTask()
    modalViewElement.style.display = 'block'
    modalOverlayElement.style.display = 'flex'
    document.getElementById('confirm-delete').addEventListener('click', handleConfirmDelete)
    document.getElementById('cancel-delete').addEventListener('click', handleCloseModal)
}

export {
    handleCloseModal,
    handleConfirmDelete,
    handleDeleteAll,
}

