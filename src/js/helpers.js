function buildPopUpDeleteTask() {
    return `
      <div class="modal-content">
        <span class="modal-text">Warning!</span>
        <div class="button-wrapper">
          <button class="modal-button" id="confirm-delete" type="button">Yes</button>
          <button class="modal-button" id="cancel-delete" type="button">No</button>
        </div>
      </div>
    `
}

function buildPopUpAddTask() {
    return `
        <form action="" method="post">
            <input type="text" id="title" name="title" placeholder="Title">
            <input id="description" name="description" placeholder="Description"></input>

            <select id="users" name="user" aria-label="Select user">
                <option value="" disabled selected>User</option>
                <option value="user">Alena</option>
                <option value="user">Katya</option>
                <option value="user">Oleg</option>
            </select>

            <button class="modal-button" id="task-btn__cancel" type="button">Cancel</button>
            <button class="modal-button" id="task-btn__confirm" type="submit">Confirm</button>
        </form>
    `
}

export {
    buildPopUpDeleteTask, 
    buildPopUpAddTask
}