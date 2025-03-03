import { modalViewElement, modalOverlayElement } from './variables.js'

function handleCloseModal() {
    modalViewElement.classList.remove('active')
    modalOverlayElement.classList.remove('active')
}

function handleConfirmDelete() {
    handleCloseModal()
} // in process

function handleDeleteAll() {
    modalViewElement.classList.add('active')
    modalOverlayElement.classList.add('active')
    document.getElementById('confirm-delete').addEventListener('click', handleConfirmDelete)
    document.getElementById('cancel-delete').addEventListener('click', handleCloseModal)
}

export {
    handleCloseModal,
    handleConfirmDelete,
    handleDeleteAll,
}

