function createTodo(text, callback) {
    if (typeof text !== 'string') throw new TypeErro(`${text} is not a string`)

    console.log('"creating a todo takes time" (fake call to API)')

    setTimeout(() => {
        const todo = {
            id: Date.now(),
            text,
            completed: false
        }

        _todos.push(todo)

        callback(null, todo.id)
    }, 1000)
}

function getAllTodos(callback) {
    console.log('"getting all todos takes time" (fake call to API)')

    setTimeout(() => {
        callback(null, _todos.map(todo => ({ ...todo }))) // return a copy so they cannot be manipulated by reference
    }, 1000)
}

function toggleTodoStatus(id, callback) {
    if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)

    console.log('"toggling a todo takes time" (fake call to API)')

    setTimeout(() => {
        const todo = _todos.find(todo => todo.id === id)

        if (!todo) throw new Error(`todo with id ${id} not found`)

        todo.completed = !todo.completed

        callback()
    }, 1000)
}