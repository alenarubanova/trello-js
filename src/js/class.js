class Task {
    id = Date.now()
    time = new Date().toLocaleTimeString()
    constructor (title, description, user, status = 'start') {
        this.title = title
        this.description = description
        this.user = user
        this.status = status
    }
}

export { 
    Task 
}